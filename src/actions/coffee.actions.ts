"use server";

import { postCoffee } from "@/services/coffee.service";
import { CoffeeType, CreateCoffeeRequest } from "@/types/coffee.type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type CreateCoffeeFormValues = {
  name: string;
  description: string;
  type: CoffeeType;
  price: string;
  imageUrl: string;
};

export async function createCoffee(newCoffee: CreateCoffeeFormValues) {
  const price = Number(newCoffee.price);

  if (isNaN(price)) {
    throw new Error(`"${newCoffee.price}" can't be parsed to a number.`);
  }

  const request: CreateCoffeeRequest = {
    ...newCoffee,
    price: price * 100,
  };

  const result = await postCoffee(request);

  if (result.success) {
    revalidatePath("/");
    redirect("/");
  }

  return result;
}
