"use client";

import { usePathname } from "next/navigation";

import { NavigationLink } from "@/components/navigation-link";
import type { Link } from "@/types/globals";
import { BoltIcon, HomeIcon, SquareActivityIcon } from "lucide-react";
import { useSession } from "@clerk/nextjs";

const publicLinks: Link[] = [
  { id: "1", url: "/dashboard", name: "Página Inicial", icon: HomeIcon },
  {
    id: "2",
    url: "/dashboard/exercises",
    name: "Atividades",
    icon: SquareActivityIcon,
  },
  {
    id: "3",
    url: "/dashboard/settings",
    name: "Configurações",
    icon: BoltIcon,
  },
];

const privateLinks: Link[] = [
  { id: "1", url: "/admin", name: "Dashboard", icon: HomeIcon },
  { id: "2", url: "/admin/settings", name: "Configurações", icon: BoltIcon },
];

type Props = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavigationMenu({ setOpen }: Props) {
  const { session } = useSession();

  const pathname = usePathname();

  const isAdmin = session?.user.publicMetadata.isAdmin;

  const links = pathname.startsWith("/admin") && isAdmin ? privateLinks : publicLinks;

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
