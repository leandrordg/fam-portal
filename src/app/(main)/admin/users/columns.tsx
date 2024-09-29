"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatRole, formatTimestamp } from "@/lib/utils";
import type { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "imageUrl",
    header: "Avatar",
    cell: ({ row }) => {
      const { imageUrl, username, id } = row.original;

      return (
        <Image
          src={imageUrl}
          alt={username ?? id}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "firstName",
    header: "Nome Completo",
    cell: ({ row }) => {
      const { id, firstName, lastName } = row.original;

      return (
        <Button variant="link" asChild>
          <Link href={`/admin/users/${id}`} className="line-clamp-1">
            {firstName} {lastName}
          </Link>
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Função",
    cell: ({ row }) => {
      const { role } = row.original;

      return formatRole(role);
    },
  },
  {
    accessorKey: "createdAt",
    header: "Entrou",
    cell: ({ row }) => {
      const { createdAt } = row.original;

      return <span className="text-nowrap">{formatTimestamp(createdAt, "medium")}</span>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Última atualização",
    cell: ({ row }) => {
      const { updatedAt } = row.original;

      return <span className="text-nowrap">{formatTimestamp(updatedAt, "medium")}</span>
    },
  },
];
