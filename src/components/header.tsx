import { ChangeMode } from "@/components/change-mode";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-input bg-background">
      <nav className="flex items-center gap-4 px-6 lg:px-10 py-3">
        <MobileMenu />

        <Logo />

        <div className="flex items-center gap-4 ml-auto">
          <ChangeMode />

          <ThemeToggle />

          <ClerkLoading>
            <div className="size-7 rounded-full bg-muted animate-pulse" />
          </ClerkLoading>

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
        </div>
      </nav>
    </header>
  );
}
