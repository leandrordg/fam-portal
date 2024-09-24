import Image from "next/image";
import Link from "next/link";

import type { ROLE } from "@prisma/client";

type Props = {
  role: ROLE;
};

export function Logo({ role }: Props) {
  const currentRoute = {
    GUEST: "/onboarding",
    STUDENT: "/dashboard",
    TEACHER: "/teacher",
    ADMIN: "/admin",
  }[role];

  return (
    <Link href={currentRoute || "/"}>
      <Image
        src="/fam-logo-white.png"
        alt="FAM Logo"
        width={100}
        height={100}
        className="w-20 lg:w-24 object-contain invert dark:invert-0"
        priority
      />
    </Link>
  );
}
