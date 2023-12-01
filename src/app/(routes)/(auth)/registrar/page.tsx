import Link from 'next/link'
import RegisterForm from './_components/register-form'
import { FormScenarioHeading } from '@/components/form-scenario-heading'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Registre-se',
  description: 'Se registre na nossa plataforma.',
})

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
              href="/login"
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
