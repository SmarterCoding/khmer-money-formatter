import {
  formatNumber,
  toNumericValue,
} from "./number";

import type {
  MoneyFormatOptions,
} from "./types";

const DEFAULT_MONEY_OPTIONS:
  Required<MoneyFormatOptions> = {
    symbol: true,
    currency: "៛",
    decimals: 0,
    separator: ",",
    decimalSeparator: ".",
    currencyPosition: "suffix",
    khmerDigits: false,
    empty: "0",
    roundTo: 100,
  };

/**
 * Always rounds a KHR value upward
 * to the nearest configured unit.
 *
 * Example:
 *
 * 1000.01 -> 1100
 * 1050    -> 1100
 * 1099    -> 1100
 * 1100    -> 1100
 */
export function ceilMoney(
  value: number,
  unit = 100,
): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  if (!Number.isFinite(unit) || unit <= 0) {
    return value;
  }

  return Math.ceil(value / unit) * unit;
}

/**
 * Format Khmer Riel.
 */
export function formatKHR(
  value: unknown,
  options: MoneyFormatOptions = {},
): string {
  const config = {
    ...DEFAULT_MONEY_OPTIONS,
    ...options,
  };

  const numericValue =
    toNumericValue(value);

  if (numericValue === null) {
    const emptyValue = config.empty;

    if (!config.symbol) {
      return emptyValue;
    }

    if (!emptyValue) {
      return "";
    }

    return config.currencyPosition ===
      "prefix"
      ? `${config.currency}${emptyValue}`
      : `${emptyValue} ${config.currency}`;
  }

  const roundedValue = ceilMoney(
    numericValue,
    config.roundTo,
  );

  const formatted =
    formatNumber(roundedValue, {
      decimals: 0,
      separator: config.separator,
      decimalSeparator:
        config.decimalSeparator,
      khmerDigits:
        config.khmerDigits,
      empty: config.empty,
    });

  if (!config.symbol) {
    return formatted;
  }

  if (config.currencyPosition === "prefix") {
    return `${config.currency}${formatted}`;
  }

  return `${formatted} ${config.currency}`;
}

/**
 * Format an amount for text input.
 *
 * KHR values are rounded upward to the nearest
 * 100 Riel by default.
 */
export function formatKHRInput(
  value: unknown,
  options: MoneyFormatOptions = {},
): string {
  const config = {
    ...DEFAULT_MONEY_OPTIONS,
    ...options,
  };

  const numericValue =
    toNumericValue(value);

  if (numericValue === null) {
    return config.empty;
  }

  const roundedValue = ceilMoney(
    numericValue,
    config.roundTo,
  );

  return formatNumber(roundedValue, {
    decimals: 0,
    separator: config.separator,
    decimalSeparator:
      config.decimalSeparator,
    khmerDigits:
      config.khmerDigits,
    empty: config.empty,
  });
}

/**
 * Format KHR using the long currency name.
 */
export function formatKHRLong(
  value: unknown,
  options: MoneyFormatOptions & {
    khmer?: boolean;
  } = {},
): string {
  const {
    khmer = false,
    ...moneyOptions
  } = options;

  const formatted =
    formatKHR(value, {
      ...moneyOptions,
      symbol: false,
      khmerDigits:
        moneyOptions.khmerDigits ??
        khmer,
    });

  if (!formatted) {
    return "";
  }

  return moneyOptions.currencyPosition ===
    "prefix"
    ? `រៀល${formatted}`
    : `${formatted} រៀល`;
}