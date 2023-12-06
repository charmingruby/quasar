import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { cuts } from '@/data/cuts'
import {
  SchedulingRegisterContext,
  TimeStepAssignType,
} from '@/contexts/scheduling-register-context'
import { useContext, useState } from 'react'
import add from 'date-fns/add'
import { api } from '@/lib/axios'
import { status } from '@/data/status'

interface UserType {
  fullName: string
}

interface SchedulingType {
  date: Date
  endAt: string
  time: string
}

interface BarberType {
  id: string
  userId: string
  schedulings: SchedulingType[]
  createdAt: Date
  updatedAt: Date
  user: UserType
}

interface TimeToCompare {
  initial: string
  end: string
  date: Date
}

const formSchema = z.object({
  date: z.date({
    required_error: 'Preencha a data de agendamento.',
  }),
  hours: z.string().min(1, 'Preencha as horas.'),
  minutes: z.string().min(1, 'Preencha os minutos.'),
  barber: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function useSchedulingTimeFormController() {
  const [barbers, setBarbers] = useState<BarberType[]>([])
  const [timeValidation, setTimeValidation] = useState<boolean>(true)
  const [validSchedule, setValidSchedule] = useState<boolean>(false)
  const [availabilityError, setAvailabilityError] = useState<string>('')
  const { getData } = useContext(SchedulingRegisterContext)
  const { timeAssignData } = useContext(SchedulingRegisterContext)
  const [endAt, setEndAt] = useState<string>('')

  const { name } = getData()
  const filteredCut = cuts.filter((props) => props.value === name)
  const cutPeriod = filteredCut[0]?.amountOfTime * 15

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: undefined,
      hours: '',
      minutes: '00',
    },
  })

  const { push } = useRouter()

  const barberFilled = form.watch('barber')

  const handleFormSubmit = ({ date, hours, minutes, barber }: FormData) => {
    if (!barber) {
      return null
    }

    const filteredCut = cuts.filter((props) => props.value === name)
    const cutPeriod = filteredCut[0]?.amountOfTime

    const dataToAssign: TimeStepAssignType = {
      barberId: String(barber),
      status: status[0],
      date,
      timeInAQuarterOfAnHourQuantity: cutPeriod,
      endAt,
      price: Number((filteredCut[0].price / 100).toFixed(2)),
      time: `${hours}:${minutes}`,
    }

    timeAssignData(dataToAssign)

    push('/agendamento/fidelidade')
  }

  const getBarbersData = async () => {
    const { data } = await api.get('/scheduling')
    const barbers = data as BarberType[]
    return barbers
  }

  const handleTimeChoose = async (data: FormData) => {
    setTimeValidation(true)

    const barbers = await getBarbersData()

    const initialTime = `${data.hours}:${data.minutes}`

    const initialDate = add(data.date, {
      hours: Number(data.hours),
      minutes: Number(data.minutes),
    })

    const endDate = add(initialDate, {
      minutes: cutPeriod,
    })

    const endDateMinutesFormatted =
      endDate.getMinutes() === 0 ? '00' : String(endDate.getMinutes())

    const endTime = endDate.getHours() + ':' + endDateMinutesFormatted

    setEndAt(endTime)

    filterBarbers(barbers, initialDate, initialTime, endTime)
  }

  function NaoValidaEntre(to: TimeToCompare, verify: TimeToCompare) {
    const isInvalid =
      (to.initial <= verify.initial && to.end <= verify.end) ||
      (to.initial >= verify.initial && to.end <= verify.end) ||
      (to.initial >= verify.initial &&
        to.end >= verify.end &&
        to.initial < verify.end)

    return isInvalid && sameDay(to.date, verify.date)
  }

  function sameDay(toDate: Date, verifyDate: Date) {
    return (
      toDate.getFullYear() === verifyDate.getFullYear() &&
      toDate.getMonth() === verifyDate.getMonth() &&
      toDate.getDay() === verifyDate.getDay()
    )
  }

  function commercialInterval(to: TimeToCompare) {
    const lunch: TimeToCompare = {
      initial: '12:00',
      end: '14:00',
      date: new Date(),
    }

    const businessEnd: TimeToCompare = {
      initial: '18:00',
      end: '08:00',
      date: new Date(),
    }

    if (to.end.length === 4) {
      to.end = '0' + to.end
    }

    if (to.initial.length === 4) {
      to.end = '0' + to.end
    }

    return (
      (to.initial > lunch.initial && to.end < lunch.end) ||
      (to.initial < lunch.initial && to.end > lunch.initial) ||
      to.end > businessEnd.initial
    )
  }

  const filterBarbers = (
    barbers: BarberType[],
    date: Date,
    initialTime: string,
    endTime: string,
  ) => {
    const availableBarbers: BarberType[] = []
    const toInterval: TimeToCompare = {
      initial: initialTime,
      end: endTime,
      date,
    }

    setValidSchedule(false)

    if (commercialInterval(toInterval)) {
      setAvailabilityError('Horário em conflito com pausas comerciais.')
      setValidSchedule(false)
      return
    }

    barbers.forEach((barber) => {
      if (barber.schedulings.length === 0) {
        availableBarbers.push(barber)
        setValidSchedule(true)
        setTimeValidation(false)
      }

      barber.schedulings.forEach((scheduling) => {
        const verifyInterval: TimeToCompare = {
          initial: scheduling.time,
          end: scheduling.endAt,
          date: add(new Date(scheduling.date), {
            hours: 14,
            minutes: 30,
          }),
        }

        const isIntervalInvalid = NaoValidaEntre(toInterval, verifyInterval)
        console.log(isIntervalInvalid)

        if (!isIntervalInvalid && !availableBarbers.includes(barber)) {
          availableBarbers.push(barber)
          setAvailabilityError('')
          setValidSchedule(true)
          setTimeValidation(false)
        }
      })
    })

    if (availableBarbers.length === 0) {
      setAvailabilityError('Horário indisponível.')
    }

    setBarbers(availableBarbers)
  }

  return {
    handleFormSubmit,
    form,
    cutPeriod,
    barbers,
    timeValidation,
    handleTimeChoose,
    validSchedule,
    availabilityError,
    barberFilled,
  }
}
