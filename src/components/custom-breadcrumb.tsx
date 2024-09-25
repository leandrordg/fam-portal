"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { formatPath } from "@/lib/utils";

export function CustomBreadcrumb() {
  const pathname = usePathname();

  const allPaths = pathname.split("/").filter((path) => path !== "");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {allPaths.map((path, index) => {
          const isPage = index === allPaths.length - 1;

          if (isPage) {
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbPage>{formatPath(path)}</BreadcrumbPage>
                </BreadcrumbItem>
              </Fragment>
            );
          }

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${allPaths.slice(0, index + 1).join("/")}`}>
                    {formatPath(path)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
