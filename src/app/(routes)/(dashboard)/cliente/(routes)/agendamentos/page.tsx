import { DashboardHeading } from '@/components/dashboard-heading'
import { Separator } from '@/components/ui/separator'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import { SchedulingsManagement } from './_components/schedulings-management'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { db } from '@/lib/prisma'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Agendamentos',
  description: 'Veja seu histórico de agendametos.',
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
  observation: string
  free: boolean
  barberAccountId: string
  customerAccountId: string
  promoCodeId: string | null
  createdAt: Date
  updatedAt: Date
  barber: {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    user: {
      fullName: string
    }
  }
}

async function getSchedulingsData() {
  const session = await getServerSession(nextAuthOptions)

  if (!session) return []

  const data = await db.scheduling.findMany({
    where: {
      customer: {
        userId: session.user.id,
      },
    },
    orderBy: {
      date: 'desc',
    },
    include: {
      barber: {
        include: {
          user: {
            select: {
              fullName: true,
            },
          },
        },
      },
    },
  })

  const schedulings = data.filter(
    ({ barberAccountId }) => barberAccountId !== null,
  ) as SchedulingData[]

  return schedulings.length === 0 ? [] : schedulings
}

export default async function Agendamentos() {
  const data = await getSchedulingsData()

  return (
    <div>
      <DashboardHeading
        heading="Agendamentos"
        description="Gerencie os seus agendamentos."
      />

      <Separator className="my-6" />

      <SchedulingsManagement data={data} />
    </div>
  )
}
