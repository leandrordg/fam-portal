import { GridClasses } from "@/components/grid-classes";
import { getManyClasses } from "@/hooks/classes";

export default async function Page() {
  const classes = await getManyClasses();

  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <section className="flex flex-col gap-6">
        <h1 className="text-lg font-medium">Turmas</h1>

        <p className="text-muted-foreground text-sm">
          Exibindo total de {classes.length} turmas.
        </p>

        <GridClasses classes={classes} />
      </section>
    </main>
  );
}
