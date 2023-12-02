'use client'

import { Button } from '@/components/ui/button'
import { useDeleteBarberModal } from '@/hooks/use-delete-barber-modal-store'
import { useDeleteBarberController } from './use-delete-barber-controller'
import { Loader } from '@/components/loader'

export default function DeleteBarberContent() {
  const useDeleteBarberModalStore = useDeleteBarberModal()
  const { handleRemoveBarber, isLoading } = useDeleteBarberController()
  return (
    <div>
      <span>Tem certeza que deseja excluir esse barbeiro?</span>
      <div className="flex items-center justify-end gap-2 mt-4  ">
        <Button variant="ghost" onClick={useDeleteBarberModalStore.onClose}>
          Cancelar
        </Button>
        <Button
          variant="destructive"
          disabled={isLoading}
          onClick={() => handleRemoveBarber()}
        >
          {isLoading ? <Loader /> : <span>Excluir</span>}
        </Button>
      </div>
    </div>
  )
}
