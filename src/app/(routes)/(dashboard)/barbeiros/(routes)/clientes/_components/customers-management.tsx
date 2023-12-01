import { Separator } from '@/components/ui/separator'
import { DataTable } from './table/data-table'
import { Customer, columns } from './table/columns'
import { db } from '@/lib/prisma'
import { BarbersListHeader } from './header'

interface CustomerResponse {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  cpf: string
  customerAccount: { amountOfSchedules: number }
}

async function getCustomersData() {
  return await db.user.findMany({
    where: {
      barberAccount: {
        is: null,
      },
    },
    include: {
      customerAccount: {
        select: {
          amountOfSchedules: true,
        },
      },
    },
  })
}

export async function CustomersManagement() {
  const data = (await getCustomersData()) as CustomerResponse[]

  const customers: Customer[] = []

  data.map(
    ({
      id,
      fullName,
      email,
      cpf,
      phoneNumber,
      customerAccount: { amountOfSchedules },
    }) => {
      const customer: Customer = {
        id,
        fullName,
        email,
        cpf,
        phoneNumber,
        amountOfSchedules,
      }
      return customers.push(customer)
    },
  )

  return (
    <div>
      <BarbersListHeader />

      <Separator className="my-6" />

      <div className="mt-3">
        <DataTable columns={columns} data={customers} />
      </div>
    </div>
  )
}
