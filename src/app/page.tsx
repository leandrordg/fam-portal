import Link from "next/link";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="max-w-screen-lg mx-auto w-full p-6 lg:p-10">
      <section className="flex flex-col items-start gap-4">
        <h1>Bem vindo ao portal.</h1>

        <p className="text-sm text-muted-foreground">
          Este é um portal de exemplo para mostrar como você pode usar o Clerk
          com Next.js.
        </p>

        <SignedIn>
          <Link href="/dashboard" className="text-sky-700">Ir para a dashboard</Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal"><button className="text-sky-700">Entrar agora</button></SignInButton>
        </SignedOut>
      </section>
    </main>
  );
}
