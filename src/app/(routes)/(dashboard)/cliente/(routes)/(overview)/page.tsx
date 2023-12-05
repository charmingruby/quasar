import { DashboardHeading } from '@/components/dashboard-heading'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Percent } from 'lucide-react'
import { PromoCodeGenerator } from './_components/promo-code-generator'
import { SmallCard } from '../../../_components/small-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Overview } from './_components/chart'

export default function CustomerOverview() {
  return (
    <div>
      <DashboardHeading
        heading="Visão geral"
        description="Tenha uma visão ampla da sua conta."
      />

      <Separator className="my-6" />

      <div className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
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
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <CardDescription>oiiiiii</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
