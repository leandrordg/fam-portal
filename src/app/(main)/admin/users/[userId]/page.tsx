import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import { ErrorAlert } from "@/components/error-alert";
import { UserHead } from "@/components/user-head";
import { getIndividualUser } from "@/hooks/users";
import { UserForm } from "./form";
import { CustomAlert } from "@/components/custom-alert";

export default async function Page({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const user = await getIndividualUser(userId);

  if (!user) {
    return (
      <ErrorAlert
        title="Usuário não encontrado"
        message="O usuário que você está tentando acessar não existe."
        url="/admin/users"
      />
    );
  }

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <CustomBreadcrumb />

        <UserHead user={user} />

        <CustomAlert
          title="Outras informações"
          message="Você pode atualizar outras informações acessando o painel de controle de autenticação."
        />

        <UserForm user={user} />
      </section>
    </main>
  );
}
