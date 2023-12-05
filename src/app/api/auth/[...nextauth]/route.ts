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

        const barber = await db.barberAccount.findFirst({
          where: {
            userId: user.id,
          },
        })
        const isBarber = !!barber

        const customer = await db.customerAccount.findFirst({
          where: {
            userId: user.id,
          },
        })

        if (!customer) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
          isBarber,
          amountOfSchedules: customer.amountOfSchedules,
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email,
          name: token.name,
          isBarber: token.isBarber,
          amountOfSchedules: token.amountOfSchedules,
        },
      }
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const u = user as unknown as any

        return {
          ...token,
          id: u.id,
          email: u.email,
          name: u.name,
          isBarber: u.isBarber,
          amountOfSchedules: u.amountOfSchedules,
        }
      }

      return token
    },
  },
}

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }
