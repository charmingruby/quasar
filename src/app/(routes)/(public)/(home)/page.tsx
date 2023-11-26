import Image from 'next/image'
import heroImg from '@/assets/hero.svg'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { generateStaticSeo } from '@/components/seo/static'
import Link from 'next/link'

export const metadata = generateStaticSeo({
  rawTitle: 'Início',
  description: 'Barbearia de ponta',
  hasPrefix: true,
})

export default function Home() {
  return (
    <div className="min-h-screen flex items-center">
      <MaxWidthWrapper>
        <div className="pt-16 md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold my-0">
              Cortes para todas as idades: Bem-vindo à{' '}
              <strong className="text-primary">Quasar</strong> Barbearia
            </h1>

            <p className="mt-8 text-base text-muted-foreground">
              Agende um horário na nossa barbearia para cortes excepcionais e
              uma experiência única de bem-estar e estilo. Transforme sua
              aparência, eleve sua confiança e descubra o poder de um visual
              impecável. Sua melhor versão começa aqui!
            </p>

            <Link
              href="/agendamento/opcoes"
              prefetch={false}
              className="w-full"
            >
              <Button className="w-full sm:w-fit mt-8">
                Fazer agendamento
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="w-full hidden md:flex md:items-center">
            <Image src={heroImg} alt="Imagem de cabelereiros" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
