"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { ROLE } from "@prisma/client";
import { LogOutIcon, ShieldIcon } from "lucide-react";

type Props = {
  role: ROLE;
};

export function ChangeMode({ role }: Props) {
  const pathname = usePathname();

  if (!role || role === "GUEST" || role === "STUDENT") return null;

  if (role === "TEACHER") {
    return (
      <Link href={pathname.includes("/teacher") ? "/" : "/teacher"}>
        <Button title="Alterar modo" variant="outline" size="icon">
          {pathname.includes("/teacher") ? (
            <LogOutIcon className="size-4" />
          ) : (
            <ShieldIcon className="size-4" />
          )}
        </Button>
      </Link>
    );
  }

  return (
    <Link href={pathname.includes("/admin") ? "/" : "/admin"}>
      <Button title="Alterar modo" variant="outline" size="icon">
        {pathname.includes("/admin") ? (
          <LogOutIcon className="size-4" />
        ) : (
          <ShieldIcon className="size-4" />
        )}
      </Button>
    </Link>
  );
}
