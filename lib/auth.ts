//@ts-nocheck
import { findUser, createUser } from "./data"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks : {
        async jwt({token,user}) {
           if(user) {
            token.id = user.id
            token.isAdmin = user.isAdmin
           }
        return token
        },

        async session({session,token}) {
          session.user.id = token.id
          session.user.isAdmin = token.isAdmin
          return session
        },
        
        async authorized({auth,request}) {
            console.log(auth)
            return true
        }
    }
});
