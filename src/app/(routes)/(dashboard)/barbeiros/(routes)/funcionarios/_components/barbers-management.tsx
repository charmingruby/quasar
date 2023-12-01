import { Separator } from '@/components/ui/separator'
import { DataTable } from './table/data-table'
import { Barber, columns } from './table/columns'
import { db } from '@/lib/prisma'
import { BarbersListHeader } from './header'

interface BarberResponse {
  id: string
  userId: string
  createdAt: Date
  updatedAt: Date
  user: {
    id: string
    fullName: string
    email: string
    cpf: string
    phoneNumber: string
  }
}

async function getBarbersData() {
  return await db.barberAccount.findMany({
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
          cpf: true,
          phoneNumber: true,
        },
      },
    },
  })
}

export async function BarbersManagement() {
  const data = (await getBarbersData()) as BarberResponse[]
  const barbers: Barber[] = []

  data.map(({ user: { id, fullName, email, cpf, phoneNumber } }) => {
    const barber: Barber = { id, fullName, email, cpf, phoneNumber }
    return barbers.push(barber)
  })

  return (
    <div>
      <BarbersListHeader />

      <Separator className="my-6" />

      <div className="mt-3">
        <DataTable columns={columns} data={barbers} />
      </div>
    </div>
  )
}
