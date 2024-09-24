import Link from "next/link";

import { Button } from "@/components/ui/button";
import { currentRole } from "@/lib/role";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Page() {
  const role = currentRole();

  const redirectPath = {
    GUEST: "/onboarding",
    STUDENT: "/dashboard",
    TEACHER: "/teacher",
    ADMIN: "/admin",
  }[role];

  return (
    <main className="max-w-screen-lg mx-auto w-full p-6 lg:p-10">
      <section className="flex flex-col items-start gap-4">
        <h1 className="text-lg font-medium">Bem vindo ao portal.</h1>

        <p className="text-muted-foreground">
          Este é um portal de exemplo para mostrar como você pode usar o Clerk
          com Next.js.
        </p>

        <SignedIn>
          <Link href={redirectPath}>
            <Button variant="link">Ir para a dashboard</Button>
          </Link>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="link">Entrar agora</Button>
          </SignInButton>
        </SignedOut>
      </section>
    </main>
  );
}
