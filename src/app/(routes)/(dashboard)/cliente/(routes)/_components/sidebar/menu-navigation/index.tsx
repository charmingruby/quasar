import { CalendarDays, Clock, Home, LayoutDashboard } from 'lucide-react'
import { NavItem } from './nav-item'

export function MenuNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem url="/" icon={Home} title="Home" />
      <NavItem url="/" icon={LayoutDashboard} title="Dashboard" />
      <NavItem url="/" icon={CalendarDays} title="Agenda" />
      <NavItem url="/" icon={Clock} title="Histórico" />
    </nav>
  )
}
