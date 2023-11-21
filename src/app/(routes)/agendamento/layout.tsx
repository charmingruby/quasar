import { PropsWithChildren } from 'react'
import { SchedulingsHeader } from './_components/header'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

export default function SchedulingsLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <SchedulingsHeader />
      <MaxWidthWrapper>
        <div className="w-full pt-20 lg:w-1/2 mx-auto flex flex-col sm:min-h-screen">
          <div className="bg-background flex flex-col mx-auto w-full">
            {children}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
