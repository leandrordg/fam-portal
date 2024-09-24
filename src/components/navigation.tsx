"use client";

import { usePathname } from "next/navigation";

import { NavigationLink } from "@/components/navigation-link";
import type { Link } from "@/types/globals";
import {
  BoltIcon,
  HomeIcon,
  LayoutDashboardIcon,
  SquareActivityIcon,
} from "lucide-react";

const publicLinks: Link[] = [
  {
    id: "1",
    url: "/",
    name: "Página Inicial",
    icon: HomeIcon,
  },
  {
    id: "2",
    url: "/dashboard",
    name: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    id: "3",
    url: "/dashboard/exercises",
    name: "Atividades",
    icon: SquareActivityIcon,
  },
  {
    id: "4",
    url: "/dashboard/settings",
    name: "Configurações",
    icon: BoltIcon,
  },
];

const privateLinks: Link[] = [
  {
    id: "1",
    url: "/",
    name: "Página Inicial",
    icon: HomeIcon,
  },
  { id: "2", url: "/admin", name: "Dashboard", icon: LayoutDashboardIcon },
  { id: "3", url: "/admin/settings", name: "Configurações", icon: BoltIcon },
];

type Props = {
  isAdmin: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationMenu({ isAdmin, setOpen }: Props) {
  const pathname = usePathname();

  const links =
    pathname.startsWith("/admin") && isAdmin ? privateLinks : publicLinks;

  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <NavigationLink
          key={link.id}
          url={link.url}
          name={link.name}
          icon={link.icon}
          setOpen={setOpen}
        />
      ))}
    </ul>
  );
}
