import { DashboardHeading } from '@/components/dashboard-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CalendarRange, Clock, Loader, Percent } from 'lucide-react'
import { PromoCodeGenerator } from './_components/promo-code-generator'
import { SmallCard } from '../../../_components/small-card'
import { Overview } from './_components/chart'
import { db } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'
import { assignChartData } from './_components/assign-chart-data'

export default async function CustomerOverview() {
  const session = await getServerSession(nextAuthOptions)

  if (!session) return null

  async function getSchedulingsQuantity(customerId: string) {
    const schedulings = await db.scheduling.findMany({
      where: { customer: { userId: customerId } },
    })

    return schedulings.length
  }

  async function getPromoCodesQuantity(customerId: string) {
    const promoCodes = await db.promoCode.findMany({
      where: { customer: { userId: customerId } },
    })

    return promoCodes.length
  }

  async function getLatestDate(customerId: string) {
    const schedulings = await db.scheduling.findMany({
      where: { customer: { userId: customerId } },
      orderBy: {
        date: 'desc',
      },
    })

    return format(schedulings[0].date, 'P', { locale: ptBR })
  }

  async function getTheFiveLatestSchedulings(customerId: string) {
    const schedulings = await db.scheduling.findMany({
      where: { customer: { userId: customerId } },
      orderBy: {
        date: 'desc',
      },
      take: 5,
    })

    return schedulings
  }

  async function getChartData(customerId: string) {
    const data = await db.scheduling.findMany({
      where: {
        customer: {
          userId: customerId,
        },
      },
    })

    return data
  }

  const schedulingsQuantity = await getSchedulingsQuantity(session.user.id)
  const promoCodesQuantity = await getPromoCodesQuantity(session.user.id)
  const latestDate = await getLatestDate(session.user.id)
  const latestSchedulings = await getTheFiveLatestSchedulings(session.user.id)
  const chartData = await getChartData(session.user.id)

  const assignedChartData = assignChartData(chartData)

  if (
    !schedulingsQuantity &&
    !promoCodesQuantity &&
    !latestDate &&
    !latestSchedulings
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
        description="Tenha uma visão ampla da sua conta."
      />

      <Separator className="my-6" />

      <div className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SmallCard icon={Clock} label="Mais recente" value={latestDate} />
          <SmallCard
            icon={CalendarRange}
            label="Total de agendamentos"
            value={String(schedulingsQuantity)}
          />
          <SmallCard
            icon={Percent}
            label="Códigos gerados"
            value={String(promoCodesQuantity)}
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
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Código de Desconto</CardTitle>
              <Percent className="h-4 w-4" />
            </CardHeader>
            <PromoCodeGenerator />
          </Card>
        </div>

        <div>
          <Card className="flex-1 h-fit">
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Agendamentos mais recentes
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-8">
                {latestSchedulings.map((props) => (
                  <div className="flex items-center" key={props.id}>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {props.name}
                      </p>
                      <p className="text-sm text-muted-foreground flex flex-row gap-2">
                        {format(props.date, 'P', { locale: ptBR })}{' '}
                        {props.time + '-' + props.endAt}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">
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
