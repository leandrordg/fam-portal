"use server";

import { db } from "@/lib/db";
import { checkRole } from "@/lib/role";
import { actionClient } from "@/lib/safe-action";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  id: z.string().min(1),
  courseId: z.string().min(2, { message: "Curso obrigatório" }).max(50),
  classId: z.string().min(2, { message: "Curso obrigatório" }).max(50),
});

export const updateRegistration = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { id, courseId, classId } }) => {
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
      await clerkClient().users.updateUserMetadata(id, {
        publicMetadata: {
          courseId,
          classId,
        },
      });

      await db.user.update({
        where: { id },
        data: {
          courseId,
          classId,
        },
      });

      revalidatePath(`/admin/users/${id}`);
    } catch (error) {
      return { error: "[500] Erro ao atualizar informações do usuário." };
    }

    return { success: "Usuário atualizado com sucesso!" };
  });
