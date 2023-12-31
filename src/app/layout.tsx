import { Providers } from '@/providers'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch as ChakraPetch, Inter } from 'next/font/google'
import { ModalsProvider } from '@/providers/modals-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
})

const alt = ChakraPetch({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alt',
})
export const metadata: Metadata = {
  title: 'Quasar | Cortes para todas as idades',
  description:
    'Agende um horário na nossa barbearia para cortes excepcionais e uma experiência única de bem-estar e estilo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${inter.variable} ${alt.variable} font-sans bg-background text-foreground`}
        >
          <main>{children}</main>
          <Toaster />
          <ModalsProvider />
        </body>
      </Providers>
    </html>
  )
}
