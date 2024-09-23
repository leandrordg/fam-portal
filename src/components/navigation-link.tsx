"use client";

import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  name: string;
};

export function NavigationLink({ url, name }: Props) {
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <Link href={url}>
      <li className={`flex items-center ${isActive && "font-semibold"}`}>
        {name} {isActive && <ChevronRightIcon className="size-4 ml-auto" />}
      </li>
    </Link>
  );
}
