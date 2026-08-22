const DIGITS = [
  "សូន្យ",
  "មួយ",
  "ពីរ",
  "បី",
  "បួន",
  "ប្រាំ",
  "ប្រាំមួយ",
  "ប្រាំពីរ",
  "ប្រាំបី",
  "ប្រាំបួន",
];

const TENS: Record<number, string> = {
  2: "ម្ភៃ",
  3: "សាមសិប",
  4: "សែសិប",
  5: "ហាសិប",
  6: "ហុកសិប",
  7: "ចិតសិប",
  8: "ប៉ែតសិប",
  9: "កៅសិប",
};

const SCALES = [
  "",
  "ពាន់",
  "លាន",
  "ពាន់លាន",
  "ទ្រីលាន",
  "ក្វាទ្រីលាន",
];

function under100(
  value: number,
): string {
  if (value < 10) {
    return DIGITS[value]?? '';
  }

  if (value === 10) {
    return "ដប់";
  }

  if (value < 20) {
    return `ដប់${DIGITS[value - 10]}`;
  }

  const tens = Math.floor(value / 10);
  var ones: number;
  ones = value % 10;

  let result = TENS[tens];

  if (ones > 0) {
    result += DIGITS[ones]??'';
  }

  return result??'';
}

function under1000(
  value: number,
): string {
  if (value === 0) {
    return "";
  }

  const hundreds =
    Math.floor(value / 100);

  const remainder =
    value % 100;

  let result = "";

  if (hundreds > 0) {
    result +=
      `${DIGITS[hundreds]}រយ`;
  }

  if (remainder > 0) {
    result += under100(remainder);
  }

  return result;
}

function integerToKhmerText(
  value: number,
): string {
  if (value === 0) {
    return DIGITS[0]??'';
  }

  let number = value;
  let groupIndex = 0;
  let result = "";

  while (number > 0) {
    const group = number % 1000;

    if (group !== 0) {
      const text =
        under1000(group);

      const scale =
        SCALES[groupIndex] ?? "";

      result =
        text + scale + result;
    }

    number =
      Math.floor(number / 1000);

    groupIndex++;
  }

  return result;
}


/**
 * Convert a number to Khmer text.
 *
 * Example:
 *
 * 123 -> មួយរយម្ភៃបី
 */
export function numberToKhmerText(
  value: number | string,
): string {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return DIGITS[0]??'';
  }

  const normalized =
    String(value)
      .replace(/,/g, "")
      .trim();

  const number =
    Number(normalized);

  if (!Number.isFinite(number)) {
    return "";
  }

  if (number === 0) {
    return DIGITS[0]??'';
  }

  if (number < 0) {
    return `ដក${numberToKhmerText(
      Math.abs(number),
    )}`;
  }

  return integerToKhmerText(
    Math.floor(number),
  );
}

/**
 * Convert a decimal number to Khmer text.
 *
 * Example:
 *
 * 123.45
 * ->
 * មួយរយម្ភៃបីចុចបួនប្រាំ
 */
export function decimalToKhmerText(
  value: number | string,
): string {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return DIGITS[0]??'';
  }

  const normalized =
    String(value)
      .replace(/,/g, "")
      .trim();

  const number =
    Number(normalized);

  if (!Number.isFinite(number)) {
    return "";
  }

  if (!normalized.includes(".")) {
    return numberToKhmerText(
      normalized,
    );
  }

  const [
    integerPart='',
    decimalPart = '',
  ] = normalized.split(".");

  const integerText =
    numberToKhmerText(integerPart);

  const decimalText = numberToKhmerText(decimalPart);
  // const decimalText =
  //   decimalPart
  //     .split("")
  //     .map(
  //       (digit) =>
  //         DIGITS[Number(digit)],
  //     )
  //     .join("");

  return `${integerText}ចុច${decimalText}`;
}

/**
 * Format KHR amount as Khmer text.
 *
 * Example:
 *
 * 10000 -> មួយម៉ឺនរៀល
 */
export function numberToKhmerMoneyText(
  value: number | string,
): string {
  return `${numberToKhmerText(value)}រៀល`;
}