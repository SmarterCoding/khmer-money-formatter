import { describe, expect, it } from "vitest";
import {
  formatKHR,
  formatKHRInput,
  formatKHRLong,
} from "../src/index";

describe("formatKHR", () => {
  it("formats Khmer Riel", () => {
    expect(formatKHR(1000)).toBe("1,000 ៛");
  });

  it("formats large numbers", () => {
    expect(formatKHR(1234567)).toBe("1,234,567 ៛");
  });

  it("formats decimals", () => {
    expect(formatKHR(1234567.5, {
      decimals: 2,
    })).toBe("1,234,567.50 ៛");
  });

  it("rounds decimals", () => {
    expect(formatKHR(1000.567, {
      decimals: 2,
    })).toBe("1,000.57 ៛");
  });

  it("handles zero", () => {
    expect(formatKHR(0)).toBe("0 ៛");
  });

  it("handles null", () => {
    expect(formatKHR(null)).toBe("0 ៛");
  });

  it("handles undefined", () => {
    expect(formatKHR(undefined)).toBe("0 ៛");
  });

  it("handles empty strings", () => {
    expect(formatKHR("")).toBe("0 ៛");
  });

  it("supports empty option", () => {
    expect(formatKHR(null, {
      empty: "",
    })).toBe("");
  });

  it("supports symbol false", () => {
    expect(formatKHR(50000, {
      symbol: false,
    })).toBe("50,000");
  });

  it("supports custom currency", () => {
    expect(formatKHR(50000, {
      currency: "KHR",
    })).toBe("50,000 KHR");
  });

  it("supports prefix currency", () => {
    expect(formatKHR(1000, {
      currencyPosition: "prefix",
    })).toBe("៛1,000");
  });

  it("supports custom separators", () => {
    expect(formatKHR(1234567.89, {
      separator: ".",
      decimalSeparator: ",",
      decimals: 2,
    })).toBe("1.234.567,89 ៛");
  });

  it("supports Khmer digits", () => {
    expect(formatKHR(123456, {
      khmerDigits: true,
    })).toBe("១២៣,៤៥៦ ៛");
  });

  it("supports negative values", () => {
    expect(formatKHR(-5000)).toBe("-5,000 ៛");
  });
});

describe("formatKHRInput", () => {
  it("formats input values", () => {
    expect(formatKHRInput("10000")).toBe("10,000");
  });

  it("does not include currency", () => {
    expect(formatKHRInput(50000)).toBe("50,000");
  });
});

describe("formatKHRLong", () => {
  it("formats long Khmer currency", () => {
    expect(formatKHRLong(1000)).toBe("1,000 រៀល");
  });

  it("supports Khmer digits", () => {
    expect(formatKHRLong(1000, {
      khmer: true,
    })).toBe("១,០០០ រៀល");
  });
});