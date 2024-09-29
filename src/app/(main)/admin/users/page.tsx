import { ChartNewUsers } from "@/components/chart-new-users";
import { getManyUsers } from "@/hooks/users";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  const users = await getManyUsers();

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <h1 className="text-lg font-medium">Usuários</h1>

        <ChartNewUsers />

        <DataTable columns={columns} data={users} />
      </section>
    </main>
  );
}
