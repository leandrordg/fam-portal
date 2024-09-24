"use client";

import { useState } from "react";

import { Logo } from "@/components/logo";
import { NavigationMenu } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { ROLE } from "@prisma/client";
import { MenuIcon } from "lucide-react";

type Props = {
  role: ROLE;
};

export function MobileMenu({ role }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button title="Abrir menu" variant="outline" size="icon">
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6" side="left">
        <Logo role={role} />

        <NavigationMenu role={role} setOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
}
