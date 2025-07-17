import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20">
        <Image
          width={1920}
          height={932}
          src="/hero-bg.jpg"
          alt="Fondo"
          className="w-full h-full object-cover bg-dark opacity-35"
        />
      </div>
      <div className="bg-gradient-linear w-full h-64 absolute bottom-0 left-0 right-0 -z-10" />
    </>
  );
}
