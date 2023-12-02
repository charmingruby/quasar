'use client'

import { DashboardHeading } from '@/components/dashboard-heading'

export function BarbersListHeader() {
  return (
    <div className="flex items-center justify-between">
      <DashboardHeading
        heading="Clientes"
        description="Gerencie os clientes."
      />
    </div>
  )
}
