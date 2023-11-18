'use client'

import { Multistep } from '@/components/multistep'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
  const form = useForm()
  const { push } = useRouter()

  const handleFormSubmit = () => push('/registrar/credenciais')

  return (
    <Form {...form}>
      <div className="pb-4">
        <Multistep currentStep={1} size={2} />
      </div>

      <div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Nome completo</Label>
            <Input placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="example@email.com" />
          </div>

          <div className="space-y-2">
            <Label>CPF</Label>
            <Input placeholder="000.000.000-00" />
          </div>

          <div className="space-y-2">
            <Label>Telefone</Label>
            <Input placeholder="(32) 9 9999-9999" />
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
