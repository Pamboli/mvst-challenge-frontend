export function formatMoney(total: number) {
  const euros = total / 100;
  return euros.toFixed(2) + " €";
}
