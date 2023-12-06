'use client'

import { CreateSchedulingRequest } from '@/app/api/scheduling/route'
import { SchedulingRegisterContext } from '@/contexts/scheduling-register-context'
import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  promoCode: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function useSchedulingFidelityFormController() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [submitErrors, setSubmitErrors] = useState<string>('')
  const { getData } = useContext(SchedulingRegisterContext)
  const { data } = useSession()
  const { push } = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      promoCode: '',
    },
  })

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true)

    const {
      age,
      barberId,
      date,
      endAt,
      name,
      price,
      status,
      time,
      timeInAQuarterOfAnHourQuantity,
      observation,
    } = getData()

    const currentCustomerId = data?.user.id

    if (!currentCustomerId) {
      return null
    }

    const body: CreateSchedulingRequest = {
      ageCategory: age,
      barberId,
      date,
      endAt,
      name,
      price,
      status,
      time,
      timeInAQuarterOfAnHourQuantity,
      observation,
      userId: currentCustomerId,
      promoCode: formData.promoCode,
    }

    try {
      await api.post('/scheduling', body)
      push('/cliente')
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err)

        setSubmitErrors(err.response?.data.message)
      }
    }

    setIsLoading(false)
  }

  return { form, handleFormSubmit, isLoading, submitErrors }
}
