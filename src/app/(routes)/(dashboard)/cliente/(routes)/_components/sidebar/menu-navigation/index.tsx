import { CalendarDays, Home, LayoutDashboard } from 'lucide-react'
import { NavItem } from './nav-item'

export function MenuNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem url="/" icon={Home} title="Início" />
      <NavItem url="/cliente" icon={LayoutDashboard} title="Visão geral" />
      <NavItem url="/cliente/agendamentos" icon={CalendarDays} title="Agenda" />
    </nav>
  )
}
