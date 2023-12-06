'use client'

import { Modal } from '../../ui/modals'
import { BarberScheduleContent } from './barber-schedule-content'
import { useBarberScheduleModal } from '@/hooks/use-barber-schedule-modal-store'

export function BarberScheduleModal() {
  const barberScheduleModal = useBarberScheduleModal()

  return (
    <Modal
      title="Seus agendamentos"
      description="Verifica seus agendamentos."
      isOpen={barberScheduleModal.isOpen}
      onClose={barberScheduleModal.onClose}
    >
      <BarberScheduleContent />
    </Modal>
  )
}
