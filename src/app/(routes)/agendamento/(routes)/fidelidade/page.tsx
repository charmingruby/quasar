import { FormScenarioHeading } from '@/components/form-scenario-heading'
import SchedulingFidelityForm from '../../_components/forms/scheduling-fidelity-form'
import { generateStaticSeo } from '@/components/seo/static'
import { Metadata } from 'next'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Agendamento',
  description: 'Agende seu corte na plataforma.',
})

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
