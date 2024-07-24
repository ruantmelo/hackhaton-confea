'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
  username: z.string({
    required_error: "Campo é obrigatório",
  }),
  password: z.string({
    required_error: "Campo é obrigatório",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function SignInForm(){

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const { replace } = useRouter()


  const onSubmit = () => {
    console.log('form submitted')
    replace('/sistema')
  }

  return (
    <div >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-sm mx-auto gap-6 ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email ou CPF</FormLabel>
              <FormControl>
                <Input placeholder="Insira seu Email ou CPF" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Insira sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Entrar</Button>
      </form>
    </Form>
    </div>
  )
}