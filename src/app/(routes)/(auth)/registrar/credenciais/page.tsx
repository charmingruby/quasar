import Link from 'next/link'
import CredentialsForm from './_components/credentials-form'
import { FormScenarioHeading } from '../../_components/form-scenario-heading'

export default function RegisterCredentials() {
  return (
    <div className="space-y-6">
      <FormScenarioHeading
        title="Senha"
        content={
          <>
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

      <CredentialsForm />
    </div>
  )
}
