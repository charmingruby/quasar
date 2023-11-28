import { db } from '@/lib/prisma'
import { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const nextAuthOptions: NextAuthOptions = {
  secret: 'secret',
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user) {
          return null
        }

        const passwordMatch = await compare(
          credentials.password,
          user.passwordHash,
        )

        if (!passwordMatch) {
          return null
        }

        return { id: user.id, email: user.email }
      },
    }),
  ],
}

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }
