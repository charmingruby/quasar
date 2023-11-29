import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'

export default function CustomerOverview() {
  return (
    <div>
      <DashboardHeading
        heading="Visão geral"
        description="Tenha uma visão ampla da sua conta."
      />

      <Separator className="my-6" />
    </div>
  )
}
