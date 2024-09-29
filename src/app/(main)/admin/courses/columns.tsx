"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatTimestamp } from "@/lib/utils";
import type { Class, Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<
  Course & {
    classes: Class[];
  }
>[] = [
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
    accessorKey: "classes",
    header: "Classes",
    cell: ({ row }) => {
      const { classes } = row.original;

      // qty of classes
      return <span>{classes.length}</span>;
    },
  },
  {
    accessorKey: "description",
    header: "Descrição",
    cell: ({ row }) => {
      const { description } = row.original;

      return (
        <div title={description} className="max-w-48 truncate">
          {description}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
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
