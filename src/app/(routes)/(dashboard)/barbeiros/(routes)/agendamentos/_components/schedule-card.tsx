import { Button } from '@/components/ui/button'
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

export function ScheduleCard() {
  const exampleDate = new Date()
  const formattedDate = format(exampleDate, 'P', { locale: ptBR })

  const startTime = '11:30'
  const endTime = '11:45'

  return (
    <Card>
      <CardHeader>
        <div className="text-muted-foreground text-sm">
          Nome cliente - Tipo do corte
        </div>
        <CardTitle className="pt-3">Gustavo Dias</CardTitle>

        <CardDescription>
          <span>Status:</span>{' '}
          <span className="text-orange-500">Aguardando</span>
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
              {startTime}~{endTime}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 justify-end">
        <Button>Gerenciar</Button>
      </CardFooter>
    </Card>
  )
}
