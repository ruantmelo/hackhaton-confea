import { Usuario } from "@/types/next-auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        login: {
          label: "Login",
        },
        senha: {
          label: "Senha",
        },
      },
      authorize: async (credentials) => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: credentials?.login,
            senha: credentials?.senha,
          }),
        }).then(async (res) => {
          if (res.status === 200) {
            return res.json();
          }

          const error = await res.text();
          console.error("res error api ", error);
          return null;
        });

        const profile = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/usuario_logado`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data?.accessToken}`,
            },
          },
        ).then(async (res) => {
          if (res.status === 200) {
            return res.json();
          }

          return null;
        });

        const payload = parseJwt(data.accessToken) as {
          role: "ADMIN" | "USER";
        };

        if (!data) return null;
        return { ...profile, role: payload.role };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      const userToken = token as { usuario: Usuario };

      return {
        ...session,
        ...userToken,
      };
    },
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          usuario: user,
        };
      }
      return token;
    },
  },
};

function parseJwt(token: string) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
