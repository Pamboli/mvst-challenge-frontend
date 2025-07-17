import {
  CoffeeItem,
  CoffeeType,
  CreateCoffeeRequest,
} from "@/types/coffee.type";

const BACKEND_URL = process.env.BACKEND_URL ?? "";

export async function getCoffeeItems(type?: CoffeeType) {
  let url = `${BACKEND_URL}/coffee`;

  if (type) {
    url = `${url}?type=${type}`;
  }

  const response = await fetch(url);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result);
  }

  return result as CoffeeItem[];
}

type Result =
  | { success: true; data: CoffeeItem }
  | { success: false; error: string };

export async function postCoffee(data: CreateCoffeeRequest): Promise<Result> {
  const url = `${BACKEND_URL}/coffee`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok && response.status !== 409) {
    throw new Error(result);
  }

  if (response.status === 409) {
    return {
      success: false,
      error: "The name already exists",
    };
  }

  return { success: true, data: result as CoffeeItem };
}
