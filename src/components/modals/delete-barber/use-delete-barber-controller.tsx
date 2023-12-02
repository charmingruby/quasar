'use client'

import { useDeleteBarberModal } from '@/hooks/use-delete-barber-modal-store'
import { api } from '@/lib/axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function useDeleteBarberController() {
  const useDeleteBarberStore = useDeleteBarberModal()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleRemoveBarber() {
    try {
      setIsLoading(true)
      await api.delete(`/barber/${useDeleteBarberStore.barberId}`)
      useDeleteBarberStore.onClose()
      toast.success('Barbeiro excluido.', { position: 'bottom-right' })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleRemoveBarber, isLoading }
}
