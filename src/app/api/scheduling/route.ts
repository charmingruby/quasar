import { db } from '@/lib/prisma'

export async function GET() {
  const barbers = await db.barberAccount.findMany({
    include: {
      user: {
        select: {
          fullName: true,
        },
      },
      schedulings: {
        select: {
          date: true,
          time: true,
          endAt: true,
        },
      },
    },
  })

  return new Response(JSON.stringify(barbers), { status: 200 })
}
