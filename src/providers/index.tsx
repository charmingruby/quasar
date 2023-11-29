'use client'

import { UserRegisterContextProvider } from '@/contexts/user-register-context'
import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ModalsProvider } from './modals-provider'

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider>
      <ModalsProvider />
      <QueryClientProvider client={queryClient}>
        <UserRegisterContextProvider>{children}</UserRegisterContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
