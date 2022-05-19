import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import * as Prisma from "@prisma/client"

const prisma = new Prisma.PrismaClient()

export default NextAuth({

    adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            // async authorize(credentials, req) {
            //     // Add logic here to look up the user from the credentials supplied
            //     const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
            //     console.log(req)
            //     console.log(credentials)
            //     // if (user) {
            //     //     // Any object returned will be saved in `user` property of the JWT
            //     //     return user
            //     // } else {
            //     //     // If you return null then an error will be displayed advising the user to check their details.
            //     //     return null

            //     //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            //     // }
            // }
        })
    ],
});