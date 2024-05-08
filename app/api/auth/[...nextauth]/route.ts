import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { RecordLogin } from "../../../../lib/api/ApiActions";
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
//frank.6580c9fd  //6580c9fd
const handler = NextAuth({
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      /*
        callbacks.signIn {
          id: '101669450749843648386',
          name: 'Frank Villasenor',
          email: 'jawzx01@gmail.com',
          image: 'https://lh3.googleusercontent.com/a/ACg8ocJ_T3WHWTiHIoJO2XLBsF_q5lmXNDyKTmfcYG3TKgJyOA=s96-c'
        } {
          provider: 'google',
          type: 'oauth',
          providerAccountId: '101669450749843648386',
          access_token: 'ya29.a0AfB_byB1XZKecFr0Ae-_J6fBMvW9zWpQELDPSmvVj6i-QPE31LaT7KYnEJg2UYA_ll2SuU6ChO69YrjavfmmtwW7gU10iHQWBgQbOa0dPIq2ej--hd68q0Apz1KkQ6o_W3z1d4HIgH-VPYIUXanh-YkvXsFfZHE1xYtZaCgYKAUYSARMSFQHGX2MiUVHyt_CFDGtaiNzTKkhQFw0171',
          expires_at: 1702914412,
          scope: 'https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email',
          token_type: 'Bearer',
          id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjliMDI4NWMzMWJmZDhiMDQwZTAzMTU3YjE5YzRlOTYwYmRjMTBjNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4ODcwNjQ0NTE4NjAtcjFmYWs5bnBsb3BsNWNxdGVvOTQ2azFpaGszZTVwaDEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4ODcwNjQ0NTE4NjAtcjFmYWs5bnBsb3BsNWNxdGVvOTQ2azFpaGszZTVwaDEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE2Njk0NTA3NDk4NDM2NDgzODYiLCJlbWFpbCI6Imphd3p4MDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJWT0J0RUs0ZnVSVTFkNWdSSGJpdlBnIiwibmFtZSI6IkZyYW5rIFZpbGxhc2Vub3IiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSl9UM1dIV1RpSElvSk8yWExCc0ZfcTVsbVhORHlLVG1mY1lHM1RLZ0p5T0E9czk2LWMiLCJnaXZlbl9uYW1lIjoiRnJhbmsiLCJmYW1pbHlfbmFtZSI6IlZpbGxhc2Vub3IiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTcwMjkxMDgxMywiZXhwIjoxNzAyOTE0NDEzfQ.Gg0iYDRWnGQYRPnhvxNfip-dig8_3YjB5k3-g1BkKAtr87kST9_SyVHlMPhg9PbwUwlmkK5xD3xUzj_mNl-d3fVNHPpKHwjH1vJ5iX2n78D2ocmAXJEc5xotVTvT8M8c6VKVAniKBZKj_fFtv9p56BHk2kj626DkClR7vMAW5zeBrem8IphEVBJ94mW1bpTtok9AEbZ0HC2z9Baw4L4FrIt5YTcl8ObYmKr9tKxXftcPs1yTOpjoliPifoL0R9F4P_aKrHyRthvTLZRonf3UKq0VkG4GvbBEQ9mQZqBmShd0ESiY_y4maEYKEydCgmXnQaVW51KPVuMabpLVJmnzQQ'
        } {
          iss: 'https://accounts.google.com',
          azp: '887064451860-r1fak9nplopl5cqteo946k1ihk3e5ph1.apps.googleusercontent.com',
          aud: '887064451860-r1fak9nplopl5cqteo946k1ihk3e5ph1.apps.googleusercontent.com',
          sub: '101669450749843648386',
          email: 'jawzx01@gmail.com',
          email_verified: true,
          at_hash: 'VOBtEK4fuRU1d5gRHbivPg',
          name: 'Frank Villasenor',
          picture: 'https://lh3.googleusercontent.com/a/ACg8ocJ_T3WHWTiHIoJO2XLBsF_q5lmXNDyKTmfcYG3TKgJyOA=s96-c',
          given_name: 'Frank',
          family_name: 'Villasenor',
          locale: 'en',
          iat: 1702910813,
          exp: 1702914413
        }
       */

      await RecordLogin(user);
      console.log(
        "callbacks.signIn",
        JSON.stringify({ user, account, profile }),
      );
      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "not-set",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "not-set",
    }),
  ],
});

export { handler as GET, handler as POST };
