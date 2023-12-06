import { SessionType } from '@/@types/session'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { db } from '@/lib/prisma'
import { getServerSession } from 'next-auth'

interface ApiProps {
  params: { id: string }
}

export async function GET(req: Request, { params }: ApiProps) {
  const session = (await getServerSession(nextAuthOptions)) as SessionType

  if (!session) {
    return new Response(
      JSON.stringify({
        statusCode: 401,
        message: 'Não autorizado.',
      }),
      { status: 401 },
    )
  }

  const schedulings = await db.scheduling.findMany({
    where: {
      barber: {
        userId: params.id,
      },
    },
    include: {
      customer: {
        select: {
          user: {
            select: {
              fullName: true,
            },
          },
        },
      },
    },
    orderBy: {
      date: 'desc',
    },
  })

  return new Response(JSON.stringify(schedulings), { status: 200 })
}
