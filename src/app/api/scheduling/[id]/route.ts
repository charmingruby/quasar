import { SessionType } from '@/@types/session'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../../auth/[...nextauth]/route'
import { db } from '@/lib/prisma'

interface ApiProps {
  params: { id: string }
}

interface RequestType {
  status: string
}

export async function PUT(req: Request, { params }: ApiProps) {
  const session = (await getServerSession(nextAuthOptions)) as SessionType

  const body = await req.json()

  const data = body as RequestType

  if (!session) {
    return new Response(
      JSON.stringify({
        statusCode: 401,
        message: 'Não autorizado.',
      }),
      { status: 401 },
    )
  }

  await db.scheduling.update({
    where: {
      id: params.id,
    },
    data: {
      status: data.status,
    },
  })

  return new Response(null, { status: 204 })
}
