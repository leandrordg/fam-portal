import Image from "next/image";
import Link from "next/link";

import { ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="border-b shadow-sm">
      <nav className="flex items-center px-6 lg:px-10 py-4">
        <Link href="/">
          <Image
            src="/fam-logo.png"
            alt="FAM Logo"
            width={100}
            height={100}
            className="w-20 lg:w-24 object-contain"
          />
        </Link>

        <div className="flex items-center ml-auto">
          <ClerkLoading>
            <div className="size-7 rounded-full bg-gray-100 animate-pulse" />
          </ClerkLoading>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
