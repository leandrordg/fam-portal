"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOutIcon, ShieldIcon } from "lucide-react";

type Props = {
  isAdmin: boolean;
};

export function ChangeMode({ isAdmin }: Props) {
  const pathname = usePathname();

  if (!isAdmin) return null;

  if (pathname.startsWith("/admin")) {
    return (
      <Link href="/dashboard">
        <Button title="Alterar modo" variant="outline" size="icon">
          <LogOutIcon className="size-4" />
        </Button>
      </Link>
    );
  }

  return (
    <Link href="/admin">
      <Button title="Alterar modo" variant="outline" size="icon">
        <ShieldIcon className="size-4" />
      </Button>
    </Link>
  );
}
