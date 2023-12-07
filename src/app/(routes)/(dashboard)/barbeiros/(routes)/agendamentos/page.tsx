import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import { db } from '@/lib/prisma'
import { ScheduleManagement } from './_components/schedule-management'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Agenda',
  description: 'Veja seus próximos agendamentos.',
  hasPrefix: false,
})

export interface SchedulingData {
  id: string
  date: Date
  time: string
  endAt: string
  status: string
  name: string
  price: number
  age_category: string
  timeInAQuarterOfAnHourQuantity: number
  observation: string | null
  free: boolean
  barberAccountId: string
  customerAccountId: string
  promoCodeId: string | null
  customer: {
    user: {
      fullName: string
    }
  }
  barber: {
    user: {
      fullName: string
    }
  }
  createdAt: Date
  updatedAt: Date
}

async function getSchedulingsData() {
  const data = await db.scheduling.findMany({
    orderBy: {
      date: 'desc',
    },
    include: {
      barber: {
        select: {
          user: { select: { fullName: true } },
        },
      },
      customer: {
        select: {
          user: { select: { fullName: true } },
        },
      },
    },
  })

  const schedulings = data.filter(
    ({ barberAccountId }) => barberAccountId !== null,
  ) as SchedulingData[]

  return schedulings.length === 0 ? [] : schedulings
}

export default async function Customers() {
  const data = await getSchedulingsData()

  return (
    <div>
      <DashboardHeading
        heading="Agendamentos"
        description="Gerencie os agendamentos."
      />

      <Separator className="my-6" />

      <ScheduleManagement data={data} />
    </div>
  )
}
