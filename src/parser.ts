import {
  parseNumber,
} from "./number";

import {
  fromKhmerNumber,
} from "./khmer";

/**
 * Parse a Khmer Riel formatted value.
 *
 * Supports:
 *
 * 10,000
 * 10,000 ៛
 * ៛10,000
 * ៛ 10,000
 * 10,000៛
 * ១០,០០០
 */
export function parseKHR(
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

  const cleaned = value
    .replace(/៛/g, "")
    .replace(/រៀល/g, "")
    .replace(/\s+/g, "")
    .trim();

  if (!cleaned) {
    return 0;
  }

  if (/[០-៩]/.test(cleaned)) {
    return fromKhmerNumber(cleaned);
  }

  return parseNumber(cleaned);
}

/**
 * Validate a money input.
 */
export function isValidMoney(
  value: unknown,
): boolean {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return false;
  }

  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (typeof value !== "string") {
    return false;
  }

  const input = value.trim();

  if (!input) {
    return false;
  }

  const cleaned = input
    .replace(/៛/g, "")
    .replace(/រៀល/g, "")
    .replace(/\s+/g, "")
    .trim();

  if (!cleaned) {
    return false;
  }

  const arabic = cleaned.replace(
    /[០-៩]/g,
    (digit) => {
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

      return map[digit] ?? digit;
    },
  );

  const normalized = arabic.replace(
    /,/g,
    "",
  );

  return /^[-+]?\d+(\.\d+)?$/.test(
    normalized,
  );
}