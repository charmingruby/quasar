import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch as ChakraPetch, Inter } from 'next/font/google'

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
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${alt.variable} font-sans bg-background text-foreground`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
