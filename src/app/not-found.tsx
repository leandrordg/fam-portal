import Link from "next/link";

import { TriangleAlertIcon } from "lucide-react";

export default function Page() {
  return (
    <main className="max-w-screen-lg mx-auto p-6 lg:p-10">
      <div className="flex flex-col items-center gap-4">
        <TriangleAlertIcon className="text-muted-foreground size-12" />
        <h1>Página não encontrada</h1>

        <p className="text-sm text-muted-foreground">
          A página que você está procurando não existe.
        </p>

        <Link href="/" className="text-sky-700">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
