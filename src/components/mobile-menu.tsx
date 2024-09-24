"use client";

import { useState } from "react";

import { Logo } from "@/components/logo";
import { NavigationMenu } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

type Props = {
  isAdmin: boolean;
};

export function MobileMenu({ isAdmin }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button title="Abrir menu" variant="outline" size="icon">
          <MenuIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6" side="left">
        <Logo isAdmin={isAdmin} />

        <NavigationMenu isAdmin={isAdmin} setOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
}
