"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { User } from "@prisma/client";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(1).max(256),
  lastName: z.string().min(1).max(256),
  username: z.string().min(1).max(256),
  phone: z.string().regex(/^\+55\d{11}$/),
  email: z.string().email(),
});

type Props = {
  user: User;
};

export function UserForm({ user }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username ?? "",
      phone: user.phone ?? "",
      email: user.email,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { isDirty, isValid, isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Leandro"
                    disabled={!isEditing}
                    {...field}
                  />
                </FormControl>
                <FormDescription>Este é o seu nome público.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Rodrigues"
                    disabled={!isEditing}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Este é o seu sobrenome público.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input
                  placeholder="leandrordg"
                  disabled={!isEditing}
                  {...field}
                />
              </FormControl>
              <FormDescription>Este é o seu nome de usuário.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="exemplo@gmail.com"
                  disabled={!isEditing}
                  {...field}
                />
              </FormControl>
              <FormDescription>Este é o seu e-mail público.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de contato</FormLabel>
              <FormControl>
                <Input
                  placeholder="+5519123456789"
                  disabled={!isEditing}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            onClick={() => {
              form.reset();
              setIsEditing((prev) => !prev);
            }}
          >
            {isEditing ? "Cancelar" : "Editar"}
          </Button>

          {isEditing && (
            <Button
              variant="outline"
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
            >
              Salvar
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
