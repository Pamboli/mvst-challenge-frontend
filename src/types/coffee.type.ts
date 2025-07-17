export type CoffeeType = "ARABIC" | "ROBUSTA";

export type CoffeeItem = {
  id: number;
  name: string;
  description: string;
  type: CoffeeType;
  price: number;
  imageUrl: string;
};

export type CreateCoffeeRequest = Omit<CoffeeItem, "id">;
