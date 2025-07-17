import { HeroBackground } from "./HeroBackground";
import { Header } from "./Header";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center">
      <HeroBackground />
      <Header />
      <HeroContent />
    </section>
  );
}
