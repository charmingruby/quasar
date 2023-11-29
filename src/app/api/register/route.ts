import { db } from '@/lib/prisma'
import { NextRequest } from 'next/server'
import { hash } from 'bcrypt'

interface RegisterRequest {
  name: string
  email: string
  cpf: string
  phoneNumber: string
  password: string
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const data = body as RegisterRequest

  // validate unique email
  const emailAddressAlreadyInUse = await db.user.findUnique({
    where: {
      email: data.email,
    },
  })
  if (emailAddressAlreadyInUse) {
    return new Response(
      JSON.stringify({
        statusCode: 403,
        message: 'Email em uso.',
      }),
      { status: 403 },
    )
  }

  // validate unique phone number
  const phoneNumberAlreadyInUse = await db.user.findUnique({
    where: {
      phoneNumber: data.phoneNumber,
    },
  })
  if (phoneNumberAlreadyInUse) {
    return new Response(
      JSON.stringify({
        statusCode: 403,
        message: 'Número de telefone em uso.',
      }),
      { status: 403 },
    )
  }

  // hash password
  const hashedPassword = await hash(data.password, 16)

  const { id } = await db.user.create({
    data: {
      fullName: data.name,
      email: data.email,
      passwordHash: hashedPassword,
      phoneNumber: data.phoneNumber,
      cpf: data.cpf,
    },
  })

  await db.customerAccount.create({
    data: {
      userId: id,
    },
  })

  return new Response(JSON.stringify(data), { status: 201 })
}
