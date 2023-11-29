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
      <NavItem url="/" icon={Home} title="Início" />
      <NavItem url="/barbeiros" icon={LayoutDashboard} title="Visão geral" />
      <NavItem
        url="/barbeiros/agendamentos"
        icon={CalendarDays}
        title="Agenda"
      />
      <NavItem url="/barbeiros/clientes" icon={Users} title="Clientes" />
      <NavItem
        url="/barbeiros/funcionarios"
        icon={ScissorsLineDashed}
        title="Funcionários"
      />
    </nav>
  )
}
