import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Barber } from './columns'
import {
  CalendarDays,
  MoreHorizontal,
  Trash2,
  ClipboardIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CellActionsProps {
  data: Barber
}

export function CellActions({ data }: CellActionsProps) {
  const handleButtonClick = () => {
    navigator.clipboard.writeText(data.email)
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => handleButtonClick()}
            className="flex items-center gap-2"
          >
            <ClipboardIcon className="h-3 w-3 text-muted-foreground mb-0.5" />
            Copiar email
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2">
            <CalendarDays className="h-3 w-3 text-muted-foreground mb-0.5" />
            Agenda
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 bg-destructive text-destructive-foreground focus:text-destructive-foreground focus:bg-destructive/80">
            <Trash2 className="h-3 w-3 text-destructive-foreground mb-0.5" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
