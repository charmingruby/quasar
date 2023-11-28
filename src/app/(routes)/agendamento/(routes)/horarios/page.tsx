import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { SchedulingTimeForm } from '../../_components/forms/scheduling-time-form'
import { generateStaticSeo } from '@/components/seo/static'
import { Metadata } from 'next'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Agendamento',
  description: 'Agende seu corte na plataforma.',
})

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
