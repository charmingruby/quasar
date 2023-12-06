import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CalendarDays, Clock } from 'lucide-react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { SchedulingData } from '../page'
import { ManagementActions } from './management-actions'

interface ScheduleCardProps {
  data: SchedulingData
}

export function ScheduleCard({ data }: ScheduleCardProps) {
  const formattedDate = format(data.date, 'P', { locale: ptBR })

  return (
    <Card>
      <CardHeader>
        <div className="text-muted-foreground text-sm">
          {data.customer.user.fullName} - {data.name}
        </div>
        <CardTitle className="pt-3">
          {data.barber?.user.fullName
            ? data.barber.user.fullName
            : 'Ex-funcionário'}
        </CardTitle>

        <CardDescription>
          <span>Status:</span>{' '}
          <span
            className={` ${
              data.status === 'Aguardando'
                ? 'text-orange-400'
                : data.status === 'Pago'
                  ? 'text-emerald-600'
                  : 'text-red-600'
            }
        font-medium
        `}
          >
            {data.status}
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground text-sm">
              {formattedDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <div className="text-sm text-muted-foreground">
              {data.time}~{data.endAt}
            </div>
          </div>
        </div>
      </CardContent>

      {data.status === 'Aguardando' && (
        <CardFooter className="flex gap-2 justify-end">
          <ManagementActions data={data} />
        </CardFooter>
      )}
    </Card>
  )
}
