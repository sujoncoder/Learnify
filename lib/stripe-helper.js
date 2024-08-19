export function formatAmountForStripe(amount, currency = "USD") {
  // Check if the currency is provided
  if (!currency) {
    throw new Error("Currency code is required with currency style.");
  }

  let numberFormat = new Intl.NumberFormat(["en-us"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });

  const parts = numberFormat.formatToParts(amount);

  let zeroDecimalCurrency = true;

  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
      break;
    }
  }

  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
