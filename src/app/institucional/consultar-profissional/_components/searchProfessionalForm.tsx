"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function SearchProfessionalForm() {
  
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = () => {
    console.log('form submitted')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex mx-auto max-w-lg flex-wrap gap-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Insira o nome do profissional" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registro Nacional do Profissional</FormLabel>
              <FormControl>
                <Input placeholder="Insira o RNP" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">Alagoas</SelectItem>
                  <SelectItem value="m@google.com">São Paulo</SelectItem>
                  <SelectItem value="m@support.com">Santa Catarina</SelectItem>
                </SelectContent>
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Município</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um município" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">Maceió</SelectItem>
                  <SelectItem value="m@google.com">Arapiraca</SelectItem>
                  <SelectItem value="m@support.com">Teotônio Vileva</SelectItem>
                </SelectContent>
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-1/2 mt-6" type="submit">Buscar</Button>
      </form>
    </Form>
  )
}
