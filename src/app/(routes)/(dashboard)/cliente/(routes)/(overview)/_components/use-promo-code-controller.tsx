'use client'

import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface ResponseType {
  amountDone: number
  code: string | null
}

export function usePromoCodeController() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [code, setCode] = useState<string | null>(null)
  const { data: session } = useSession()

  async function handlePromoCodeGeneration() {
    setIsLoading(true)

    try {
      if (!session) {
        setIsLoading(true)
      }

      const userId = session?.user.id

      const { data } = await api.post('/promo-code/generate', {
        id: userId,
      })

      const result = data as ResponseType

      if (result === null) {
        return setCode(null)
      }

      setCode(result.code)

      toast.success('Código gerado.')
    } catch (err) {
      console.error(err)

      if (err instanceof AxiosError) {
        const errMsg = err.response?.data.message
        toast.error(errMsg, { position: 'bottom-right' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handlePromoCodeGeneration,
    code,
    isLoading,
  }
}
