import { PropsWithChildren } from 'react'
import { Sidebar } from './(routes)/_components/sidebar'

export default function BarberLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-dashboard bg-background">
      <Sidebar />
      <div className="px-4 pb-12 lg:col-start-2 lg:px-4 ">
        <main className="mt-20 lg:mt-4">{children}</main>
      </div>
    </div>
  )
}
