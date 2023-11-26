import { FormScenarioHeading } from '@/components/form-scenario-heading'
import SchedulingFidelityForm from '../../_components/forms/scheduling-fidelity-form'

export default function SchedulingFidelity() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Escolha seu horário"
        content={<>Veja o melhor momento para você</>}
      />
      <SchedulingFidelityForm />
    </div>
  )
}
