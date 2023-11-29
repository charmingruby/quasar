import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'

export default function Customers() {
  return (
    <div>
      <DashboardHeading
        heading="Agendamentos"
        description="Gerencie os agendamentos."
      />

      <Separator className="my-6" />
    </div>
  )
}
