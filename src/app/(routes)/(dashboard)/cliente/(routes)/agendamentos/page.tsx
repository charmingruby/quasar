import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'

export default function Agendamentos() {
  return (
    <div>
      <DashboardHeading
        heading="Agendamentos"
        description="Gerencie os seus agendamentos."
      />

      <Separator className="my-6" />
    </div>
  )
}
