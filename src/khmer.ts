const KHMER_DIGITS = [
  "០",
  "១",
  "២",
  "៣",
  "៤",
  "៥",
  "៦",
  "៧",
  "៨",
  "៩",
];

const KHMER_TO_ARABIC: Record<string, string> = {
  "០": "0",
  "១": "1",
  "២": "2",
  "៣": "3",
  "៤": "4",
  "៥": "5",
  "៦": "6",
  "៧": "7",
  "៨": "8",
  "៩": "9",
};

export function toKhmerNumber(
  value: number | string,
): string {
  const input = String(value);

  return input.replace(
    /\d/g,
    (digit) =>
      KHMER_DIGITS[Number(digit)]??digit,
  );
}

export function fromKhmerNumber(
  value: string,
): number {
  const normalized = value
    .replace(
      /[០-៩]/g,
      (digit) => KHMER_TO_ARABIC[digit]??digit,
    )
    .replace(/,/g, "")
    .trim();

  if (!normalized) {
    return 0;
  }

  const result = Number(normalized);

  return Number.isFinite(result)
    ? result
    : 0;
}