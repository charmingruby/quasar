import { DashboardHeading } from '@/components/dashboard-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { SmallCard } from '../../../_components/small-card'
import { DollarSign, Loader, Scissors, Users2 } from 'lucide-react'
import { db } from '@/lib/prisma'
import { Status } from '../../../_components/status'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { assignChartData } from './_components/assign-chart-data'
import { Overview } from './_components/chart'

interface SchedulingData {
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
  free: boolean | null
  barberAccountId: string
  customerAccountId: string
  customer: {
    user: {
      fullName: string
    }
  }
  promoCodeId: string | null
  createdAt: Date
  updatedAt: Date
}

export default async function BarberOverview() {
  const now = new Date()
  const currentMonth = now.getMonth()

  async function getTotalCutsInTheCurrentMonth() {
    const schedulings = await db.scheduling.findMany()

    let totalCuts = 0

    schedulings.forEach(({ date }) => {
      if (date.getMonth() === currentMonth) {
        totalCuts++
      }
    })

    return totalCuts
  }

  async function getTotalInvoicingInTheCurrentMonth() {
    const schedulings = await db.scheduling.findMany()

    let totalInvoicing = 0

    schedulings.forEach(({ date, free, promoCodeId, price }) => {
      if (date.getMonth() === currentMonth) {
        totalInvoicing += free ? 0 : promoCodeId ? price * 0.85 : price
      }
    })

    return totalInvoicing.toFixed(2)
  }

  async function getTotalNewCustomersInTheCurrentMonth() {
    const customers = await db.user.findMany()

    let totalNewCustomers = 0

    customers.forEach(({ createdAt }) => {
      if (createdAt.getMonth() === currentMonth) {
        totalNewCustomers++
      }

      return totalNewCustomers
    })

    return totalNewCustomers
  }

  async function getTotalAwaitingSchedulingsInTheCurrentMonth() {
    const schedulings = await db.scheduling.findMany()

    let totalAwaiting = 0

    schedulings.forEach(({ status }) => {
      if (status === 'Aguardando') {
        totalAwaiting++
      }
    })

    return totalAwaiting
  }

  async function getOldestAwaitingSchedulings() {
    const schedulings = await db.scheduling.findMany({
      include: {
        customer: {
          select: {
            user: {
              select: { fullName: true },
            },
          },
        },
      },
    })

    let totalAwaiting = 0

    const awaitingSchedules: SchedulingData[] = []

    for (let i = 0; totalAwaiting < 5 && i < schedulings.length; i++) {
      const scheduling = schedulings[i]

      if (scheduling.status === 'Aguardando') {
        awaitingSchedules.push(scheduling)
        totalAwaiting++
      }
    }

    return awaitingSchedules
  }

  async function getChartData() {
    const data = await db.scheduling.findMany()

    return data
  }

  const totalCutsInTheCurrentMonth = await getTotalCutsInTheCurrentMonth()
  const totalInvoicingInTheCurrentMonth =
    await getTotalInvoicingInTheCurrentMonth()
  const totalNewUsersInTheCurrentMonth =
    await getTotalNewCustomersInTheCurrentMonth()
  const totalAwaitingSchedulesInTheCurrentMonth =
    await getTotalAwaitingSchedulingsInTheCurrentMonth()
  const oldestAwaitingSchedulings = await getOldestAwaitingSchedulings()
  const chartData = await getChartData()

  const assignedChartData = assignChartData(chartData)

  if (
    !totalCutsInTheCurrentMonth &&
    !totalInvoicingInTheCurrentMonth &&
    !totalNewUsersInTheCurrentMonth &&
    !totalAwaitingSchedulesInTheCurrentMonth &&
    !oldestAwaitingSchedulings
  ) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <DashboardHeading
        heading="Visão geral"
        description="Tenha uma visão ampla do seu negócio."
      />

      <Separator className="my-6" />

      <div className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SmallCard
            icon={Scissors}
            label="Cortes nos mês"
            value={String(totalCutsInTheCurrentMonth)}
          />
          <SmallCard
            icon={Loader}
            label="Agendamentos aguardando"
            value={String(totalAwaitingSchedulesInTheCurrentMonth)}
          />
          <SmallCard
            icon={DollarSign}
            label="Fatura mensal"
            value={'R$' + totalInvoicingInTheCurrentMonth}
          />
          <SmallCard
            icon={Users2}
            label="Novos clientes mensais"
            value={String(totalNewUsersInTheCurrentMonth)}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Quantidade de agendamentos ao ano</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview data={assignedChartData} />
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <Status status="Aguardando" />

              <CardTitle className="text-sm font-medium">
                Agendamentos não pagos
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-8">
                {oldestAwaitingSchedulings.map((props) => (
                  <div className="flex items-center" key={props.id}>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-none">
                        {props.customer.user.fullName}
                      </p>
                      <p className="text-sm text-muted-foreground flex flex-row gap-2">
                        {format(props.date, 'P', { locale: ptBR })}{' '}
                        {props.time + '-' + props.endAt}
                      </p>
                    </div>
                    <div className="ml-auto font-medium text-destructive">
                      R$
                      {props.free
                        ? '00.00'
                        : props.promoCodeId
                          ? (props.price * 0.85).toFixed(2)
                          : props.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
