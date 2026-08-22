import { formatNumber } from "./number";
import { toKhmerNumber } from "./khmer";
import type { MoneyFormatOptions } from "./types";

const DEFAULT_OPTIONS: Required<MoneyFormatOptions> = {
  symbol: true,
  currency: "៛",
  decimals: 0,
  separator: ",",
  decimalSeparator: ".",
  currencyPosition: "suffix",
  khmerDigits: false,
  empty: "0"
};

function normalizeOptions(
  options: MoneyFormatOptions = {
  },
): Required<MoneyFormatOptions> {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    decimals: Math.max(
      0,
      Math.floor(options.decimals ?? DEFAULT_OPTIONS.decimals),
    ),
  };
}

export function formatKHR(
  value: unknown,
  options: MoneyFormatOptions = {
  },
): string {
  const config = normalizeOptions(options);

  if (value === null || value === undefined || value === "") {
    if (config.empty === "") {
      return "";
    }

    if (!config.symbol) {
      return config.empty;
    }

    return config.currencyPosition === "prefix"
      ? `${config.currency}${config.empty}`
      : `${config.empty} ${config.currency}`;
  }

  const formatted = formatNumber(value, {
    decimals: config.decimals,
    separator: config.separator,
    decimalSeparator: config.decimalSeparator,
    khmerDigits: config.khmerDigits,
  });

  if (!config.symbol) {
    return formatted;
  }

  if (config.currencyPosition === "prefix") {
    return `${config.currency}${formatted}`;
  }

  return `${formatted} ${config.currency}`;
}

export function formatKHRInput(
  value: unknown,
  options: Omit<MoneyFormatOptions, "symbol" | "currency" | "currencyPosition"> = {},
): string {
  return formatNumber(value, {
    decimals: options.decimals ?? 0,
    separator: options.separator ?? ",",
    decimalSeparator: options.decimalSeparator ?? ".",
    khmerDigits: options.khmerDigits ?? false,
      empty: options.empty ?? "0"
  });
}

export function formatKHRLong(
  value: unknown,
  options: Omit<MoneyFormatOptions, "currency"> & {
    khmer?: boolean;
  } = {},
): string {
  const {
    khmer = false,
    symbol = false,
    ...formatOptions
  } = options;

  const number = formatNumber(value, {
    ...formatOptions,
      khmerDigits: khmer,
  });

  const result = `${number} រៀល`;

  if (symbol) {
    return result;
  }

  return result;
}