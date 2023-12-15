import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "not-set",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "not-set",
    }),
  ],
});

export { handler as GET, handler as POST };
