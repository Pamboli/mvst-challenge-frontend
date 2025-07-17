"use client";

import { Button } from "@/components/common/Button";
import { bebas, poppins } from "@/fonts";
import Image from "next/image";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center mx-16 lg:mx-[250px] lg:items-start lg:w-full lg:text-start">
      <h1
        className={`${bebas.className} text-6.5xl lg:text-[130px] text-white mb-4 leading-tight`}
      >
        ROASTED <br className="lg:hidden" />
        COFFEE
      </h1>
      <h2 className={`${poppins.className} text-gray leading-7 text-xl mb-8`}>
        Choose a coffee from below or create your own.
      </h2>
      <Button noGrow href="/create">
        Create your own coffee
      </Button>
    </div>
  );
}
