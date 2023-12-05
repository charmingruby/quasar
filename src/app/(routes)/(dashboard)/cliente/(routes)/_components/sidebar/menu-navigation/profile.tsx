'use client'

import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

export function Profile() {
  const session = useSession()
  const nameFirstLetter = session.data?.user.name.charAt(0).toUpperCase()

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-background">
        {nameFirstLetter}
      </div>
      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-foreground/90">
          {session.data?.user.name}
        </span>
        <span className="text-sm text-muted-foreground truncate">
          {session.data?.user.email}
        </span>
      </div>
      <Button
        variant="ghost"
        className="ml-auto p-2 group"
        onClick={() => {
          signOut({ redirect: true, callbackUrl: '/' })
        }}
      >
        <LogOut className="h-5 w-5 text-muted-foreground group-hover:text-destructive" />
      </Button>
    </div>
  )
}
