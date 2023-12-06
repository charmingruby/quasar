import { db } from '@/lib/prisma'

interface ApiProps {
  params: { id: string }
}

export async function GET(req: Request, { params }: ApiProps) {
  const customer = await db.customerAccount.findFirst({
    where: {
      userId: params.id,
    },
  })

  return new Response(JSON.stringify(customer), { status: 200 })
}
