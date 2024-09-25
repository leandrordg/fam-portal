"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ChevronRightIcon, type LucideIcon } from "lucide-react";

type Props = {
  url: string;
  name: string;
  icon: LucideIcon;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationLink({ url, name, icon: Icon, setOpen }: Props) {
  const pathname = usePathname();

  const subRouteActive = pathname.split("/")[2];

  const isActive = pathname === url || url.includes(subRouteActive);

  return (
    <Link href={url} onClick={() => setOpen && setOpen(false)}>
      <li
        className={cn(
          "flex items-center text-muted-foreground",
          isActive && "text-black dark:text-white font-semibold"
        )}
      >
        <Icon className="size-4 mr-4" /> {name}{" "}
        {isActive && <ChevronRightIcon className="size-4 ml-auto" />}
      </li>
    </Link>
  );
}
