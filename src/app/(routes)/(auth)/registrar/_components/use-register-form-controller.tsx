'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AxiosError } from 'axios'
import { api } from '@/lib/axios'
import { toast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(4, 'Nome deve ter no minimo 4 caracteres.').max(32, ''),
  email: z.string().email('Insira um formato válido de email.'),
  cpf: z
    .string()
    .min(14, 'Insira um formato válido de CPF.')
    .max(14, 'Insira um formato válido de CPF.'),
  phoneNumber: z
    .string()
    .min(14, 'Insira um formato válido de número de telefone.')
    .max(15, 'Insira um formato válido de número de telefone'),
  password: z
    .string()
    .min(8, 'Senha deve ter no minimo 8 caracteres.')
    .max(20, 'Senha deve ter no máximo 20 caracteres.'),
})

type FormData = z.infer<typeof formSchema>

export function useRegisterFormController() {
  const [submitErrors, setSubmitErrors] = useState<string[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      phoneNumber: '',
      password: '',
    },
  })

  const { push } = useRouter()

  const handleFormSubmit = async (formData: FormData) => {
    setSubmitErrors([])

    try {
      await api.post('/register', formData)

      toast({
        description: 'Conta criada com sucesso.',
      })
      push('/')
    } catch (err) {
      if (err instanceof AxiosError) {
        const errMsg = err.response?.data.message

        setSubmitErrors((prevState) => [...prevState, errMsg])
      }
    }
  }

  const fullNameFilled = form.watch('name')
  const emailFilled = form.watch('email')
  const cpfFilled = form.watch('cpf')
  const phoneNumberFilled = form.watch('phoneNumber')
  const passwordFilled = form.watch('password')

  const allTheRequiredFieldsAreFilled =
    fullNameFilled &&
    emailFilled &&
    cpfFilled &&
    phoneNumberFilled &&
    passwordFilled

  return { form, handleFormSubmit, submitErrors, allTheRequiredFieldsAreFilled }
}
