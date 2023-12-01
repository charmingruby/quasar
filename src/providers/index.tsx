'use client'

import { UserRegisterContextProvider } from '@/contexts/user-register-context'
import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <UserRegisterContextProvider>{children}</UserRegisterContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
