import { SchedulingData } from '../page'
import { ScheduleCard } from './schedule-card'

interface ScheduleManagementProps {
  data: SchedulingData[]
}

export function ScheduleManagement({ data }: ScheduleManagementProps) {
  return (
    <div
      className={`${
        data.length === 0
          ? 'flex justify-center'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'
      }  flex-1`}
    >
      {data.length === 0 ? (
        <div className="h-full text-muted-foreground w-full flex justify-center">
          Nenhum agendamento registrado.
        </div>
      ) : (
        data.map((data) => <ScheduleCard key={data.id} data={data} />)
      )}
    </div>
  )
}
