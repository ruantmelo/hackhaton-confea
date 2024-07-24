import { DefaultSession } from "next-auth";

export type Usuario = {
  id: string;
  nome: string;
  ufNaturalidade: string;
  cidadeNaturalidade: string;
  email: string;
  role: "ADMIN" | "USER";
};
type UsuarioWithTokenAndRole = Usuario & {
  authToken: string;
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends UsuarioWithTokenAndRole {}
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    usuario: Usuario & DefaultSession["user"];
    authToken: string;
  }
}
