'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AxiosError } from 'axios'
import { api } from '@/lib/axios'
import { toast } from '@/components/ui/use-toast'
import { useRegisterBarberModal } from '@/hooks/use-register-barber-modal-store'

const formSchema = z.object({
  email: z.string().email('Insira um formato válido de email.'),
})

type FormData = z.infer<typeof formSchema>

export function useRegisterBarberFormController() {
  const [submitErrors, setSubmitErrors] = useState<string[]>([])
  const useRegisterBarberStore = useRegisterBarberModal()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const handleFormSubmit = async (formData: FormData) => {
    setSubmitErrors([])

    try {
      await api.post('/barber', formData)

      toast({
        description: 'Funcionário registrado com sucesso.',
      })

      useRegisterBarberStore.onClose()
    } catch (err) {
      if (err instanceof AxiosError) {
        const errMsg = err.response?.data.message

        setSubmitErrors((prevState) => [...prevState, errMsg])
      }
    }
  }

  const emailFilled = form.watch('email')

  const allTheRequiredFieldsAreFilled = emailFilled

  return { form, handleFormSubmit, submitErrors, allTheRequiredFieldsAreFilled }
}
