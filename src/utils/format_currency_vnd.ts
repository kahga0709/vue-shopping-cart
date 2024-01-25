/**
 * Format a number as Vietnamese dong currency
 * @param value - The number to be formatted
 * @returns The formatted currency string
 */
export function formatCurrencyVND(value: number): string {
  return value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

