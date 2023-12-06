'use client'

import { Modal } from '../../ui/modals'
import { useCloseScheduleModal } from '@/hooks/use-close-schedule-modal-store'
import CloseScheduleContent from './close-schedule-content'

export function CloseScheduleModal() {
  const closeScheduleModal = useCloseScheduleModal()

  return (
    <Modal
      title="Alterar agendamento"
      description="Alterar o status do agendamento desejado."
      isOpen={closeScheduleModal.isOpen}
      onClose={closeScheduleModal.onClose}
    >
      <CloseScheduleContent />
    </Modal>
  )
}
