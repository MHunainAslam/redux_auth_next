import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email' },
                password: { label: 'password' },
            },
            authorize: async (credentials) => {
                try {
                    const res = await axios.post('https://api.eobusinessclub.com/api/login', {
                        email: credentials.email,
                        password: credentials.password,
                    })
                    
                    const login = res.data
                    if (login) {
                        return login
                    } else {
                        return null
                    }
                } catch (error) {
                    console.log(credentials);
                    throw new Error(error.response.data.data.error)
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }
            return token
        }
    }
})


export { handler as GET, handler as POST }