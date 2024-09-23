import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="border-b border-input bg-background">
      <nav className="flex items-center gap-4 px-6 lg:px-10 py-3">
        <MobileMenu />

        <Logo />

        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />

          <ClerkLoading>
            <div className="size-7 rounded-full bg-muted animate-pulse" />
          </ClerkLoading>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
