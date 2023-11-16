import { PropsWithChildren } from 'react'
import { Header } from './_components/header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
