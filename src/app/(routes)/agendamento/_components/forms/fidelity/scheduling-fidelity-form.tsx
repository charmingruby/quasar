'use client'

import { Multistep } from '@/components/multistep'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { ArrowRight, CheckCircle, Circle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

export function SchedulingFidelityForm() {
  const form = useForm()
  const { push } = useRouter()

  const handleFormSubmit = () => push('/cliente')

  const amountOfSchedulings = 18
  const amountDone = amountOfSchedulings % 5
  const amountLeft = 5 - amountDone

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div>
          <Multistep currentStep={3} size={3} />
        </div>

        <div className="mt-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Código promocional</Label>
              <Input placeholder="Código" />
            </div>

            <div className="flex flex-col">
              <Label>Fidelidade</Label>
              <div className="flex items-center gap-2 mt-4">
                {Array.from({ length: amountDone }, (_, i) => i + 1).map(
                  (idx) => (
                    <CheckCircle
                      key={idx}
                      className="text-emerald-500 h-5 w-5"
                    />
                  ),
                )}

                {Array.from({ length: amountLeft }, (_, i) => i + 1).map(
                  (idx) => (
                    <Circle
                      key={idx}
                      className="text-muted-foreground h-5 w-5"
                    />
                  ),
                )}
              </div>
              <small className="text-muted-foreground mt-2">
                A cada 5 agendamentos, o próximo será gratuito.
              </small>
            </div>
          </div>

          <div className="w-full mt-10">
            <Button type="submit" className="w-full" size="lg">
              Próximo passo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
