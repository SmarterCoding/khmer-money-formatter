import { describe, expect, it } from "vitest";
import {
  toKhmerNumber,
  fromKhmerNumber,
} from "../src/index";

describe("Khmer number conversion", () => {
  it("converts Arabic digits to Khmer", () => {
    expect(toKhmerNumber(123456)).toBe("១២៣៤៥៦");
  });

  it("supports strings", () => {
    expect(toKhmerNumber("123,456.78")).toBe("១២៣,៤៥៦.៧៨");
  });

  it("converts Khmer digits back", () => {
    expect(fromKhmerNumber("១២៣,៤៥៦")).toBe(123456);
  });

  it("supports Khmer decimals", () => {
    expect(fromKhmerNumber("១២៣.៥")).toBe(123.5);
  });
});