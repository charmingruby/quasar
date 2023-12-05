import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { generateStaticSeo } from '@/components/seo/static'
import { Metadata } from 'next'
import { SchedulingOptsForm } from '../../_components/forms/opts/scheduling-opts-form'

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
