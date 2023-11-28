import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { SchedulingOptsForm } from '../../_components/forms/scheduling-opts-form'
import { generateStaticSeo } from '@/components/seo/static'
import { Metadata } from 'next'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Agendamento',
  description: 'Agende seu corte na plataforma.',
})

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
