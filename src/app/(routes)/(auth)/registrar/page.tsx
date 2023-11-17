import Link from 'next/link'
import RegisterForm from './_components/register-form'

export default function RegisterPersonalData() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Criar uma conta</h2>
        <small className="text-base text-muted-foreground">
          Já possui uma conta?{' '}
          <Link
            prefetch={false}
            href="/registrar"
            className="text-primary font-medium hover:underline"
          >
            Entrar
          </Link>
          .
        </small>
      </div>

      <RegisterForm />
    </div>
  )
}
