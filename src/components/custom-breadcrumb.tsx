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

  // remove last path if it is a page
  const allPaths = pathname.split("/").slice(1, -1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {allPaths.map((path, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/${allPaths.slice(0, index + 1).join("/")}`}>
                  {formatPath(path)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* if is last path, dont show separator */}
            {index !== allPaths.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

// to use the current paga in future, use the code below
// const isPage = index === allPaths.length - 1;

// if (isPage) {
//   return (
//     <Fragment key={index}>
//       <BreadcrumbItem>
//         <BreadcrumbPage>{formatPath(path)}</BreadcrumbPage>
//       </BreadcrumbItem>
//     </Fragment>
//   );
// }
