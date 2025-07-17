import { CoffeeSection } from "@/components/home/CoffeeSection";
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { getCoffeeItems } from "@/services/coffee.service";
import { NextSearchParams } from "@/types/app.type";
import { CoffeeType } from "@/types/coffee.type";
import { Footer } from "@/components/home/Footer";

export default async function HomePage({
  searchParams,
}: {
  searchParams: NextSearchParams;
}) {
  const params = await searchParams;
  const coffeeType =
    typeof params["type"] === "string" ? params["type"] : undefined;
  const coffeeItems = await getCoffeeItems(coffeeType as CoffeeType);

  return (
    <main>
      <HeroSection />
      <CoffeeSection coffeeItems={coffeeItems} />
      <Footer />
    </main>
  );
}
