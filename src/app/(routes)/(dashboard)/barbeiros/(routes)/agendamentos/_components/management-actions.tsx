'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SchedulingData } from '../page'
import { DollarSign, X } from 'lucide-react'
import { useCloseScheduleModal } from '@/hooks/use-close-schedule-modal-store'
import { status } from '@/data/status'

interface ManagementActionsProps {
  data: SchedulingData
}

export function ManagementActions({ data }: ManagementActionsProps) {
  const closeScheduleModal = useCloseScheduleModal()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <span>Gerenciar</span>
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>

        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => {
            closeScheduleModal.setSchedulingId(data.id)
            closeScheduleModal.setStatus('Pago')
            closeScheduleModal.onOpen()
          }}
        >
          <DollarSign className="h-3 w-3 text-muted-foreground mb-0.5" />

          <span>Validar pagamento</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-2 bg-destructive text-destructive-foreground focus:text-destructive-foreground focus:bg-destructive/80"
          onClick={() => {
            closeScheduleModal.setSchedulingId(data.id)
            closeScheduleModal.setStatus(status[2])
            closeScheduleModal.onOpen()
          }}
        >
          <X className="h-3 w-3 text-destructive-foreground" />
          Desmarcar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
