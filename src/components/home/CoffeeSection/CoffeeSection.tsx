import { bebas } from "@/fonts";
import { CoffeeTypeFilter } from "./CoffeeTypeFilter";
import { CoffeeItem } from "@/types/coffee.type";
import { CoffeeCard } from "./CoffeeCard";

type Props = {
  coffeeItems: CoffeeItem[];
};

export function CoffeeSection({ coffeeItems }: Props) {
  return (
    <section className="pb-12 flex flex-col items-center">
      <p
        className={`${bebas.className} text-white text-3xl text-center mb-2 lg:mb-12 leading-[50px]`}
      >
        MVST. EXCLUSIVE Coffee
      </p>
      <CoffeeTypeFilter />
      <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-x-7 lg:gap-y-10 mt-7 lg:mt-16 max-w-7xl">
        {coffeeItems.map((c) => (
          <CoffeeCard key={c.id} coffeeItem={c} />
        ))}
      </div>
    </section>
  );
}
