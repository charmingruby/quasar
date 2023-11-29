import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'

export default function Customers() {
  return (
    <div>
      <DashboardHeading
        heading="Clientes"
        description="Gerencie os clientes."
      />

      <Separator className="my-6" />
    </div>
  )
}
