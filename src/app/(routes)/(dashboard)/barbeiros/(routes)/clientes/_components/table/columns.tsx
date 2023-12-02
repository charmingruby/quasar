'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellActions } from './cell-actions'
import { FidelityCell } from './fidelity-cell'

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
    header: 'Fidelidade',
    cell: ({ row }) => <FidelityCell data={row.original} />,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => <CellActions data={row.original} />,
  },
]
