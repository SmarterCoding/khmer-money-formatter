import { describe, expect, it } from "vitest";
import {
  parseKHR,
  isValidMoney,
} from "../src/index";

describe("parseKHR", () => {
  it("parses formatted Khmer money", () => {
    expect(parseKHR("1,000 ៛")).toBe(1000);
  });

  it("parses large values", () => {
    expect(parseKHR("1,234,567 ៛")).toBe(1234567);
  });

  it("parses decimal values", () => {
    expect(parseKHR("1,234,567.50 ៛")).toBe(1234567.5);
  });

  it("supports prefix currency", () => {
    expect(parseKHR("៛ 10,000")).toBe(10000);
  });

  it("supports suffix currency", () => {
    expect(parseKHR("10,000៛")).toBe(10000);
  });

  it("supports values without currency", () => {
    expect(parseKHR("10,000")).toBe(10000);
  });

  it("supports Khmer currency name", () => {
    expect(parseKHR("10,000 រៀល")).toBe(10000);
  });

  it("supports Khmer digits", () => {
    expect(parseKHR("១២៣,៤៥៦ ៛")).toBe(123456);
  });

  it("handles zero", () => {
    expect(parseKHR("0 ៛")).toBe(0);
  });

  it("handles empty value", () => {
    expect(parseKHR("")).toBe(0);
  });

  it("handles null", () => {
    expect(parseKHR(null)).toBe(0);
  });

  it("handles undefined", () => {
    expect(parseKHR(undefined)).toBe(0);
  });
});

describe("isValidMoney", () => {
  it("accepts valid money", () => {
    expect(isValidMoney("10,000")).toBe(true);
  });

  it("accepts currency", () => {
    expect(isValidMoney("10,000 ៛")).toBe(true);
  });

  it("accepts Khmer digits", () => {
    expect(isValidMoney("១២៣,៤៥៦ ៛")).toBe(true);
  });

  it("rejects invalid values", () => {
    expect(isValidMoney("hello")).toBe(false);
  });

  it("rejects empty values", () => {
    expect(isValidMoney("")).toBe(false);
  });
});