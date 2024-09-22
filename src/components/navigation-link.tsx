"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
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
      <li className={`flex items-center ${isActive && "text-sky-800 font-semibold"}`}>
        {name}
        <ChevronRightIcon className="size-4 ml-auto" />
      </li>
    </Link>
  );
}
