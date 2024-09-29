"use client";

import { formatTimestamp } from "@/lib/utils";
import type { Subject } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const { id } = row.original;

      return <div className="max-w-32 truncate">{id}</div>;
    },
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
    cell: ({ row }) => {
      const { createdAt } = row.original;

      return formatTimestamp(createdAt, "medium");
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Última atualização",
    cell: ({ row }) => {
      const { updatedAt } = row.original;

      return formatTimestamp(updatedAt, "medium");
    },
  },
];
