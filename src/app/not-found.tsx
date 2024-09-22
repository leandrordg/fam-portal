import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-screen-lg mx-auto w-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg">Página não encontrada</h1>

        <p className="text-gray-600">A página que você está procurando não existe.</p>

        <Link href="/" className="text-sky-700">Voltar para a página inicial</Link>
      </div>
    </main>
  );
}
