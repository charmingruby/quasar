import { getServerSession } from 'next-auth'
import { nextAuthOptions } from './auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const session = await getServerSession(nextAuthOptions)
  return NextResponse.json({ authenticated: !!session })
}
