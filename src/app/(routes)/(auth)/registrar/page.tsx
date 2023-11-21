import Link from 'next/link'
import RegisterForm from './_components/register-form'
import { FormScenarioHeading } from '@/components/form-scenario-heading'

export default function RegisterPersonalData() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Criar uma conta"
        content={
          <>
            {' '}
            Já possui uma conta?{' '}
            <Link
              prefetch={false}
              href="/registrar"
              className="text-primary font-medium hover:underline"
            >
              Entrar
            </Link>
            .
          </>
        }
      />

      <RegisterForm />
    </div>
  )
}
