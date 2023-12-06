'use client'

import { useBarberScheduleModal } from '@/hooks/use-barber-schedule-modal-store'
import { api } from '@/lib/axios'
import { useCallback, useState } from 'react'

interface Scheduling {
  name: string
  age_category: string
  date: string
  time: string
  endAt: string
  fullName: string
  status: string
  customer: {
    user: { fullName: string }
  }
}

export function useBarberScheduleController() {
  const barberScheduleModal = useBarberScheduleModal()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [schedulings, setSchedulings] = useState<Scheduling[]>([])

  const cbBarberSchedule = useCallback(async () => {
    try {
      setIsLoading(true)

      const { data } = await api.get(
        `/barber/scheduling/${barberScheduleModal.barberId}`,
      )

      const schedulings = data as Scheduling[]

      setSchedulings(schedulings)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [barberScheduleModal])

  return { cbBarberSchedule, isLoading, schedulings }
}
