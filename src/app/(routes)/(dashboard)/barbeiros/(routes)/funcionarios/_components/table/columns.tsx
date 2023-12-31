'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellActions } from './cell-actions'

export interface Barber {
  id: string
  fullName: string
  email: string
  cpf: string
  phoneNumber: string
}

export const columns: ColumnDef<Barber>[] = [
  {
    accessorKey: 'fullName',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Telefone',
  },
  {
    accessorKey: 'cpf',
    header: 'CPF',
  },
  {
    id: 'actions',

    enableHiding: false,

    cell: ({ row }) => <CellActions data={row.original} />,
  },
]
