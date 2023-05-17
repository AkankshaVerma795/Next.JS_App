// // import NextAuth from "next-auth";
// // import Providers from "next-auth/providers";

// // const options = {
// //   providers: [
// //     Providers.Google({
// //       clientId: process.env.GOOGLE_CLIENT_ID,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// //     }),
// //   ],
// //   pages: {
// //     signIn: "/login",
// //   },
// //   callbacks: {
// //     async session(session, user) {
// //       session.user.id = user.id;
// //       return session;
// //     },
// //   },
// // };

// // export default (req, res) => NextAuth(req, res, options);


// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {},
//       authorize(credentials, req) {
//         const { email, password } = credentials as {
//          email: string
//          password: string
//         };
//         // perform you login logic
//         // find out user from db
//         if (email !== "john@gmail.com" || password !== "1234") {
//           throw new Error("invalid credentials");
//         }

     
//         return {
//           id: "1234",
//           name: "John Doe",
//           email: "john@gmail.com",
//           role: "admin",
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//     // error: '/auth/error',
//     // signOut: '/auth/signout'
//   },
//   callbacks: {
//     jwt(params) {
//       // update token
//       if (params.user?.role) {
//         params.token.role = params.user.role;
//       }
//       // return final_token
//       return params.token;
//     },
//   },
// };

// export default NextAuth(authOptions);
// // import log from "logging-service"

// // export default NextAuth({
  
// //   logger: {
// //     error(code, metadata) {
// //       log.error(code, metadata)
// //     },
// //     warn(code) {
// //       log.warn(code)
// //     },
// //     debug(code, metadata) {
// //       log.debug(code, metadata)
// //     }
// //   }
  
// // })