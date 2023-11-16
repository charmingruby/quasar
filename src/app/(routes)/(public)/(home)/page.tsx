import Image from 'next/image'
import heroImg from '@/assets/hero.svg'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center">
      <MaxWidthWrapper>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-0">
              Cortes para todas as idades: Bem-vindo à{' '}
              <strong className="text-primary">Quasar</strong> Barbearia
            </h1>

            <p className="mt-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nesciunt ut obcaecati minima repudiandae maiores, facilis voluptas
              quae nemo delectus saepe, iusto, dolorum porro cum quasi
              perspiciatis suscipit. Quis, quam!
            </p>

            <Button className="w-fit mt-8">
              Fazer agendamento
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2 mt-12">
              <Input placeholder="Insira aqui seu cupom de desconto" />

              <Button size="icon">
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className="w-full">
            <Image src={heroImg} alt="Imagem de cabelereiros" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
