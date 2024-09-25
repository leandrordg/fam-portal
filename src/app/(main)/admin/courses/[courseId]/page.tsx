import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import { ErrorAlert } from "@/components/error-alert";
import { getCourseById } from "@/hooks/courses";

export default async function Page({
  params: { courseId },
}: {
  params: {
    courseId: string;
  };
}) {
  const course = await getCourseById(courseId);

  if (!course) {
    return (
      <ErrorAlert
        title="Curso não encontrado"
        message="O curso que você está tentando acessar não existe."
        url="/admin/courses"
      />
    );
  }

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <CustomBreadcrumb />

        <h1 className="text-lg font-medium">{course.title}</h1>
      </section>
    </main>
  );
}
