import { CustomBreadcrumb } from "@/components/custom-breadcrumb";
import { ErrorAlert } from "@/components/error-alert";
import { IndividualClassHead } from "@/components/individual-class-head";
import { getIndividualClassById } from "@/hooks/classes";
import { getSubjectsByClassId } from "@/hooks/subjects";
import { columns as StudentColumns } from "./students/columns";
import { DataTable as StudentDataTable } from "./students/data-table";
import { columns as SubjectColumns } from "./subjects/columns";
import { DataTable as SubjectDataTable } from "./subjects/data-table";

export default async function Page({
  params: { classId },
}: {
  params: {
    classId: string;
  };
}) {
  const individualClass = await getIndividualClassById(classId);
  const subjects = await getSubjectsByClassId(classId);

  if (!individualClass)
    return (
      <ErrorAlert
        title="Turma não encontrada"
        message="A turma que você está tentando acessar não existe."
      />
    );

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <CustomBreadcrumb />

        <IndividualClassHead individualClass={individualClass} />

        <SubjectDataTable columns={SubjectColumns} data={subjects} />

        <h2 className="text-lg font-medium">Alunos</h2>

        <StudentDataTable
          columns={StudentColumns}
          data={individualClass.students}
        />
      </section>
    </main>
  );
}
