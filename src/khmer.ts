const KHMER_DIGITS = "០១២៣៤៥៦៧៨៩";
const ARABIC_DIGITS = "0123456789";

export function toKhmerNumber(value: number | string): string {
  const input = String(value);

  return input.replace(/[0-9]/g, (digit) => {
    return KHMER_DIGITS[ARABIC_DIGITS.indexOf(digit)] ?? digit;
  });
}

export function fromKhmerNumber(value: string): number {
  if (!value) {
    return 0;
  }

  const normalized = value
    .replace(/[០-៩]/g, (digit) => {
      return String(KHMER_DIGITS.indexOf(digit)) ?? digit;
    })
    .replace(/,/g, "");

  const result = Number(normalized);

  return Number.isFinite(result) ? result : 0;
}