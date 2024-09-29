import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import { ErrorAlert } from "@/components/error-alert";
import { UserHead } from "@/components/user-head";
import { getManyClasses } from "@/hooks/classes";
import { getManyCourses } from "@/hooks/courses";
import { getIndividualUser } from "@/hooks/users";
import { CourseForm } from "./course-form";
import { UserForm } from "./form";

export default async function Page({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const [user, courses, classes] = await Promise.all([
    getIndividualUser(userId),
    getManyCourses(),
    getManyClasses(),
  ]);

  if (!user) {
    return (
      <ErrorAlert
        title="Usuário não encontrado"
        message="O usuário que você está tentando acessar não existe."
      />
    );
  }

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <CustomBreadcrumb />

        <h2 className="text-lg font-medium">Informações Gerais</h2>

        <UserHead user={user} />

        <hr className="border-input" />

        <h2 className="text-lg font-medium">Dados Pessoais</h2>

        <UserForm user={user} />

        {user.role === "STUDENT" && (
          <div className="flex flex-col gap-6">
            <hr className="border-input" />

            <h2 className="text-lg font-medium">Matrícula</h2>

            <CourseForm user={user} courses={courses} classes={classes} />
          </div>
        )}
      </section>
    </main>
  );
}
