'use client'

import { useEffect } from 'react'
import { useBarberScheduleController } from './use-barber-schedule-controller'
import { Loader } from '@/components/loader'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Status } from '@/app/(routes)/(dashboard)/_components/status'
import { CalendarDays, Clock } from 'lucide-react'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'

export function BarberScheduleContent() {
  const { cbBarberSchedule, schedulings, isLoading } =
    useBarberScheduleController()

  useEffect(() => {
    cbBarberSchedule()
  }, [cbBarberSchedule])

  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="gap-2 w-full flex flex-col items-center">
      {schedulings.length === 0 ? (
        <div className="">
          <small className="text-muted-foreground text-center">
            Nenhum agendamento
          </small>
        </div>
      ) : (
        <div className="w-full space-y-4">
          {schedulings.map((props) => (
            <Card key={`${props.time}${props.date}`}>
              <CardHeader>
                <Status status={props.status} />

                <div>
                  <CardTitle className="pt-2">
                    {props.name}/
                    <span className="text-muted-foreground font-medium">
                      {props.customer.user.fullName}
                    </span>
                  </CardTitle>
                  <CardDescription className="capitalize text-sm pt-1">
                    {props.age_category}
                  </CardDescription>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <CalendarDays className="text-primary h-4 w-4 mb-0.5" />
                    <small className="text-base text-foreground">
                      {props.time}-{props.endAt}
                    </small>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="text-primary h-4 w-4 mb-0.5" />
                    <small className="text-base text-foreground">
                      {format(new Date(props.date), 'P', { locale: ptBR })}
                    </small>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
