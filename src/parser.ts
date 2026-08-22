import { fromKhmerNumber } from "./khmer";
import { parseNumber } from "./number";

const KHMER_CURRENCY = "៛";
const KHMER_RIEL = "រៀល";

export function parseKHR(value: unknown): number {
  if (value === null || value === undefined) {
    return 0;
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  let input = String(value).trim();

  if (!input) {
    return 0;
  }

  input = input
    .replace(new RegExp(KHMER_CURRENCY, "g"), "")
    .replace(new RegExp(KHMER_RIEL, "g"), "")
    .trim();

  return fromKhmerNumber(input) || parseNumber(input);
}

export function isValidMoney(value: unknown): boolean {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (value === null || value === undefined) {
    return false;
  }

  const input = String(value).trim();

  if (!input) {
    return false;
  }

  const parsed = parseKHR(input);

  if (!Number.isFinite(parsed)) {
    return false;
  }

  const cleaned = input
    .replace(/៛/g, "")
    .replace(/រៀល/g, "")
    .replace(/[០-៩]/g, "")
    .replace(/[0-9]/g, "")
    .replace(/[,\s.-]/g, "");

  return cleaned.length === 0;
}