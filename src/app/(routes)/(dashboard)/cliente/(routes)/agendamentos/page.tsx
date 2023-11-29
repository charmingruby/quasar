import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Agendamentos',
  description: 'Veja seu histórico de agendametos.',
  hasPrefix: false,
})

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
