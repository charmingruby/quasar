import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { Scissors } from 'lucide-react'
import Link from 'next/link'

export function FormPagesHeader() {
  return (
    <header className="h-16 border-b flex items-center fixed w-full bg-background">
      <MaxWidthWrapper>
        <div className="">
          <Link prefetch={false} href="/" className="flex items-center gap-2">
            <Scissors className="text-primary h-6 w-6" />
            <strong className="text-2xl font-alt">Quasar</strong>
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
