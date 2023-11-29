import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'

export default function BarberOverview() {
  return (
    <div>
      <DashboardHeading
        heading="Visão geral"
        description="Tenha uma visão ampla do seu negócio."
      />

      <Separator className="my-6" />
    </div>
  )
}
