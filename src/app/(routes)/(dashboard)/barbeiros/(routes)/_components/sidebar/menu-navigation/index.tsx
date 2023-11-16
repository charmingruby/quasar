import {
  CalendarDays,
  Home,
  LayoutDashboard,
  ScissorsLineDashed,
  Users,
} from 'lucide-react'
import { NavItem } from './nav-item'

export function MenuNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem url="/" icon={Home} title="Home" />
      <NavItem url="/" icon={LayoutDashboard} title="Dashboard" />
      <NavItem url="/" icon={CalendarDays} title="Agenda" />
      <NavItem url="/" icon={Users} title="Clientes" />
      <NavItem url="/" icon={ScissorsLineDashed} title="Barbeiros" />
    </nav>
  )
}
