import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { Scissors, User } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export async function Header() {
  const session = await getServerSession(nextAuthOptions)

  return (
    <header className="fixed bg-background h-16 flex items-center w-full border-b shadow-sm">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="text-primary" />
            <strong className="text-2xl font-alt">Quasar</strong>
          </div>
          <div className="flex items-center gap-2">
            {session ? (
              <Link prefetch={false} href="/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <span>Dashboard</span>
                </Button>
              </Link>
            ) : (
              <Link prefetch={false} href="/api/auth/signin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <User className="h-4 w-4 text-primary" />
                  <span>Entrar</span>
                </Button>
              </Link>
            )}

            <Link prefetch={false} href="/agendamento/opcoes">
              <Button size="sm">Agendar</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
