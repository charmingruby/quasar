import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { SchedulingOptsForm } from '../../_components/forms/scheduling-opts-form'

export default function SchedulingOpts() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Escolha o seu tipo de corte"
        content={<>Veja o que encaixa melhor em você</>}
      />
      <SchedulingOptsForm />
    </div>
  )
}
