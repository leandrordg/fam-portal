"use server";

import { checkRole } from "@/lib/role";
import { actionClient } from "@/lib/safe-action";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// This schema is used to validate input from client.
const schema = z.object({
  id: z.string().min(1),
  firstName: z.string().min(1).max(256),
  lastName: z.string().min(1).max(256),
  username: z.string().max(256).optional(),
});

export const updateUser = actionClient
  .schema(schema)
  .action(
    async ({
      parsedInput: { id, firstName, lastName, username },
    }) => {
      const isAdmin = checkRole("ADMIN");

      // check if user is admin, if not return error
      if (!isAdmin) {
        return { error: "[403] Sem permissão para fazer isso!" };
      }

      const user = await clerkClient().users.getUser(id);

      // check if user exists
      if (!user) {
        return { error: "[404] Usuário não encontrado." };
      }

      // try to update user info, phone and email if provided
      try {
        await clerkClient().users.updateUser(id, {
          firstName,
          lastName,
          username,
        });
      } catch (error) {
        return { error: "[500] Erro ao atualizar informações do usuário." };
      }

      revalidatePath(`/admin/users`);

      return { success: "Usuário atualizado com sucesso!" };
    }
  );
