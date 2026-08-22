import type { NumberFormatOptions } from "./types";

const DEFAULT_OPTIONS: Required<NumberFormatOptions> = {
  decimals: 0,
  separator: ",",
  decimalSeparator: ".",
  khmerDigits: false,
  empty: "0",
};

export function toNumericValue(
  value: unknown,
): number | null {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === "bigint") {
    return Number(value);
  }

  if (typeof value !== "string") {
    return null;
  }

  const normalized = value
    .trim()
    .replace(/,/g, "");

  if (!normalized) {
    return null;
  }

  const parsed = Number(normalized);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

export function formatNumber(
  value: unknown,
  options: NumberFormatOptions = {},
): string {
  const config = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const numericValue = toNumericValue(value);

  if (numericValue === null) {
    return config.empty;
  }

  const decimals = Math.max(
    0,
    Math.floor(config.decimals),
  );

  const fixed = numericValue.toFixed(decimals);

  const [integerPart = '', decimalPart] =
    fixed.split(".");

  const negative = integerPart.startsWith("-");

  const absoluteInteger = negative
    ? integerPart.slice(1)
    : integerPart;

  const formattedInteger =
    absoluteInteger.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      config.separator,
    );

  let result =
    `${negative ? "-" : ""}${formattedInteger}`;

  if (decimals > 0 && decimalPart !== undefined) {
    result +=
      config.decimalSeparator +
      decimalPart;
  }

  return config.khmerDigits
    ? convertDigitsToKhmer(result)
    : result;
}

export function parseNumber(
  value: unknown,
): number {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return 0;
  }

  if (typeof value === "number") {
    return Number.isFinite(value)
      ? value
      : 0;
  }

  if (typeof value !== "string") {
    return 0;
  }

  const normalized = convertDigitsFromKhmer(
    value,
  )
    .trim()
    .replace(/,/g, "");

  if (!normalized) {
    return 0;
  }

  const parsed = Number(normalized);

  return Number.isFinite(parsed)
    ? parsed
    : 0;
}

function convertDigitsToKhmer(
  value: string,
): string {
  const map: Record<string, string> = {
    "0": "០",
    "1": "១",
    "2": "២",
    "3": "៣",
    "4": "៤",
    "5": "៥",
    "6": "៦",
    "7": "៧",
    "8": "៨",
    "9": "៩",
  };

  return value.replace(
    /\d/g,
    (digit) => map[digit]??digit,
  );
}

function convertDigitsFromKhmer(
  value: string,
): string {
  const map: Record<string, string> = {
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

  return value.replace(
    /[០-៩]/g,
    (digit) => map[digit]??digit,
  );
}