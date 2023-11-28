'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, '').max(16, ''),
})

type FormData = z.infer<typeof formSchema>

export function useLoginFormController() {
  const [submitErrors, setSubmitErrors] = useState<string[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { push } = useRouter()

  const handleFormSubmit = async (formData: FormData) => {
    setSubmitErrors([])

    const result = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      callbackUrl: '/',
      redirect: true,
    })

    if (result?.error) {
      setSubmitErrors((prevState) => [...prevState, 'Credenciais inválidas.'])
    }

    // push('/')
  }

  const emailFilled = form.watch('email')
  const passwordFilled = form.watch('password')

  const allTheRequiredFieldsAreFilled = emailFilled && passwordFilled

  return { form, handleFormSubmit, submitErrors, allTheRequiredFieldsAreFilled }
}
