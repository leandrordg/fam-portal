"use client";

import Link from "next/link";

import { ChevronRightIcon, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  url: string;
  name: string;
  icon: LucideIcon;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationLink({ url, name, icon: Icon, setOpen }: Props) {
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <Link href={url} onClick={() => setOpen && setOpen(false)}>
      <li className={`flex items-center text-muted-foreground ${isActive && "text-black dark:text-white font-semibold"}`}>
        <Icon className="size-4 mr-4"/> {name} {isActive && <ChevronRightIcon className="size-4 ml-auto" />}
      </li>
    </Link>
  );
}
