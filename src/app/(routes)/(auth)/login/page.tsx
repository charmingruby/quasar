import Link from 'next/link'
import { LoginForm } from './_components/login-form'

export default function Login() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Entrar</h2>
        <small className="text-base text-muted-foreground">
          Novo no Quasar?{' '}
          <Link
            prefetch={false}
            href="/registrar"
            className="text-primary font-medium hover:underline"
          >
            Registre para ter uma conta
          </Link>
          .
        </small>
      </div>

      <LoginForm />
    </div>
  )
}
