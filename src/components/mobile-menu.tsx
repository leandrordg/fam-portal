"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { NavigationMenu } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isPrivate = pathname.startsWith("/admin");

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button title="Abrir menu" variant="outline" size="icon">
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6" side="left">
        <Logo />

        {isPrivate && <Badge>Você está em modo administrador</Badge>}

        <NavigationMenu setOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
}
