import {
  describe,
  expect,
  it,
} from "vitest";

import {
  fromKhmerNumber,
  toKhmerNumber,
  numberToKhmerText,
  decimalToKhmerText,
  numberToKhmerMoneyText,
} from "../src";

describe("Khmer digits", () => {
  it("converts Arabic to Khmer", () => {
    expect(
      toKhmerNumber(123456),
    ).toBe("១២៣៤៥៦");
  });

  it("converts Khmer to Arabic", () => {
    expect(
      fromKhmerNumber("១២៣,៤៥៦"),
    ).toBe(123456);
  });

  it("supports decimals", () => {
    expect(
      fromKhmerNumber("១២៣.៥"),
    ).toBe(123.5);
  });
});

describe("Khmer text", () => {
  it("converts zero", () => {
    expect(
      numberToKhmerText(0),
    ).toBe("សូន្យ");
  });

  it("converts one", () => {
    expect(
      numberToKhmerText(1),
    ).toBe("មួយ");
  });

  it("converts ten", () => {
    expect(
      numberToKhmerText(10),
    ).toBe("ដប់");
  });

  it("converts eleven", () => {
    expect(
      numberToKhmerText(11),
    ).toBe("ដប់មួយ");
  });

  it("converts twenty", () => {
    expect(
      numberToKhmerText(20),
    ).toBe("ម្ភៃ");
  });

  it("converts 100", () => {
    expect(
      numberToKhmerText(100),
    ).toBe("មួយរយ");
  });

  it("converts 123", () => {
    expect(
      numberToKhmerText(123),
    ).toBe("មួយរយម្ភៃបី");
  });

  it("converts 1000", () => {
    expect(
      numberToKhmerText(1000),
    ).toBe("មួយពាន់");
  });

  it("supports negative numbers", () => {
    expect(
      numberToKhmerText(-100),
    ).toBe("ដកមួយរយ");
  });

  it("supports decimals", () => {
    expect(
      decimalToKhmerText(123.45),
    ).toBe(
      "មួយរយម្ភៃបីចុចសែសិបប្រាំ",
    );
  });

  it("supports money text", () => {
    expect(
      numberToKhmerMoneyText(1000),
    ).toBe("មួយពាន់រៀល");
  });
});