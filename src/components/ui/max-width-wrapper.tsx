import { PropsWithChildren } from 'react'

export function MaxWidthWrapper({ children }: PropsWithChildren) {
  return <div className="max-w-6xl mx-auto p-4 w-full">{children}</div>
}
