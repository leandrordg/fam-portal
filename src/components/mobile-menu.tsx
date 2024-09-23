import { Logo } from "@/components/logo";
import { NavigationMenu } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6" side="left">
        <Logo />

        <NavigationMenu />
      </SheetContent>
    </Sheet>
  );
}
