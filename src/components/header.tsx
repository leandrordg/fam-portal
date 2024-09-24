import { ChangeMode } from "@/components/change-mode";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";

export function Header() {
  const { sessionClaims } = auth();

  const isAdmin = sessionClaims?.metadata.isAdmin!!;

  return (
    <header className="border-b border-input bg-background">
      <nav className="flex items-center gap-4 px-6 lg:px-10 py-3">
        <MobileMenu isAdmin={isAdmin} />

        <Logo isAdmin={isAdmin} />

        <div className="flex items-center gap-4 ml-auto">
          <ChangeMode isAdmin={isAdmin} />

          <ThemeToggle />

          <ClerkLoading>
            <div className="size-7 rounded-full bg-muted animate-pulse" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button title="Entrar" variant="outline" size="icon">
                  <LogInIcon className="size-4" />
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </nav>
    </header>
  );
}
