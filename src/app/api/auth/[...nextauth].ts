import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

import { auth } from '../../firebase/admin';



export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async ({ idToken }: any, _req) => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);

            return { ...decoded };
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
        if(user){
      return { ...token, ...user };
    } return token;
    },
    // sessionにJWTトークンからのユーザ情報を格納
    async session({ session, token }) {
        if (token.emailVerified !== undefined) {
            session.user.emailVerified = token.emailVerified;
          }
          if (token.uid) {
            session.user.uid = token.uid;
          }
      return session;
    },
  },
};

export default NextAuth(authOptions);