'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SchedulingData } from '../page'
import { Status } from '@/app/(routes)/(dashboard)/_components/status'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CalendarDays, Clock, DollarSign, Trash2, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCloseScheduleModal } from '@/hooks/use-close-schedule-modal-store'

interface SchedulingsManagementProps {
  data: SchedulingData[]
}

export function SchedulingsManagement({ data }: SchedulingsManagementProps) {
  const closeScheduleModal = useCloseScheduleModal()

  return (
    <div
      className={`${
        data.length === 0
          ? 'flex justify-center'
          : 'grid grid-cols-1 md:grid-cols-2 gap-4 w-full'
      }  flex-1`}
    >
      {data.length === 0 ? (
        <div className="h-full text-muted-foreground w-full flex justify-center">
          Nenhum agendamento registrado.
        </div>
      ) : (
        data.map(
          ({
            promoCodeId,
            price,
            free,
            date,
            status,
            name,
            time,
            endAt,
            id,

            barber: {
              user: { fullName },
            },
          }) => (
            <Card key={id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>{name}</CardTitle>
                  <Status status={status as 'Aguardando' | 'Pago'} />
                </div>

                {promoCodeId && (
                  <CardDescription className="text-emerald-500">
                    Desconto
                  </CardDescription>
                )}

                {free && (
                  <CardDescription className="text-emerald-500">
                    Agendamento gratuito
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="flex items-center gap-1">
                  <Clock className="mb-0.5 h-5 w-5 text-primary" />
                  <span>
                    {time} - {endAt}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <CalendarDays className="mb-0.5 h-5 w-5 text-primary" />

                  <span>{format(date, 'P', { locale: ptBR })}</span>
                </div>

                <div className="flex items-center gap-1">
                  <User className="mb-0.5 h-5 w-5 text-primary" />
                  <span>{fullName}</span>
                </div>
              </CardContent>

              <CardFooter className="justify-between">
                <div className="flex items-center gap-1">
                  <DollarSign className="mb-0.5 h-5 w-5 text-emerald-500" />
                  <span
                    className={`${
                      free ? 'line-through text-muted-foreground' : ''
                    } font-medium text-lg`}
                  >
                    {promoCodeId ? (price * 0.85).toFixed(2) : price.toFixed(2)}
                  </span>
                  {free && (
                    <span className="font-medium text-lg text-emerald-500">
                      00.00
                    </span>
                  )}
                </div>

                {status !== 'Pago' && (
                  <Button
                    variant="destructive"
                    onClick={() => {
                      closeScheduleModal.setSchedulingId(id)
                      closeScheduleModal.setStatus(status[2])
                      closeScheduleModal.onOpen()
                    }}
                  >
                    Desmarcar
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          ),
        )
      )}
    </div>
  )
}
