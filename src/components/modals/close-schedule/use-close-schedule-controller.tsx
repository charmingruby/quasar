'use client'

import { useCloseScheduleModal } from '@/hooks/use-close-schedule-modal-store'
import { api } from '@/lib/axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function useCloseScheduleController() {
  const closeScheduleModal = useCloseScheduleModal()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleCloseSchedule(status: string) {
    try {
      setIsLoading(true)

      await api.put(`/scheduling/${closeScheduleModal.schedulingId}`, {
        status,
      })

      closeScheduleModal.onClose()

      if (status === 'Pago') {
        return toast.success('Agendamento pago', {
          position: 'bottom-right',
        })
      }

      if (status === 'Desmarcado') {
        return toast.success('Agendamento desmarcado', {
          position: 'bottom-right',
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleCloseSchedule, isLoading }
}
