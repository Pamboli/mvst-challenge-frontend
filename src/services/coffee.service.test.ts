import { CreateCoffeeRequest } from "@/types/coffee.type";
import { getCoffeeItems, postCoffee } from "./coffee.service";

describe("Coffee Service", () => {
  const BACKEND_URL = process.env.BACKEND_URL ?? "";

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getCoffeeItems", () => {
    it("fetches coffee items without type query", async () => {
      const mockData = [{ id: "1", name: "Espresso", type: "ARABIC" }];
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await getCoffeeItems();

      expect(fetch).toHaveBeenCalledWith(`${BACKEND_URL}/coffee`);
      expect(result).toEqual(mockData);
    });

    it("fetches coffee items with type query", async () => {
      const type = "ARABIC";
      const mockData = [{ id: "2", name: "Pour Over", type }];
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await getCoffeeItems(type);

      expect(fetch).toHaveBeenCalledWith(`${BACKEND_URL}/coffee?type=${type}`);
      expect(result).toEqual(mockData);
    });
  });

  describe("postCoffee", () => {
    const newCoffee: CreateCoffeeRequest = {
      name: "Latte",
      type: "ARABIC",
      description: "test",
      imageUrl: "/test",
      price: 1000,
    };

    it("returns success true and data on successful post", async () => {
      const mockResponse = { id: "3", ...newCoffee };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockResponse,
      });

      const result = await postCoffee(newCoffee);

      expect(fetch).toHaveBeenCalledWith(
        `${BACKEND_URL}/coffee`,
        expect.objectContaining({
          method: "POST",
          headers: expect.any(Headers),
          body: JSON.stringify(newCoffee),
        })
      );

      expect(result).toEqual({ success: true, data: mockResponse });
    });

    it("returns success false with error message on 409 conflict", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 409,
        json: async () => ({ message: "Conflict" }),
      });

      const result = await postCoffee(newCoffee);

      expect(result).toEqual({
        success: false,
        error: "The name already exists",
      });
    });
  });
});
