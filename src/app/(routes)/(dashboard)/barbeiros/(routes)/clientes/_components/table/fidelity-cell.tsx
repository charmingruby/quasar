import { Customer } from './columns'

interface CellActionsProps {
  data: Customer
}

export function FidelityCell({ data }: CellActionsProps) {
  return <div>{data.amountOfSchedules + '/5'}</div>
}
