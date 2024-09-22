import Image from "next/image";
import Link from "next/link";

import { SignedIn, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="border-b shadow-sm">
      <nav className="flex items-center px-6 lg:px-10 py-4">
        <Link href="/">
          <Image src="/fam-logo.png" alt="FAM Logo" width={100} height={100} />
        </Link>

        <div className="flex items-center ml-auto">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
