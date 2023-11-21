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

export default function SchedulingOptsForm() {
  const form = useForm()
  const { push } = useRouter()

  const handleFormSubmit = () => push('/agendamento/horarios')

  return (
    <Form {...form}>
      <div className="pb-4">
        <Multistep currentStep={1} size={3} />
      </div>

      <div>
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
                <SelectItem value="barba">Barba</SelectItem>
                <SelectItem value="raspar">Raspar</SelectItem>
                <SelectItem value="cortar">Corte</SelectItem>
                <SelectItem value="raspar-barba">Raspar + Barba</SelectItem>
                <SelectItem value="corte-barba">Corte + Barba</SelectItem>
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
                <SelectItem value="criança">Criança</SelectItem>
                <SelectItem value="adulto">Adulto</SelectItem>
                <SelectItem value="idoso">Idoso</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Alguma observação?</Label>
            <Textarea placeholder="Mensagem..." />
          </div>
        </div>

        <div className="w-full mt-10">
          <Button className="w-full" size="lg" onClick={handleFormSubmit}>
            Próximo passo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Form>
  )
}
