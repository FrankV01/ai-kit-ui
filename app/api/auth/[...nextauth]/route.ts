import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
//
// const handler = NextAuth({
//   callbacks: {
//     signIn: async ({ user, account, profile }) => {
//       console.log("callbacks.signIn", user, account, profile);
//       return true;
//     },
//     redirect: async ({ url, baseUrl }) => {
//       console.log("callbacks.session", url, baseUrl);
//       return Promise.resolve(url);
//     },
//     session: async ({ session, user }) => {
//       console.log("callbacks.session", session, user);
//       return Promise.resolve(session);
//     },
//     jwt: async ({ token, user, account, profile }) => {
//       console.log("callbacks.jwt", token, user, account, profile);
//       return Promise.resolve(token);
//     },
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || "not-set",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "not-set",
//     }),
//     // ...add more providers here
//   ],
// });
//
// export { handler as GET, handler as POST };

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "not-set",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "not-set",
    }),
  ],
});

export { handler as GET, handler as POST };
