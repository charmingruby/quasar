'use client'

import { RegisterBarberModal } from '@/components/modals/register-barber-modal'
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
      <RegisterBarberModal />
    </>
  )
}
