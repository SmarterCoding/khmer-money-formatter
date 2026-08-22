import {
  describe,
  expect,
  it,
} from "vitest";

import {
  formatNumber,
  parseNumber,
} from "../src";

describe("formatNumber", () => {
  it("formats integers", () => {
    expect(
      formatNumber(1234567),
    ).toBe("1,234,567");
  });

  it("formats decimals", () => {
    expect(
      formatNumber(1234567.89, {
        decimals: 2,
      }),
    ).toBe("1,234,567.89");
  });

  it("rounds decimals", () => {
    expect(
      formatNumber(1000.567, {
        decimals: 2,
      }),
    ).toBe("1,000.57");
  });

  it("supports custom separators", () => {
    expect(
      formatNumber(1234567.89, {
        decimals: 2,
        separator: ".",
        decimalSeparator: ",",
      }),
    ).toBe("1.234.567,89");
  });

  it("supports Khmer digits", () => {
    expect(
      formatNumber(123456, {
        khmerDigits: true,
      }),
    ).toBe("១២៣,៤៥៦");
  });

  it("handles null", () => {
    expect(
      formatNumber(null),
    ).toBe("0");
  });
});

describe("parseNumber", () => {
  it("parses formatted numbers", () => {
    expect(
      parseNumber("1,234,567"),
    ).toBe(1234567);
  });

  it("parses decimals", () => {
    expect(
      parseNumber("1,234.50"),
    ).toBe(1234.5);
  });

  it("parses Khmer digits", () => {
    expect(
      parseNumber("១,២៣៤"),
    ).toBe(1234);
  });

  it("handles invalid values", () => {
    expect(
      parseNumber("hello"),
    ).toBe(0);
  });
});