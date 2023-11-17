import Link from 'next/link'
import { FormScenarioHeading } from '../_components/form-scenario-heading'
import RegisterForm from './_components/register-form'

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
