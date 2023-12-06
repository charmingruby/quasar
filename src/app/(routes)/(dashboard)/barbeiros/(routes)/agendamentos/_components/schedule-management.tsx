import { SchedulingData } from '../page'
import { ScheduleCard } from './schedule-card'

interface ScheduleManagementProps {
  data: SchedulingData[]
}

export function ScheduleManagement({ data }: ScheduleManagementProps) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((data) => (
        <ScheduleCard key={data.id} data={data} />
      ))}
    </div>
  )
}
