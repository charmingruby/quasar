import { db } from '@/lib/prisma'

interface RequestType {
  userId: string
}

export async function POST(req: Request) {
  const body = await req.json()

  const data = body as RequestType

  const latestPromoCode = await db.promoCode.findFirst({
    where: {
      customer: {
        userId: data.userId,
      },
      usedAt: null,
    },
  })

  if (!latestPromoCode) {
    return new Response(
      JSON.stringify({
        statusCode: 404,
        message: 'Código não encontrado.',
      }),
      { status: 404 },
    )
  }

  return new Response(JSON.stringify(latestPromoCode), { status: 201 })
}
