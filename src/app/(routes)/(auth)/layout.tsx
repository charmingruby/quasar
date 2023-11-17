import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { PropsWithChildren } from 'react'
import { Header } from './_components/header'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <MaxWidthWrapper>
        <div className="w-full pt-20 md:pt-0 lg:w-1/2 mx-auto flex flex-col justify-center sm:min-h-screen">
          <div className="bg-background flex flex-col mx-auto w-full">
            <div>{children}</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
