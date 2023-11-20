import {
  CalendarDays,
  Clock,
  Home,
  LayoutDashboard,
  WalletCards,
} from 'lucide-react'
import { NavItem } from './nav-item'

export function MenuNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem url="/" icon={Home} title="Início" />
      <NavItem url="/" icon={LayoutDashboard} title="Visão geral" />
      <NavItem url="/" icon={CalendarDays} title="Agenda" />
      <NavItem url="/" icon={WalletCards} title="Fidelidade" />
      <NavItem url="/" icon={Clock} title="Histórico" />
    </nav>
  )
}