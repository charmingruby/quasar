'use client'

import { BarberScheduleModal } from '@/components/modals/barber-schedules/barber-schedule-modal'
import { CloseScheduleModal } from '@/components/modals/close-schedule/close-schedule-modal'
import { DeleteBarberModal } from '@/components/modals/delete-barber/delete-barber-modal'
import { RegisterBarberModal } from '@/components/modals/register-barber/register-barber-modal'
import { useEffect, useState } from 'react'

export function ModalsProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <BarberScheduleModal />
      <CloseScheduleModal />
      <RegisterBarberModal />
      <DeleteBarberModal />
    </>
  )
}
