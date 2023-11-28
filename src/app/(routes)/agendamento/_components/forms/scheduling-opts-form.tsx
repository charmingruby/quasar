'use client'

import { Multistep } from '@/components/multistep'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cuts } from '@/data/cuts'
import { ages } from '@/data/ages'

export function SchedulingOptsForm() {
  const form = useForm()
  const { push } = useRouter()

  const handleFormSubmit = () => {
    push('/agendamento/horarios')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div>
          <Multistep currentStep={1} size={3} />
        </div>

        <div className="mt-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Tipo de corte</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Escolher opção"
                    className="text-muted-foreground"
                  />
                </SelectTrigger>
                <SelectContent>
                  {cuts.map(({ name, price, value }) => (
                    <SelectItem key={name} value={value}>{`${name} - R$${(
                      price / 100
                    ).toFixed(2)}`}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Faixa etária</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Escolher opção"
                    className="text-muted-foreground"
                  />
                </SelectTrigger>
                <SelectContent>
                  {ages.map(({ name, value }) => (
                    <SelectItem
                      key={name}
                      value={value}
                    >{`${name}`}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Alguma observação?</Label>
              <Textarea placeholder="Mensagem..." />
            </div>
          </div>

          <div className="w-full mt-10">
            <Button className="w-full" size="lg">
              Próximo passo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
