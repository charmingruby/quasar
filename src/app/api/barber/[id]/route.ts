import { SessionType } from '@/@types/session'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../../auth/[...nextauth]/route'
import { db } from '@/lib/prisma'

interface ApiProps {
  params: { id: string }
}

export async function DELETE(req: Request, { params }: ApiProps) {
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

  await db.barberAccount.delete({
    where: {
      userId: params.id,
    },
  })

  return new Response(null, { status: 204 })
}
