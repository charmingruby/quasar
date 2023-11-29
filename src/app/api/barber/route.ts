import { db } from '@/lib/prisma'

interface RegisterBarberRequest {
  email: string
}

export async function POST(req: Request) {
  const body = await req.json()

  const data = body as RegisterBarberRequest

  // user exists
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  })
  if (!user) {
    return new Response(
      JSON.stringify({
        statusCode: 404,
        message: 'Usuário não encontrado.',
      }),
      { status: 404 },
    )
  }

  // user is already a barber
  const userIsAlreadyABarber = await db.barberAccount.findFirst({
    where: {
      user: {
        email: data.email,
      },
    },
  })
  if (userIsAlreadyABarber) {
    return new Response(
      JSON.stringify({
        statusCode: 403,
        message: 'Usuário já é barbeiro.',
      }),
      { status: 403 },
    )
  }

  await db.barberAccount.create({
    data: {
      userId: user.id,
    },
  })

  return new Response(null, { status: 201 })
}
