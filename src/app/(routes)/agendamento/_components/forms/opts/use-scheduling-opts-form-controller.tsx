'use client'

import { SchedulingRegisterContext } from '@/contexts/scheduling-register-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'Informe o tipo de corte.'),
  age: z.string().min(1, 'Informe sua faixa etária.'),
  observation: z.string(),
})

type FormData = z.infer<typeof formSchema>

export function useSchedulingOptsFormController() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { optAssignData } = useContext(SchedulingRegisterContext)
  const { push } = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: '',
      name: '',
      observation: '',
    },
  })

  const handleFormSubmit = (formData: FormData) => {
    setIsLoading(true)
    optAssignData(formData)

    push('/agendamento/horarios')

    setIsLoading(false)
  }

  const nameFilled = form.watch('name')
  const ageFilled = form.watch('age')

  const allTheRequiredFieldsAreFilled = nameFilled && ageFilled

  return { form, handleFormSubmit, allTheRequiredFieldsAreFilled, isLoading }
}
