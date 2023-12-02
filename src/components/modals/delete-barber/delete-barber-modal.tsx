'use client'

import { Modal } from '../../ui/modals'
import DeleteBarberContent from './delete-barber-content'
import { useDeleteBarberModal } from '@/hooks/use-delete-barber-modal-store'

export function DeleteBarberModal() {
  const useDeleteBarberStore = useDeleteBarberModal()

  return (
    <Modal
      title="Excluir funcionário"
      description="Remova um funcionário da barbearia."
      isOpen={useDeleteBarberStore.isOpen}
      onClose={useDeleteBarberStore.onClose}
    >
      <DeleteBarberContent />
    </Modal>
  )
}
