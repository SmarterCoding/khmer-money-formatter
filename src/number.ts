import type { NumberFormatOptions } from "./types";

const DEFAULT_OPTIONS: Required<NumberFormatOptions> = {
  decimals: 0,
  separator: ",",
  decimalSeparator: ".",
  khmerDigits: false,
  empty: "0",
};

function normalizeOptions(
  options: NumberFormatOptions = {},
): Required<NumberFormatOptions> {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    decimals: Math.max(0, Math.floor(options.decimals ?? DEFAULT_OPTIONS.decimals)),
  };
}

function normalizeNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === "string") {
    const normalized = value.trim();

    if (!normalized) {
      return null;
    }

    const parsed = Number(normalized.replace(/,/g, ""));

    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function addThousandsSeparator(
  value: string,
  separator: string,
): string {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function formatNumber(
  value: unknown,
  options: NumberFormatOptions = {},
): string {
  const config = normalizeOptions(options);
  const number = normalizeNumber(value);

  if (number === null) {
    return config.empty;
  }

  const fixed = number.toFixed(config.decimals);
  const negative = fixed.startsWith("-");
  const unsigned = negative ? fixed.slice(1) : fixed;

  const [integerPart="", decimalPart] = unsigned.split(".");

  const formattedInteger = addThousandsSeparator(
    integerPart,
    config.separator,
  );

  let result = `${negative ? "-" : ""}${formattedInteger}`;

  if (config.decimals > 0) {
    result += `${config.decimalSeparator}${decimalPart}`;
  }

  if (config.khmerDigits) {
    result = toKhmerDigits(result);
  }

  return result;
}

function toKhmerDigits(value: string): string {
  const digits: Record<string, string> = {
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

  return value.replace(/[0-9]/g, (digit) => digits[digit]!);
}

export function parseNumber(value: unknown): number {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (value === null || value === undefined) {
    return 0;
  }

  const input = String(value).trim();

  if (!input) {
    return 0;
  }

  const normalized = input
    .replace(/[០-៩]/g, (digit) => {
      const khmerDigits = "០១២៣៤៥៦៧៨៩";
      return String(khmerDigits.indexOf(digit));
    })
    .replace(/,/g, "");

  const result = Number(normalized);

  return Number.isFinite(result) ? result : 0;
}