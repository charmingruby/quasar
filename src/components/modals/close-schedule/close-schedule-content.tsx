'use client'

import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'
import { useCloseScheduleModal } from '@/hooks/use-close-schedule-modal-store'
import { useCloseScheduleController } from './use-close-schedule-controller'

export default function CloseScheduleContent() {
  const closeScheduleModal = useCloseScheduleModal()
  const { isLoading, handleCloseSchedule } = useCloseScheduleController()

  return (
    <div>
      <span>Tem certeza que deseja alterar?</span>
      <div className="flex items-center justify-end gap-2 mt-4  ">
        <Button variant="ghost" onClick={closeScheduleModal.onClose}>
          Cancelar
        </Button>
        <Button
          disabled={isLoading}
          onClick={() => handleCloseSchedule(closeScheduleModal.status)}
        >
          {isLoading ? <Loader /> : <span>Sim</span>}
        </Button>
      </div>
    </div>
  )
}
