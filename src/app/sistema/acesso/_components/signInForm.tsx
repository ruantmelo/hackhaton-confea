"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  login: z.string({
    required_error: "Campo é obrigatório",
  }),
  senha: z.string({
    required_error: "Campo é obrigatório",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function SignInForm() {
  const form = useForm<FormValues & { api_error: string }>({
    resolver: zodResolver(formSchema),
  });

  const watchLogin = form.watch("login");
  const watchSenha = form.watch("senha");

  useEffect(() => {
    form.clearErrors("api_error");
  }, [form, watchLogin, watchSenha]);

  const { replace } = useRouter();

  const onSubmit = async ({ login, senha }: FormValues) => {
    const response = await signIn("credentials", {
      login,
      senha,
      redirect: false,
    });

    if (response?.status === 401) {
      form.setError("api_error", {
        message: "Credenciais inválidas",
      });
    }

    if (response?.status === 200) {
      replace("/sistema");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-sm mx-auto gap-6 "
        >
          <p className="text-destructive">
            {form.formState.errors.api_error?.message}
          </p>
          <FormField
            control={form.control}
            name="login"
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
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Insira sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting} type="submit">
            {form.formState.isSubmitting ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
