"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatTimestamp } from "@/lib/utils";
import type { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ row }) => {
      const { id, title } = row.original;

      return (
        <Button variant="link" asChild>
          <Link href={`/admin/courses/${id}`} className="text-nowrap">
            {title}
          </Link>
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Descrição",
    cell: ({ row }) => {
      const { description } = row.original;

      return (
        <span title={description} className="line-clamp-1 break-words">
          {description}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Entrou",
    cell: ({ row }) => {
      const { createdAt } = row.original;

      return (
        <span className="text-nowrap">
          {formatTimestamp(createdAt, "medium")}
        </span>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Última atualização",
    cell: ({ row }) => {
      const { updatedAt } = row.original;

      return (
        <span className="text-nowrap">
          {formatTimestamp(updatedAt, "medium")}
        </span>
      );
    },
  },
];
