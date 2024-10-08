"use client";

import { useState } from "react";

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
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateUser } from "./actions/update-user";

const formSchema = z.object({
  firstName: z.string().min(1).max(256),
  lastName: z.string().min(1).max(256),
  username: z.string().max(256).optional(),
});

type Props = {
  user: User;
};

export function UserForm({ user }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await updateUser({ id: user.id, ...values });

    if (res?.data?.success) {
      toast.success(res.data.success);
      setIsEditing(false);
    }

    if (res?.data?.error) {
      toast.error(res?.data?.error);
      return;
    }
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
                <FormDescription>
                  Este é o nome público que aparecerá em seu perfil.
                </FormDescription>
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
                  Este é o sobrenome público que aparecerá em seu perfil.
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
              <FormDescription>
                Nome de usuário que irá utilizar para acessar o sistema.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* actions */}
        <div className="flex items-center flex-wrap gap-2">
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
              {isSubmitting ? (
                <Loader2Icon className="size-3 animate-spin" />
              ) : (
                "Salvar"
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
