'use client'

import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CheckCircle, Circle, ClipboardIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { usePromoCodeController } from './use-promo-code-controller'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

export function PromoCodeGenerator() {
  const [earlierCode, setEarlierCode] = useState('')
  const [amountOfSchedules, setAmountOfSchedules] = useState<number>(0)
  const { data } = useSession()
  const { handlePromoCodeGeneration, isLoading } = usePromoCodeController()
  const { data: session, status } = useSession()

  const userId = session?.user.id

  const fetchData = useCallback(async () => {
    if (status === 'loading') {
      return null
    }

    try {
      const { data } = await api.get(`/customer/${userId}`)

      setAmountOfSchedules(data.amountOfSchedules)

      const promoCode = await api.post('/promo-code', { userId })

      setEarlierCode(promoCode.data.code)
    } catch (err) {
      setEarlierCode('')
    }
  }, [status, userId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!data) {
    return (
      <CardContent>
        <Loader />
      </CardContent>
    )
  }

  const amountOfSchedulings = amountOfSchedules
  const amountDone = amountOfSchedulings % 5

  let amountOfSchedulesLeft
  let amountDoneChecks

  if (amountOfSchedules === 0) {
    amountOfSchedulesLeft = 5
    amountDoneChecks = 0
  } else {
    if (amountDone === 0) {
      amountOfSchedulesLeft = 0
      amountDoneChecks = 5
    } else {
      amountOfSchedulesLeft = 5 - amountDone
      amountDoneChecks = amountDone
    }
  }

  const disableButtonIfNotAMultipleOf5 =
    amountOfSchedules === 0 || amountDone !== 0

  const handleCopyPromoCode = () => {
    if (!earlierCode) {
      return
    }

    navigator.clipboard.writeText(earlierCode)
    toast.success('Código de desconto copiado com sucesso.', {
      position: 'bottom-right',
    })
  }

  return (
    <CardContent>
      <div className="flex flex-col items-end w-full">
        <Input readOnly value={earlierCode ?? ''} />
        <div
          className="flex items-center gap-1 mt-1.5 group cursor-pointer"
          onClick={() => handleCopyPromoCode()}
        >
          <ClipboardIcon className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
          <small className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Copiar codigo
          </small>
        </div>
      </div>
      <div className="space-y-1 my-4">
        <small className="text-muted-foreground">Agendamentos restantes</small>

        <div className="flex items-center gap-1">
          {Array.from({ length: amountDoneChecks }, (_, i) => i + 1).map(
            (idx) => (
              <CheckCircle key={idx} className="text-emerald-500 h-4 w-4" />
            ),
          )}
          {Array.from({ length: amountOfSchedulesLeft }, (_, i) => i + 1).map(
            (idx) => (
              <Circle key={idx} className="text-muted-foreground h-4 w-4" />
            ),
          )}
        </div>
      </div>

      <Button
        disabled={disableButtonIfNotAMultipleOf5 || isLoading}
        onClick={() => handlePromoCodeGeneration()}
      >
        {isLoading ? <Loader /> : <span> Gerar código</span>}
      </Button>
    </CardContent>
  )
}
