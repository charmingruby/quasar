import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { generateStaticSeo } from '@/components/seo/static'
import { Metadata } from 'next'
import { SchedulingFidelityForm } from '../../_components/forms/fidelity/scheduling-fidelity-form'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Agendamento',
  description: 'Agende seu corte na plataforma.',
})

export default function SchedulingFidelity() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Insira o código"
        content={<>Aproveite o código e ganhe um desconto</>}
      />
      <SchedulingFidelityForm />
    </div>
  )
}
