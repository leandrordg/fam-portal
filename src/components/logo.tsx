import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/fam-logo-white.png"
        alt="FAM Logo"
        width={100}
        height={100}
        className="w-20 lg:w-24 object-contain invert dark:invert-0"
        priority
      />
    </Link>
  );
}
