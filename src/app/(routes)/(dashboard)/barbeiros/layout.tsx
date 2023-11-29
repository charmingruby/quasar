import { PropsWithChildren } from 'react'
import { Sidebar } from './(routes)/_components/sidebar'
import { Metadata } from 'next'
import { generateStaticSeo } from '@/components/seo/static'
import { RegisterBarberModal } from '@/components/modals/register-barber-modal'

export const metadata: Metadata = generateStaticSeo({
  rawTitle: 'Dashboard | Visão geral',
  description: 'Histórico de agendamentos.',
  hasPrefix: false,
})

export default function BarberLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="min-h-screen lg:grid lg:grid-cols-dashboard bg-background">
        <Sidebar />
        <div className="px-4 pb-12 lg:col-start-2 lg:px-4 ">
          <main className="mt-20 lg:mt-4">{children}</main>
        </div>
      </div>
      <RegisterBarberModal />
    </>
  )
}
