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

export interface CreateSchedulingRequest {
  date: Date
  time: string
  endAt: string
  status: string
  name: string
  price: number
  ageCategory: string
  timeInAQuarterOfAnHourQuantity: number
  observation?: string
  barberId: string
  userId: string
  promoCode?: string
}

export async function POST(req: Request) {
  const body = await req.json()

  const {
    ageCategory,
    barberId,
    date,
    endAt,
    name,
    price,
    status,
    time,
    timeInAQuarterOfAnHourQuantity,
    userId,
    observation,
    promoCode,
  } = body as CreateSchedulingRequest

  const customer = await db.customerAccount.findFirst({
    where: {
      userId,
    },
  })
  if (!customer) {
    return new Response(
      JSON.stringify({
        statusCode: 404,
        message: 'Cliente não encontrado.',
      }),
      { status: 404 },
    )
  }

  const validInsertedPromoCode = !promoCode
    ? null
    : await db.promoCode.findFirst({
        where: {
          code: promoCode,
          usedAt: null,
          usedByCreator: false,
        },
      })

  if (!validInsertedPromoCode && promoCode !== '') {
    return new Response(
      JSON.stringify({
        statusCode: 404,
        message: 'Código promocional não encontrado.',
      }),
      { status: 404 },
    )
  }

  const unusedPromoCode = await db.promoCode.findMany({
    where: {
      createdBy: userId,
      usedByCreator: null,
    },
  })

  const usefulPromoCodes = validInsertedPromoCode?.id || unusedPromoCode[0]?.id

  const freeScheduling = customer.amountOfSchedules % 5 === 0

  const result = await db.scheduling.create({
    data: {
      age_category: ageCategory,
      date,
      endAt,
      name,
      price,
      status,
      time,
      timeInAQuarterOfAnHourQuantity,
      observation,
      barberAccountId: barberId,
      customerAccountId: customer.id,
      free: freeScheduling,
      promoCodeId: usefulPromoCodes,
    },
    include: {
      promoCode: {
        select: {
          createdBy: true,
          id: true,
        },
      },
    },
  })

  if (result.promoCodeId) {
    if (result.promoCode?.createdBy === customer.id)
      await db.promoCode.update({
        where: {
          id: result.promoCode.id,
        },
        data: {
          usedByCreator: true,
        },
      })
    else {
      await db.promoCode.update({
        where: {
          id: result.promoCode?.id,
        },
        data: {
          usedAt: new Date(),
        },
      })
    }
  }

  await db.customerAccount.update({
    where: {
      id: customer.id,
    },
    data: {
      amountOfSchedules: customer.amountOfSchedules + 1,
    },
  })

  return new Response(null, { status: 201 })
}
