import { Button } from '@/components/ui/button'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { Scissors, User } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed bg-background h-16 flex items-center w-full border-b shadow-sm">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="text-primary" />
            <strong className="text-2xl font-alt">Quasar</strong>
          </div>

          <div className="flex items-center gap-2">
            <Link prefetch={false} href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1"
              >
                <User className="h-4 w-4 text-primary" />
                <span>Entrar</span>
              </Button>
            </Link>

            <Link prefetch={false} href="/agendamento/opcoes">
              <Button size="sm">Agendar</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
