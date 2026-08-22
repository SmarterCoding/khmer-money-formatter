export type CurrencyPosition = "prefix" | "suffix";

export interface MoneyFormatOptions {
  /**
   * Show currency symbol.
   * @default true
   */
  symbol?: boolean;

  /**
   * Currency symbol.
   * @default "៛"
   */
  currency?: string;

  /**
   * Number of decimal places.
   * @default 0
   */
  decimals?: number;

  /**
   * Thousands separator.
   * @default ","
   */
  separator?: string;

  /**
   * Decimal separator.
   * @default "."
   */
  decimalSeparator?: string;

  /**
   * Currency position.
   * @default "suffix"
   */
  currencyPosition?: CurrencyPosition;

  /**
   * Convert Arabic digits to Khmer digits.
   * @default false
   */
  khmerDigits?: boolean;

  /**
   * Value returned for null/undefined/empty values.
   * @default "0"
   */
    empty?: string;
}

export interface NumberFormatOptions {
  decimals?: number;
  separator?: string;
  decimalSeparator?: string;
  khmerDigits?: boolean;
empty?: string;
}
