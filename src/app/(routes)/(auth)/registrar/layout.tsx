import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { PropsWithChildren } from 'react'
import { FormPagesHeader } from '../../_components/form-pages-header'

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <FormPagesHeader />
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
