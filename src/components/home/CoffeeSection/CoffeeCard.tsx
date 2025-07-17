import { poppins } from "@/fonts";
import { formatMoney } from "@/services/app.service";
import { CoffeeItem } from "@/types/coffee.type";
import { clsx } from "clsx";
import Image from "next/image";

type Props = {
  coffeeItem: CoffeeItem;
};

export function CoffeeCard({ coffeeItem }: Props) {
  const { name, description, price, imageUrl, type } = coffeeItem;

  return (
    <article
      className={`${poppins.className} w-full rounded-md drop-shadow-coffee-card px-4 pt-9 pb-14 bg-dark-light text-white relative text-center`}
    >
      <span
        className={clsx("absolute top-6 left-6 px-4 py-2 rounded-full", {
          "bg-arabic": type === "ARABIC",
          "bg-robusta": type === "ROBUSTA",
        })}
      >
        {type === "ARABIC" ? "Arabic" : "Robusta"}
      </span>
      <Image
        src={imageUrl}
        alt={`${name} image`}
        width={578}
        height={432}
        className="mb-16"
      />
      <p className="font-semibold text-text-accent text-2xl mb-3">{name}</p>
      <p className="font-medium mb-3 text-gray">{description}</p>
      <p className="font-bold text-xl">{formatMoney(price)}</p>
    </article>
  );
}
