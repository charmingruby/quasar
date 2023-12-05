'use client'

import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { SchedulingRegisterProvider } from '@/contexts/scheduling-register-context'

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <SchedulingRegisterProvider>{children}</SchedulingRegisterProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
