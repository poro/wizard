import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: []
}

export default NextAuth(authOptions);
