"use client";

import { Button } from "@/components/common/Button";
import { Logo } from "@/components/common/Logo";

export function Header() {
  return (
    <header className="w-full px-6 lg:px-[285px] py-7 flex items-center justify-between absolute top-0 right-0 left-0">
      <Logo />
      <Button href="/create" noGrow>
        Create
      </Button>
    </header>
  );
}
