import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
  url: string
}

export function NavItem({ icon: Icon, title, url }: NavItemProps) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="whitespace-nowrap text-muted-foreground flex items-center gap-3 rounded-md px-3 py-2.5 hover:bg-primary/10 group transition-colors"
    >
      <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
      <span className="font-medium text-lg group-hover:text-primary transition-colors">
        {title}
      </span>
    </Link>
  )
}
