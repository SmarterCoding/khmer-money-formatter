import {
  describe,
  expect,
  it,
} from "vitest";

import {
  ceilMoney,
  formatKHR,
  formatKHRInput,
  formatKHRLong,
} from "../src";

describe("ceilMoney", () => {
  it("rounds upward to nearest 100", () => {
    expect(
      ceilMoney(1000.01),
    ).toBe(1100);

    expect(
      ceilMoney(1050),
    ).toBe(1100);

    expect(
      ceilMoney(1099),
    ).toBe(1100);

    expect(
      ceilMoney(1100),
    ).toBe(1100);
  });
});

describe("formatKHR", () => {
  it("formats Khmer Riel", () => {
    expect(
      formatKHR(1000),
    ).toBe("1,000 ៛");
  });

  it("rounds KHR upward", () => {
    expect(
      formatKHR(1000.01),
    ).toBe("1,100 ៛");
  });

  it("rounds 1050 upward", () => {
    expect(
      formatKHR(1050),
    ).toBe("1,100 ៛");
  });

  it("handles zero", () => {
    expect(
      formatKHR(0),
    ).toBe("0 ៛");
  });

  it("handles null", () => {
    expect(
      formatKHR(null),
    ).toBe("0 ៛");
  });

  it("handles undefined", () => {
    expect(
      formatKHR(undefined),
    ).toBe("0 ៛");
  });

  it("handles empty strings", () => {
    expect(
      formatKHR(""),
    ).toBe("0 ៛");
  });

  it("handles negative values", () => {
    expect(
      formatKHR(-5000),
    ).toBe("-5,000 ៛");
  });

  it("supports custom currency", () => {
    expect(
      formatKHR(50000, {
        currency: "KHR",
      }),
    ).toBe("50,000 KHR");
  });

  it("supports prefix currency", () => {
    expect(
      formatKHR(50000, {
        currencyPosition: "prefix",
      }),
    ).toBe("៛50,000");
  });

  it("supports no symbol", () => {
    expect(
      formatKHR(50000, {
        symbol: false,
      }),
    ).toBe("50,000");
  });

  it("supports Khmer digits", () => {
    expect(
      formatKHR(123456, {
        khmerDigits: true,
      }),
    ).toBe("១២៣,៥០០ ៛");
  });

  it("supports custom rounding unit", () => {
    expect(
      formatKHR(1001, {
        roundTo: 500,
      }),
    ).toBe("1,500 ៛");
  });

  it("supports long currency", () => {
    expect(
      formatKHRLong(1000),
    ).toBe("1,000 រៀល");
  });

  it("supports input formatting", () => {
    expect(
      formatKHRInput("10000"),
    ).toBe("10,000");
  });
});