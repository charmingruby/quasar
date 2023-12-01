'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellActions } from './cell-actions'

export interface Customer {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  cpf: string
  amountOfSchedules: number
}

export const columns: ColumnDef<Customer>[] = [
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
