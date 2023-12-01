'use client'

import { useRegisterBarberModal } from '@/hooks/use-register-barber-modal-store'
import { Plus } from 'lucide-react'
import { DashboardHeading } from '@/components/dashboard-heading'
import { Button } from '@/components/ui/button'

export function BarbersListHeader() {
  const useRegisterBarberStore = useRegisterBarberModal()

  return (
    <div className="flex items-center justify-between">
      <DashboardHeading
        heading="Funcionários"
        description="Gerencie os funcionários."
      />

      <Button size="sm" onClick={useRegisterBarberStore.onOpen}>
        <Plus className="h-4 w-4" />
        Adicionar
      </Button>
    </div>
  )
}
