export type CurrencyPosition = "prefix" | "suffix";

export interface MoneyFormatOptions {
  /**
   * Show currency symbol.
   *
   * @default true
   */
  symbol?: boolean;

  /**
   * Currency symbol or name.
   *
   * @default "៛"
   */
  currency?: string;

  /**
   * Decimal places.
   *
   * KHR formatting defaults to 0 because
   * Khmer Riel is treated as a whole-number currency.
   *
   * @default 0
   */
  decimals?: number;

  /**
   * Thousands separator.
   *
   * @default ","
   */
  separator?: string;

  /**
   * Decimal separator.
   *
   * @default "."
   */
  decimalSeparator?: string;

  /**
   * Currency position.
   *
   * @default "suffix"
   */
  currencyPosition?: CurrencyPosition;

  /**
   * Convert Arabic digits to Khmer digits.
   *
   * @default false
   */
  khmerDigits?: boolean;

  /**
   * Value returned for null, undefined or empty values.
   *
   * @default "0"
   */
  empty?: string;

  /**
   * Round KHR upward to the nearest unit.
   *
   * @default 100
   *
   * Example:
   *
   * 1000.01 -> 1100
   * 1050    -> 1100
   * 1100    -> 1100
   */
  roundTo?: number;
}

export interface NumberFormatOptions {
  /**
   * Number of decimal places.
   *
   * @default 0
   */
  decimals?: number;

  /**
   * Thousands separator.
   *
   * @default ","
   */
  separator?: string;

  /**
   * Decimal separator.
   *
   * @default "."
   */
  decimalSeparator?: string;

  /**
   * Convert Arabic digits to Khmer digits.
   *
   * @default false
   */
  khmerDigits?: boolean;

  /**
   * Value returned for empty values.
   *
   * @default "0"
   */
  empty?: string;
}

export interface KhmerLongFormatOptions
  extends MoneyFormatOptions {
  /**
   * Use Khmer digits.
   *
   * @default false
   */
  khmer?: boolean;
}