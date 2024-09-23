"use client";

import Link from "next/link";

import { LogOutIcon, ShieldIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function ChangeMode() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return (
      <Link href="/dashboard">
        <Button variant="outline" size="icon">
          <LogOutIcon className="size-4" />
        </Button>
      </Link>
    );
  }

  return (
    <Link href="/admin">
      <Button variant="outline" size="icon">
        <ShieldIcon className="size-4" />
      </Button>
    </Link>
  );
}
