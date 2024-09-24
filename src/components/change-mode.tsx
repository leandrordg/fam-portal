"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useSession } from "@clerk/nextjs";
import { LogOutIcon, ShieldIcon } from "lucide-react";

export function ChangeMode() {
  const { session } = useSession();

  const isAdmin = session?.user.publicMetadata.isAdmin;

  if (!isAdmin) return null;

  const pathname = usePathname();

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
