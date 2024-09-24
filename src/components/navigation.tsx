"use client";

import { usePathname } from "next/navigation";

import { NavigationLink } from "@/components/navigation-link";
import { Badge } from "@/components/ui/badge";
import type { Link } from "@/types/globals";
import {
  BoltIcon,
  HomeIcon,
  LayoutDashboardIcon,
  ShieldIcon,
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

  const isAdminRoute = pathname.startsWith("/admin");

  const links = isAdminRoute && isAdmin ? privateLinks : publicLinks;

  return (
    <ul className="flex flex-col gap-2">
      {isAdminRoute && isAdmin && (
        <Badge className="mb-4">
          <ShieldIcon className="size-3 mr-2" />
          Você está em modo administrador
        </Badge>
      )}

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
