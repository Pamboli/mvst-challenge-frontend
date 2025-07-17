import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        width={166.7}
        height={24.8}
        src="/logo.svg"
        alt="MVST Coffee Logo"
      />
    </Link>
  );
}
