"use client";

import { NavigationLink } from "@/components/navigation-link";
import { Badge } from "@/components/ui/badge";
import type { Link } from "@/types/globals";
import type { ROLE } from "@prisma/client";
import {
  BoltIcon,
  HomeIcon,
  LandPlotIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  ShieldIcon,
  SquareActivityIcon,
  UsersIcon,
} from "lucide-react";

const guestLinks: Link[] = [
  {
    id: "1",
    url: "/",
    name: "Página Inicial",
    icon: HomeIcon,
  },
  {
    id: "2",
    url: "/onboarding",
    name: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    id: "3",
    url: "/onboarding/courses",
    name: "Cursos Disponíveis",
    icon: LandPlotIcon,
  },
  {
    id: "4",
    url: "/onboarding/settings",
    name: "Configurações",
    icon: BoltIcon,
  },
];

const studentLinks: Link[] = [
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

const teacherLinks: Link[] = [
  {
    id: "1",
    url: "/",
    name: "Página Inicial",
    icon: HomeIcon,
  },
  { id: "2", url: "/teacher", name: "Dashboard", icon: LayoutDashboardIcon },
  { id: "3", url: "/teacher/settings", name: "Configurações", icon: BoltIcon },
];

const adminLinks: Link[] = [
  {
    id: "1",
    url: "/",
    name: "Página Inicial",
    icon: HomeIcon,
  },
  { id: "2", url: "/admin", name: "Dashboard", icon: LayoutDashboardIcon },
  {
    id: "3",
    url: "/admin/users",
    name: "Usuários",
    icon: UsersIcon,
  },
  {
    id: "4",
    url: "/admin/courses",
    name: "Cursos",
    icon: LibraryIcon,
  },
  { id: "5", url: "/admin/settings", name: "Configurações", icon: BoltIcon },
];

type Props = {
  role: ROLE;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationMenu({ role, setOpen }: Props) {
  const links =
    {
      GUEST: guestLinks,
      STUDENT: studentLinks,
      TEACHER: teacherLinks,
      ADMIN: adminLinks,
    }[role] || guestLinks;

  return (
    <ul className="flex flex-col gap-2">
      {(role == "ADMIN" || role == "TEACHER") && (
        <Badge variant="secondary" className="mb-4">
          <ShieldIcon className="size-3 mr-2" />
          {role == "TEACHER" ? "Professor" : "Administrador"}
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
