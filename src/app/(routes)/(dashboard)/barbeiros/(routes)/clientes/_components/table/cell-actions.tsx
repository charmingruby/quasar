import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal, ClipboardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Customer } from './columns'

interface CellActionsProps {
  data: Customer
}

export function CellActions({ data }: CellActionsProps) {
  const handleCopyEmailToClipboard = () => {
    navigator.clipboard.writeText(data.email)
  }

  const handleCopyCPFToClipboard = () => {
    navigator.clipboard.writeText(data.cpf)
  }

  const handleCopyPhoneNumberToClipboard = () => {
    navigator.clipboard.writeText(data.phoneNumber)
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
            onClick={() => handleCopyEmailToClipboard()}
            className="flex items-center gap-2"
          >
            <ClipboardIcon className="h-3 w-3 text-muted-foreground mb-0.5" />
            Copiar email
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleCopyPhoneNumberToClipboard()}
            className="flex items-center gap-2"
          >
            <ClipboardIcon className="h-3 w-3 text-muted-foreground mb-0.5" />
            Copiar telefone
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => handleCopyCPFToClipboard()}
            className="flex items-center gap-2"
          >
            <ClipboardIcon className="h-3 w-3 text-muted-foreground mb-0.5" />
            Copiar CPF
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
