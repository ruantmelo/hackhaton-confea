import { Usuario } from "./next-auth"

export interface Profissional extends Usuario {
  nome: string
  rnp: string
  numRegistroCrea: string
  dataCriacao: string
  statusRnp: number
  titulos: string[]
  
}