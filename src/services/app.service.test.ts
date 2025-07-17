import { formatMoney } from "./app.service";

describe("formatMoney", () => {
  it("formats integer cents to euros with two decimals and euro sign", () => {
    expect(formatMoney(12345)).toBe("123.45 €");
    expect(formatMoney(0)).toBe("0.00 €");
    expect(formatMoney(500)).toBe("5.00 €");
  });

  it("formats small amounts correctly", () => {
    expect(formatMoney(1)).toBe("0.01 €");
    expect(formatMoney(10)).toBe("0.10 €");
  });

  it("formats negative amounts correctly", () => {
    expect(formatMoney(-12345)).toBe("-123.45 €");
  });
});
