import { db } from '@/lib/prisma'
import { hash } from 'bcrypt'

interface RequestType {
  id: string
}

interface ResponseType {
  amountDone: number
  code: string | null
}

export async function POST(req: Request) {
  const body = await req.json()

  const data = body as RequestType

  const customerAccount = await db.customerAccount.findFirst({
    where: {
      userId: data.id,
    },
  })

  if (!customerAccount) {
    return new Response(
      JSON.stringify({
        statusCode: 404,
        message: 'Cliente não encontrado.',
      }),
      { status: 404 },
    )
  }

  const amountOfSchedules = customerAccount.amountOfSchedules

  const promoCodeAlreadyGenerated = await db.promoCode.findFirst({
    where: {
      customer: { id: customerAccount.id },
      generatedOnNSchedulings: amountOfSchedules,
    },
  })

  if (promoCodeAlreadyGenerated) {
    return new Response(
      JSON.stringify({
        statusCode: 400,
        message: 'Codigo já gerado.',
      }),
      { status: 400 },
    )
  }

  const hashedCode = await hash('secret', 16)

  const result = await db.promoCode.create({
    data: {
      createdBy: customerAccount.id,
      code: hashedCode,
      generatedOnNSchedulings: amountOfSchedules,
    },
    include: { customer: { select: { amountOfSchedules: true } } },
  })

  const response: ResponseType = {
    code: result.code,
    amountDone: amountOfSchedules,
  }

  return new Response(JSON.stringify(response), { status: 201 })
}
