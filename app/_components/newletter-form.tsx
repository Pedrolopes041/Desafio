"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Card, CardContent } from "./ui/card";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Preencha o campo",
  }),
  idade: z.number().min(2, {
    message: "Preencha o campo",
  }),
  endereco: z.string().min(2, {
    message: "Preencha o campo",
  }),
  biografia: z.string().min(2, {
    message: "Preencha o campo",
  }),
});

const NewsletterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      idade: 0,
      endereco: "",
      biografia: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full p-4 mt-6">
      <CardContent>
        <Form {...form}>
          <h2 className="text-center">Editar Perfil</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Idade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endereco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereço" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="biografia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Biografia</FormLabel>
                  <FormControl>
                    <Input placeholder="Biografia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Input id="picture" type="file" />
            <Button variant="default" className="w-full" type="submit">
              Salvar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewsletterForm;
