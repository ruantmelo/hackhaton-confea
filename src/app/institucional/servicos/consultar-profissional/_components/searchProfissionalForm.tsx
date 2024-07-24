"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Profissional } from "@/types/profissional";

const formSchema = z.object({
  nome: z.string(),
  rnp: z.string(),
  ufNaturalidade: z.string(),
  cidadeNaturalidade: z.string(),
});

export function SearchProfessionalForm() {
  const form = useForm<Profissional>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("form submitted");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex mx-auto items-end flex-wrap gap-4"
      >
        <FormField
          control={form.control}
          name="nome"
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
          name="rnp"
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
          name="ufNaturalidade"
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
                  <SelectItem value="Alagoas">Alagoas</SelectItem>
                  <SelectItem value="São Paulo">São Paulo</SelectItem>
                  <SelectItem value="Santa Catarina">Santa Catarina</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cidadeNaturalidade"
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
                  <SelectItem value="Maceió">Maceió</SelectItem>
                  <SelectItem value="Arapiraca">Arapiraca</SelectItem>
                  <SelectItem value="Teotônio Vilela">
                    Teotônio Vilela
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="" type="submit">
          Buscar
        </Button>
      </form>
    </Form>
  );
}
