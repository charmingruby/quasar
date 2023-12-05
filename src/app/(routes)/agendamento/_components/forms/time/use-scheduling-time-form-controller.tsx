import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { cuts } from '@/data/cuts'
import { SchedulingRegisterContext } from '@/contexts/scheduling-register-context'
import { useContext, useState } from 'react'
import add from 'date-fns/add'
import { clearDate, getParamsFromADate } from '@/utils/get-params-from-a-date'
import { api } from '@/lib/axios'

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
}

const formSchema = z.object({
  date: z.date({
    required_error: 'A date of birth is required.',
  }),
  hours: z.string().min(1),
  minutes: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function useSchedulingTimeFormController() {
  const [barbers, setBarbers] = useState<BarberType[]>([])
  const [timeValidation, setTimeValidation] = useState<boolean>(false)
  const { getData } = useContext(SchedulingRegisterContext)

  const { name } = getData()

  const filteredCut = cuts.filter((props) => props.value === name)
  const cutPeriod = filteredCut[0]?.amountOfTime * 15

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: undefined,
      hours: '',
      minutes: '',
    },
  })
  const { push } = useRouter()

  const handleFormSubmit = (data: FormData) => {
    console.log(data)
  }

  const getBarbersData = async () => {
    const { data } = await api.get('/scheduling')

    const barbers = data as BarberType[]

    return barbers
  }

  const handleTimeChoose = async (data: FormData) => {
    setTimeValidation(true)

    const barbers = await getBarbersData()

    const { hours, minutes } = getParamsFromADate('11:20')
    const initialDate = new Date()
    initialDate.setHours(hours, minutes, 0, 0)
    const initialDateConverted = initialDate.toLocaleString('pt-BR')

    const endDate = add(initialDate, {
      minutes: cutPeriod,
    })

    const endDateConverted = endDate.toLocaleString('pt-BR')

    const clearEndDate = clearDate(endDateConverted)

    filterBarbers(barbers, data.date, initialDateConverted, clearEndDate)
  }

  function beetwenInterval(to: TimeToCompare, verify: TimeToCompare) {
    return to.initial <= verify.initial && to.initial >= verify.end
  }

  function overflowInterval(to: TimeToCompare, verify: TimeToCompare) {
    return (
      to.initial <= verify.initial &&
      to.end >= verify.initial &&
      to.end <= verify.end
    )
  }

  function underflowInterval(to: TimeToCompare, verify: TimeToCompare) {
    return to.initial >= verify.initial && to.initial >= verify.end
  }

  // function sameDay(toDate: Date, verifyDate: Date) {}

  function lunchInterval(to: TimeToCompare) {
    const lunch: TimeToCompare = {
      initial: '12:00',
      end: '14:00',
    }

    return to.initial >= lunch.initial && to.end <= lunch.end
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
    }

    barbers.forEach((barber) => {
      barber.schedulings.forEach((scheduling) => {
        const verifyInterval: TimeToCompare = {
          initial: scheduling.time,
          end: scheduling.endAt,
        }

        console.log('BETWEEN', beetwenInterval(toInterval, verifyInterval))
        console.log('UNDERFLOW', underflowInterval(toInterval, verifyInterval))
        console.log('OVERFLOW', overflowInterval(toInterval, verifyInterval))
        console.log('LUNCH', lunchInterval(toInterval))

        const isIntervalInvalid =
          beetwenInterval(toInterval, verifyInterval) &&
          underflowInterval(toInterval, verifyInterval) &&
          overflowInterval(toInterval, verifyInterval) &&
          lunchInterval(toInterval)

        if (!isIntervalInvalid) {
          availableBarbers.push(barber)
          console.log(scheduling)
        } else {
          console.log('oi')
        }
      })
    })

    setBarbers(availableBarbers)
  }

  return {
    handleFormSubmit,
    form,
    cutPeriod,
    getBarbersData,
    barbers,
    timeValidation,
    handleTimeChoose,
  }
}
