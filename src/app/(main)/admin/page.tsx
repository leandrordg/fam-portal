import { ChartDashboard } from "@/components/chart-dashboard";

export default function Page() {
  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <h1 className="text-lg font-medium">Dashboard do administrador</h1>

        <ChartDashboard />
      </section>
    </main>
  );
}
