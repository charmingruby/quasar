'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email('Insira um formato válido de email.'),
  password: z
    .string()
    .min(8, 'Senha deve ter no minimo 8 caracteres.')
    .max(20, 'Senha deve ter no máximo 20 caracteres.'),
})

type FormData = z.infer<typeof formSchema>

interface SignInResponse {
  error: string | undefined // Error code based on the type of error
  status: number // HTTP status code
  ok: boolean // `true` if the signin was successful
  url: string | null // `null` if there was an error, otherwise URL to redirected to
}

export function useLoginFormController() {
  const [submitErrors, setSubmitErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { push, refresh } = useRouter()

  const handleFormSubmit = async (formData: FormData) => {
    setSubmitErrors([])

    setIsLoading(true)
    signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    })
      .then((data) => {
        const res = data as SignInResponse

        if (res.ok) {
          push('/')
          refresh()
        } else {
          setSubmitErrors((prevState) => [
            ...prevState,
            'Credenciais inválidas.',
          ])
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const emailFilled = form.watch('email')
  const passwordFilled = form.watch('password')

  const allTheRequiredFieldsAreFilled = emailFilled && passwordFilled

  return {
    form,
    handleFormSubmit,
    submitErrors,
    allTheRequiredFieldsAreFilled,
    isLoading,
  }
}
