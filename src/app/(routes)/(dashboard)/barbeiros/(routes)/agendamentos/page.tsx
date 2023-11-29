import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Agenda',
  description: 'Veja seus próximos agendamentos.',
  hasPrefix: false,
})

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
