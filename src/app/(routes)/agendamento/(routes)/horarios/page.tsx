import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { generateStaticSeo } from '@/components/seo/static'
import { Metadata } from 'next'
import { SchedulingTimeForm } from '../../_components/forms/time/scheduling-time-form'

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
