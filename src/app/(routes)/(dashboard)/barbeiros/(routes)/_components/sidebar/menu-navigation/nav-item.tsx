'use client'

import Link from 'next/link'
import { ElementType } from 'react'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  title: string
  icon: ElementType
  url: string
}

export function NavItem({ icon: Icon, title, url }: NavItemProps) {
  const currentPath = usePathname()
  const isTheCurrentPath = url === currentPath

  return (
    <Link
      prefetch={false}
      href={url}
      className={`
      ${
        isTheCurrentPath
          ? 'bg-primary/10 hover:bg-primary/20 text-primary'
          : 'text-muted-foreground hover:bg-primary/10 hover:text-primary '
      }
      flex items-center gap-3 rounded-md px-3 py-2.5  group transition-colors
      `}
    >
      <Icon className="h-5 w-5  transition-colors" />
      <span className="font-medium text-lg transition-colors">{title}</span>
    </Link>
  )
}
