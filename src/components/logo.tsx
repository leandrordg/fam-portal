"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isAdmin: boolean;
};

export function Logo({ isAdmin }: Props) {
  const pathname = usePathname();

  const isAdminRoute = pathname.includes("/admin");

  if (isAdminRoute && isAdmin) {
    return (
      <Link href="/admin">
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

  return (
    <Link href="/dashboard">
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
