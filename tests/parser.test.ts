import {
  describe,
  expect,
  it,
} from "vitest";

import {
  isValidMoney,
  parseKHR,
} from "../src";

describe("parseKHR", () => {
  it("parses normal KHR", () => {
    expect(
      parseKHR("1,000 ៛"),
    ).toBe(1000);
  });

  it("parses prefix currency", () => {
    expect(
      parseKHR("៛10,000"),
    ).toBe(10000);
  });

  it("parses prefix currency with space", () => {
    expect(
      parseKHR("៛ 10,000"),
    ).toBe(10000);
  });

  it("parses suffix currency", () => {
    expect(
      parseKHR("10,000៛"),
    ).toBe(10000);
  });

  it("parses without currency", () => {
    expect(
      parseKHR("10,000"),
    ).toBe(10000);
  });

  it("parses Khmer digits", () => {
    expect(
      parseKHR("១២៣,៤៥៦ ៛"),
    ).toBe(123456);
  });

  it("parses decimals", () => {
    expect(
      parseKHR("1,234.50 ៛"),
    ).toBe(1234.5);
  });

  it("handles zero", () => {
    expect(
      parseKHR("0"),
    ).toBe(0);
  });

  it("handles invalid values", () => {
    expect(
      parseKHR("hello"),
    ).toBe(0);
  });
});

describe("isValidMoney", () => {
  it("accepts valid money", () => {
    expect(
      isValidMoney("10,000"),
    ).toBe(true);
  });

  it("accepts KHR symbol", () => {
    expect(
      isValidMoney("10,000 ៛"),
    ).toBe(true);
  });

  it("accepts Khmer digits", () => {
    expect(
      isValidMoney("១០,០០០"),
    ).toBe(true);
  });

  it("rejects invalid money", () => {
    expect(
      isValidMoney("hello"),
    ).toBe(false);
  });

  it("rejects empty", () => {
    expect(
      isValidMoney(""),
    ).toBe(false);
  });
});