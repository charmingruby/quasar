import { PropsWithChildren } from 'react'
import { SchedulingsHeader } from './_components/header'
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { SessionType } from '@/@types/session'
import { redirect } from 'next/navigation'

export default async function SchedulingsLayout({
  children,
}: PropsWithChildren) {
  const session = (await getServerSession(nextAuthOptions)) as SessionType

  if (!session) {
    redirect('/login')
  }

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
