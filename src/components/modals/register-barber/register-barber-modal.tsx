'use client'

import { useRegisterBarberModal } from '@/hooks/use-register-barber-modal-store'
import { Modal } from '../../ui/modals'
import RegisterBarberForm from './register-barber-form'

export function RegisterBarberModal() {
  const registerBarberModal = useRegisterBarberModal()

  return (
    <Modal
      title="Registrar novo funcionário"
      description="Transforme uma conta já criada em um funcionário."
      isOpen={registerBarberModal.isOpen}
      onClose={registerBarberModal.onClose}
    >
      <RegisterBarberForm />
    </Modal>
  )
}
