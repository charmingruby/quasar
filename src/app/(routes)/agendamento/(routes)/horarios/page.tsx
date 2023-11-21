import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { SchedulingTimeForm } from './_components/scheduling-time-form'

export default function SchedulingTime() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Escolha seu horário"
        content={<>Veja o melhor momento para você</>}
      />
      <SchedulingTimeForm />
    </div>
  )
}
