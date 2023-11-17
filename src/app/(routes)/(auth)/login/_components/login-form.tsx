'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'

export function LoginForm() {
  const form = useForm()

  return (
    <Form {...form}>
      <div>
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Email</Label>
            <Input placeholder="Seu email" />
          </div>

          <div className="space-y-3">
            <Label>Senha</Label>
            <Input type="password" placeholder="********" />
          </div>
        </div>

        <div className="w-full mt-10">
          <Button className="w-full" size="lg">
            Entrar
          </Button>
        </div>
      </div>
    </Form>
  )
}
