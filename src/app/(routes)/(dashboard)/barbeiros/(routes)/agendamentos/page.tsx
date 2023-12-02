import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import { ScheduleCard } from './_components/schedule-card'

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

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </div>
  )
}
