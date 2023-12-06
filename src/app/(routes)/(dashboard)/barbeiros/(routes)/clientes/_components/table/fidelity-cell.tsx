import { Customer } from './columns'

interface CellActionsProps {
  data: Customer
}

export function FidelityCell({ data }: CellActionsProps) {
  const amountOfSchedulings = data.amountOfSchedules
  const amountDone = amountOfSchedulings % 5

  let amountDoneChecks

  if (data.amountOfSchedules === 0) {
    amountDoneChecks = 0
  } else {
    if (amountDone === 0) {
      amountDoneChecks = 5
    } else {
      amountDoneChecks = amountDone
    }
  }

  return <div>{amountDoneChecks + '/5'}</div>
}
