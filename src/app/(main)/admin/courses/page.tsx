import { getAllCourses } from "@/hooks/courses";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ChartCourses } from "@/components/chart-courses";

export default async function Page() {
  const courses = await getAllCourses();

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <h1 className="text-lg font-medium">Cursos</h1>

        <ChartCourses />
        
        <DataTable columns={columns} data={courses} />
      </section>
    </main>
  );
}
