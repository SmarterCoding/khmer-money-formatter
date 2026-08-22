# Khmer Money Formatter


<p align="center">
  <a href="https://www.npmjs.com/package/khmer-money-formatter">
    <img src="https://img.shields.io/badge/logo-javascript-blue?logo=npm&logoColor=#CB3837" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/khmer-money-formatter">
    <img src="https://img.shields.io/npm/dm/khmer-money-formatter.svg?logo=github" alt="npm downloads">
  </a>
  <a href="https://github.com/SmarterCoding/khmer-money-formatter">
    <img src="https://img.shields.io/github/stars/SmarterCoding/khmer-money-formatter.svg?logo=github" alt="GitHub stars">
  </a>
  <a href="https://github.com/SmarterCoding/khmer-money-formatter/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/khmer-money-formatter.svg?logo=buddy" alt="license">
  </a>
  <a href="https://github.com/SmarterCoding/khmer-money-formatter/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/SmarterCoding/khmer-money-formatter/ci.yml?logo=iterm2" alt="CI">
  </a>
</p>


<p align="center">
  <strong>🇰🇭 Khmer-friendly money and number utilities for JavaScript and TypeScript.</strong>
</p>

<p align="center">
  Format Khmer Riel, parse money values, convert Khmer numerals, and convert numbers into Khmer text — with zero runtime dependencies.
</p>

---

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Installation](#installation)
* [Quick Start](#quick-start)
* [Money Formatting](#money-formatting)
* [Formatting Options](#formatting-options)
* [Without Currency Symbol](#without-currency-symbol)
* [Custom Currency Symbol](#custom-currency-symbol)
* [Currency Position](#currency-position)
* [Decimal Places](#decimal-places)
* [Rounding](#rounding)
* [Custom Separators](#custom-separators)
* [Negative Values](#negative-values)
* [Null and Empty Values](#null-and-empty-values)
* [Input Formatting](#input-formatting)
* [Parsing Money](#parsing-money)
* [Generic Number Formatting](#generic-number-formatting)
* [Generic Number Parsing](#generic-number-parsing)
* [Khmer Digit Support](#khmer-digit-support)
* [Number to Khmer Text](#number-to-khmer-text)
* [Decimal Number to Khmer Text](#decimal-number-to-khmer-text)
* [Long Khmer Currency](#long-khmer-currency)
* [Money to Khmer Text](#money-to-khmer-text)
* [Validation](#validation)
* [TypeScript](#typescript)
* [Browser Usage](#browser-usage)
* [Vanilla JavaScript](#vanilla-javascript)
* [jQuery](#jquery)
* [React](#react)
* [Next.js](#nextjs)
* [Vue](#vue)
* [Nuxt](#nuxt)
* [Node.js](#nodejs)
* [Express](#express)
* [NestJS](#nestjs)
* [Laravel Blade](#laravel-blade)
* [API Reference](#api-reference)
* [Tree Shaking](#tree-shaking)
* [Module Formats](#module-formats)
* [Framework Independence](#framework-independence)
* [Dependency Free](#dependency-free)
* [POS and Invoice Examples](#pos-and-invoice-examples)
* [Testing](#testing)
* [Building](#building)
* [Project Structure](#project-structure)
* [Security](#security)
* [Changelog](#changelog)
* [Contributing](#contributing)
* [FAQ](#faq)
* [License](#license)

---

# Introduction

**Khmer Money Formatter** is a lightweight, TypeScript-first, dependency-free library for working with Khmer currency and numbers.

The primary currency supported is:

* **KHR**
* **Khmer Riel**
* **៛**
* **រៀល**

The package provides simple APIs for:

```ts
formatKHR(10000);
// "10,000 ៛"

parseKHR("10,000 ៛");
// 10000
```

It also supports Khmer numerals:

```ts
toKhmerNumber(123456);
// "១២៣៤៥៦"
```

And number-to-Khmer-text conversion:

```ts
numberToKhmerText(123);
// "មួយរយម្ភៃបី"
```

The library is designed for:

* POS systems
* Invoices
* Receipts
* Accounting systems
* E-commerce applications
* Payment applications
* Banking interfaces
* Khmer websites
* Khmer forms
* Business applications
* JavaScript applications
* TypeScript applications

---

# Features

## 💰 Money Formatting

```ts
formatKHR(1000);
// "1,000 ៛"
```

## 🔢 Number Formatting

```ts
formatNumber(1234567);
// "1,234,567"
```

## 🇰🇭 Khmer Digits

```ts
toKhmerNumber(123456);
// "១២៣៤៥៦"
```

## 📝 Number to Khmer Text

```ts
numberToKhmerText(123);
// "មួយរយម្ភៃបី"
```

## 🔄 Money Parsing

```ts
parseKHR("10,000 ៛");
// 10000
```

## ✏️ Input Formatting

```ts
formatKHRInput("10000");
// "10,000"
```

## ✅ Validation

```ts
isValidMoney("10,000");
// true
```

## 💵 Long Currency Format

```ts
formatKHRLong(1000);
// "1,000 រៀល"
```

## 🌐 Multiple Module Formats

Supports:

* ESM
* CommonJS
* Browser IIFE

## ⚡ Tree-Shaking

Import only the functions you need.

## 📦 Zero Runtime Dependencies

The package has no production dependencies.

---

# Installation

Install using npm:

```bash
npm install khmer-money-formatter
```

Using pnpm:

```bash
pnpm add khmer-money-formatter
```

Using yarn:

```bash
yarn add khmer-money-formatter
```

Using Bun:

```bash
bun add khmer-money-formatter
```

---

# Quick Start

Import the formatter:

```ts
import { formatKHR } from "khmer-money-formatter";
```

Format a number:

```ts
const price = formatKHR(10000);

console.log(price);
```

Output:

```text
10,000 ៛
```

Parsing:

```ts
import { parseKHR } from "khmer-money-formatter";

const value = parseKHR("10,000 ៛");

console.log(value);
```

Output:

```text
10000
```

---

# Money Formatting

The main function is:

```ts
formatKHR(value, options?)
```

Basic example:

```ts
formatKHR(1000);
```

Result:

```text
1,000 ៛
```

Large number:

```ts
formatKHR(1234567);
```

Result:

```text
1,234,567 ៛
```

Decimal:

```ts
formatKHR(1234567.5, {
  decimals: 2
});
```

Result:

```text
1,234,567.50 ៛
```

---

# Formatting Options

The formatter supports:

```ts
interface MoneyFormatOptions {
  symbol?: boolean;
  currency?: string;
  decimals?: number;
  separator?: string;
  decimalSeparator?: string;
  currencyPosition?: "prefix" | "suffix";
  khmerDigits?: boolean;
  empty?: string;
}
```

Default configuration:

```ts
{
  symbol: true,
  currency: "៛",
  decimals: 0,
  separator: ",",
  decimalSeparator: ".",
  currencyPosition: "suffix",
  khmerDigits: false,
  empty: "0"
}
```

---

# Without Currency Symbol

```ts
formatKHR(50000, {
  symbol: false
});
```

Result:

```text
50,000
```

This is useful when the currency is displayed separately.

Example:

```ts
const amount = formatKHR(50000, {
  symbol: false
});

console.log(amount);
```

---

# Custom Currency Symbol

You can replace the default `៛` symbol.

```ts
formatKHR(50000, {
  currency: "KHR"
});
```

Result:

```text
50,000 KHR
```

Another example:

```ts
formatKHR(50000, {
  currency: "Riel"
});
```

Result:

```text
50,000 Riel
```

---

# Currency Position

## Suffix

Default:

```ts
formatKHR(1000, {
  currencyPosition: "suffix"
});
```

Result:

```text
1,000 ៛
```

## Prefix

```ts
formatKHR(1000, {
  currencyPosition: "prefix"
});
```

Result:

```text
៛1,000
```

---

# Decimal Places

## No decimals

```ts
formatKHR(1000, {
  decimals: 0
});
```

Result:

```text
1,000 ៛
```

## Two decimals

```ts
formatKHR(1000.5, {
  decimals: 2
});
```

Result:

```text
1,000.50 ៛
```

## Three decimals

```ts
formatKHR(1000.567, {
  decimals: 3
});
```

Result:

```text
1,000.567 ៛
```

---

# Rounding

The formatter uses JavaScript number rounding through `toFixed()`.

```ts
formatKHR(1000.567, {
  decimals: 2
});
```

Result:

```text
1,000.57 ៛
```

Another example:

```ts
formatKHR(1234.564, {
  decimals: 2
});
```

Result:

```text
1,234.56 ៛
```

---

# Custom Separators

Default:

```ts
formatKHR(1234567.89, {
  decimals: 2
});
```

Result:

```text
1,234,567.89 ៛
```

You can change the separators:

```ts
formatKHR(1234567.89, {
  decimals: 2,
  separator: ".",
  decimalSeparator: ","
});
```

Result:

```text
1.234.567,89 ៛
```

---

# Negative Values

Negative values are supported.

```ts
formatKHR(-5000);
```

Result:

```text
-5,000 ៛
```

With decimals:

```ts
formatKHR(-5000.5, {
  decimals: 2
});
```

Result:

```text
-5,000.50 ៛
```

---

# Null and Empty Values

The formatter safely handles common application values.

```ts
formatKHR(0);
// "0 ៛"

formatKHR(null);
// "0 ៛"

formatKHR(undefined);
// "0 ៛"

formatKHR("");
// "0 ៛"
```

You can customize empty output:

```ts
formatKHR(null, {
  empty: ""
});
```

Result:

```text
""
```

---

# Input Formatting

Use `formatKHRInput()` when you need to format values inside an HTML input.

```ts
import { formatKHRInput } from "khmer-money-formatter";

formatKHRInput("10000");
```

Result:

```text
10,000
```

Unlike `formatKHR()`, this function does not add the currency symbol.

This makes it useful for:

* POS
* Invoice forms
* Payment forms
* Accounting forms
* Quantity fields
* Price inputs

Example:

```html
<input
  type="text"
  class="money"
  value="10000"
/>
```

---

# Parsing Money

Use `parseKHR()` to convert formatted money back into a JavaScript number.

```ts
parseKHR("1,000 ៛");
```

Result:

```text
1000
```

Large values:

```ts
parseKHR("1,234,567 ៛");
```

Result:

```text
1234567
```

Decimal:

```ts
parseKHR("1,234,567.50 ៛");
```

Result:

```text
1234567.5
```

---

# Supported Money Input

`parseKHR()` supports multiple formats.

```ts
parseKHR("៛ 10,000");
// 10000
```

```ts
parseKHR("10,000៛");
// 10000
```

```ts
parseKHR("10,000 ៛");
// 10000
```

```ts
parseKHR("10,000");
// 10000
```

Khmer currency name:

```ts
parseKHR("10,000 រៀល");
// 10000
```

---

# Generic Number Formatting

Use `formatNumber()` when you do not want currency formatting.

```ts
import { formatNumber } from "khmer-money-formatter";

formatNumber(1234567);
```

Result:

```text
1,234,567
```

With decimals:

```ts
formatNumber(1234567.89, {
  decimals: 2
});
```

Result:

```text
1,234,567.89
```

---

# Generic Number Parsing

```ts
import { parseNumber } from "khmer-money-formatter";

parseNumber("1,234,567");
```

Result:

```text
1234567
```

Decimal:

```ts
parseNumber("1,234.50");
```

Result:

```text
1234.5
```

---

# Khmer Digit Support

The package supports conversion between Arabic and Khmer numerals.

## Arabic to Khmer

```ts
import { toKhmerNumber } from "khmer-money-formatter";

toKhmerNumber(123456);
```

Result:

```text
១២៣៤៥៦
```

With separators:

```ts
toKhmerNumber("123,456.78");
```

Result:

```text
១២៣,៤៥៦.៧៨
```

---

# Khmer to Arabic

```ts
import { fromKhmerNumber } from "khmer-money-formatter";

fromKhmerNumber("១២៣,៤៥៦");
```

Result:

```text
123456
```

Decimal:

```ts
fromKhmerNumber("១២៣.៥");
```

Result:

```text
123.5
```

---

# Khmer Digits in Money

Enable Khmer digits using:

```ts
formatKHR(123456, {
  khmerDigits: true
});
```

Result:

```text
១២៣,៤៥៦ ៛
```

With decimals:

```ts
formatKHR(123456.5, {
  decimals: 2,
  khmerDigits: true
});
```

Result:

```text
១២៣,៤៥៦.៥០ ៛
```

---

# Number to Khmer Text

The package can convert numeric values into Khmer words.

```ts
import {
  numberToKhmerText
} from "khmer-money-formatter";

numberToKhmerText(1);
```

Result:

```text
មួយ
```

Other examples:

```ts
numberToKhmerText(5);
// "ប្រាំ"
```

```ts
numberToKhmerText(10);
// "ដប់"
```

```ts
numberToKhmerText(11);
// "ដប់មួយ"
```

```ts
numberToKhmerText(20);
// "ម្ភៃ"
```

```ts
numberToKhmerText(21);
// "ម្ភៃមួយ"
```

```ts
numberToKhmerText(100);
// "មួយរយ"
```

```ts
numberToKhmerText(101);
// "មួយរយមួយ"
```

```ts
numberToKhmerText(1000);
// "មួយពាន់"
```

```ts
numberToKhmerText(1000000);
// "មួយលាន"
```

This is useful for:

* Khmer invoices
* Receipts
* Payment documents
* Accounting systems
* Contracts
* Financial documents

---

# Decimal Number to Khmer Text

Use `decimalToKhmerText()` for decimal values.

```ts
import {
  decimalToKhmerText
} from "khmer-money-formatter";

decimalToKhmerText(123.45);
```

Result:

```text
មួយរយម្ភៃបីចុចបួនប្រាំ
```

---

# Long Khmer Currency

Use `formatKHRLong()` to display the Khmer currency name.

```ts
import {
  formatKHRLong
} from "khmer-money-formatter";

formatKHRLong(1000);
```

Result:

```text
1,000 រៀល
```

With Khmer digits:

```ts
formatKHRLong(1000, {
  khmer: true
});
```

Result:

```text
១,០០០ រៀល
```

---

# Money to Khmer Text

For invoice and receipt applications, you can combine money formatting and Khmer text.

Example:

```ts
const amount = 10000;

const formatted = formatKHR(amount);

const text = numberToKhmerText(amount);

console.log(formatted);
console.log(text);
```

Output:

```text
10,000 ៛
មួយម៉ឺន
```

A receipt could display:

```text
ចំនួនទឹកប្រាក់: 10,000 ៛

ជាអក្សរ: មួយម៉ឺនរៀល
```

---

# Validation

Use `isValidMoney()` to check whether a value is a valid money value.

```ts
import {
  isValidMoney
} from "khmer-money-formatter";

isValidMoney("10,000");
```

Result:

```text
true
```

Currency:

```ts
isValidMoney("10,000 ៛");
// true
```

Khmer digits:

```ts
isValidMoney("១២៣,៤៥៦");
// true
```

Invalid:

```ts
isValidMoney("hello");
// false
```

Empty:

```ts
isValidMoney("");
// false
```

---

# TypeScript

The package is written in TypeScript and includes declaration files.

```ts
import {
  formatKHR,
  parseKHR,
  formatNumber,
  parseNumber,
  toKhmerNumber,
  fromKhmerNumber,
  numberToKhmerText,
  decimalToKhmerText,
  formatKHRLong,
  formatKHRInput,
  isValidMoney
} from "khmer-money-formatter";
```

---

# Type Definitions

## MoneyFormatOptions

```ts
export interface MoneyFormatOptions {
  symbol?: boolean;
  currency?: string;
  decimals?: number;
  separator?: string;
  decimalSeparator?: string;
  currencyPosition?: "prefix" | "suffix";
  khmerDigits?: boolean;
  empty?: string;
}
```

## NumberFormatOptions

```ts
export interface NumberFormatOptions {
  decimals?: number;
  separator?: string;
  decimalSeparator?: string;
  khmerDigits?: boolean;
  empty?: string;
}
```

---

# Browser Usage

The package provides an IIFE browser build.

```html
<script src="./dist/index.iife.js"></script>
```

The global object is:

```js
KhmerMoneyFormatter
```

Example:

```html
<script>
  const price =
    KhmerMoneyFormatter.formatKHR(50000);

  console.log(price);
</script>
```

Result:

```text
50,000 ៛
```

---

# Vanilla JavaScript

```js
import {
  formatKHR,
  parseKHR
} from "khmer-money-formatter";

const price = formatKHR(50000);

console.log(price);

const value = parseKHR(price);

console.log(value);
```

---

# jQuery

The package does not depend on jQuery, but it can easily be used with jQuery.

```ts
import {
  formatKHRInput
} from "khmer-money-formatter";

$(".money").on("input", function () {
  const value = $(this).val();

  $(this).val(formatKHRInput(value));
});
```

Example HTML:

```html
<input
  type="text"
  class="money"
  placeholder="Enter amount"
/>
```

If the user enters:

```text
10000
```

the input becomes:

```text
10,000
```

---

# React

```tsx
import {
  formatKHR
} from "khmer-money-formatter";

export default function Price() {
  const price = 50000;

  return (
    <span>
      {formatKHR(price)}
    </span>
  );
}
```

Result:

```text
50,000 ៛
```

---

# Next.js

The package can be used in Next.js applications.

```tsx
import {
  formatKHR
} from "khmer-money-formatter";

export default function ProductPrice() {
  const price = 125000;

  return (
    <div>
      {formatKHR(price)}
    </div>
  );
}
```

For a server component, normal imports can be used because the formatter does not require browser APIs.

---

# Vue

```vue
<script setup lang="ts">
import { formatKHR } from "khmer-money-formatter";

const price = 50000;
</script>

<template>
  <span>
    {{ formatKHR(price) }}
  </span>
</template>
```

---

# Nuxt

```ts
import {
  formatKHR
} from "khmer-money-formatter";

const price = formatKHR(50000);
```

---

# Node.js

## ESM

```ts
import {
  formatKHR
} from "khmer-money-formatter";

console.log(
  formatKHR(50000)
);
```

## CommonJS

```js
const {
  formatKHR
} = require("khmer-money-formatter");

console.log(
  formatKHR(50000)
);
```

---

# Express

```ts
import express from "express";
import {
  formatKHR
} from "khmer-money-formatter";

const app = express();

app.get("/price", (req, res) => {
  const price = 50000;

  res.json({
    amount: price,
    formatted: formatKHR(price)
  });
});

app.listen(3000);
```

Response:

```json
{
  "amount": 50000,
  "formatted": "50,000 ៛"
}
```

---

# NestJS

The package can be used directly inside services.

```ts
import {
  Injectable
} from "@nestjs/common";

import {
  formatKHR
} from "khmer-money-formatter";

@Injectable()
export class PaymentService {
  formatAmount(amount: number): string {
    return formatKHR(amount);
  }
}
```

---

# Laravel Blade

The package itself is JavaScript/TypeScript and does not require Laravel.

For frontend formatting with Vite:

```ts
import {
  formatKHR
} from "khmer-money-formatter";

window.formatKHR = formatKHR;
```

Then in Blade:

```blade
<span id="price"></span>

<script>
  document.getElementById("price").textContent =
    window.formatKHR(50000);
</script>
```

Result:

```text
50,000 ៛
```

For server-side PHP formatting, use PHP's own formatting logic. This package is intended for JavaScript/TypeScript applications and browser-side formatting.

---

# POS Example

A simple POS price input:

```html
<input
  id="price"
  type="text"
  value="0"
/>

<div>
  Total:
  <strong id="total"></strong>
</div>
```

TypeScript:

```ts
import {
  formatKHRInput,
  formatKHR,
  parseKHR
} from "khmer-money-formatter";

const priceInput =
  document.querySelector<HTMLInputElement>("#price");

const total =
  document.querySelector<HTMLElement>("#total");

priceInput?.addEventListener("input", () => {
  const value = priceInput.value;

  priceInput.value =
    formatKHRInput(value);

  const amount =
    parseKHR(priceInput.value);

  if (total) {
    total.textContent =
      formatKHR(amount);
  }
});
```

---

# Invoice Example

```ts
import {
  formatKHR,
  numberToKhmerText
} from "khmer-money-formatter";

const subtotal = 150000;
const tax = 15000;
const total = subtotal + tax;

console.log(
  `Subtotal: ${formatKHR(subtotal)}`
);

console.log(
  `Tax: ${formatKHR(tax)}`
);

console.log(
  `Total: ${formatKHR(total)}`
);

console.log(
  `In words: ${numberToKhmerText(total)}`
);
```

Example output:

```text
Subtotal: 150,000 ៛
Tax: 15,000 ៛
Total: 165,000 ៛
In words: ...
```

---

# API Reference

## `formatKHR()`

Format a value as Khmer Riel.

```ts
formatKHR(
  value: unknown,
  options?: MoneyFormatOptions
): string;
```

Example:

```ts
formatKHR(10000);
// "10,000 ៛"
```

---

## `formatKHRInput()`

Format a number for an input field without a currency symbol.

```ts
formatKHRInput(
  value: unknown,
  options?: NumberFormatOptions
): string;
```

Example:

```ts
formatKHRInput("10000");
// "10,000"
```

---

## `formatKHRLong()`

Format a value using the Khmer currency name.

```ts
formatKHRLong(
  value: unknown,
  options?: MoneyFormatOptions & {
    khmer?: boolean;
  }
): string;
```

Example:

```ts
formatKHRLong(1000);
// "1,000 រៀល"
```

---

## `parseKHR()`

Parse a formatted Khmer money value.

```ts
parseKHR(
  value: unknown
): number;
```

Example:

```ts
parseKHR("10,000 ៛");
// 10000
```

---

## `formatNumber()`

Generic number formatter.

```ts
formatNumber(
  value: unknown,
  options?: NumberFormatOptions
): string;
```

---

## `parseNumber()`

Generic number parser.

```ts
parseNumber(
  value: unknown
): number;
```

---

## `toKhmerNumber()`

Convert Arabic numerals to Khmer numerals.

```ts
toKhmerNumber(
  value: number | string
): string;
```

Example:

```ts
toKhmerNumber(123456);
// "១២៣៤៥៦"
```

---

## `fromKhmerNumber()`

Convert Khmer numerals to JavaScript numbers.

```ts
fromKhmerNumber(
  value: string
): number;
```

Example:

```ts
fromKhmerNumber("១២៣,៤៥៦");
// 123456
```

---

## `numberToKhmerText()`

Convert an integer number into Khmer words.

```ts
numberToKhmerText(
  value: number | string
): string;
```

Example:

```ts
numberToKhmerText(123);
// "មួយរយម្ភៃបី"
```

---

## `decimalToKhmerText()`

Convert a decimal number into Khmer text.

```ts
decimalToKhmerText(
  value: number | string
): string;
```

Example:

```ts
decimalToKhmerText(123.45);
```

---

## `isValidMoney()`

Validate a money value.

```ts
isValidMoney(
  value: unknown
): boolean;
```

Example:

```ts
isValidMoney("10,000");
// true
```

---

# Tree Shaking

The package uses named exports.

You can import only what you need:

```ts
import {
  formatKHR
} from "khmer-money-formatter";
```

Or:

```ts
import {
  parseKHR
} from "khmer-money-formatter";
```

This allows modern bundlers to remove unused exports.

Supported bundlers include:

* Vite
* Rollup
* Webpack
* esbuild
* tsup
* Next.js
* Nuxt

---

# Module Formats

The package provides:

```text
dist/
├── index.js
├── index.cjs
├── index.iife.js
└── index.d.ts
```

## ESM

```ts
import {
  formatKHR
} from "khmer-money-formatter";
```

## CommonJS

```js
const {
  formatKHR
} = require("khmer-money-formatter");
```

## Browser

```html
<script src="dist/index.iife.js"></script>
```

Then:

```js
KhmerMoneyFormatter.formatKHR(50000);
```

---

# Framework Independence

The package does not depend on:

* React
* Vue
* Angular
* Next.js
* Nuxt
* jQuery
* Laravel
* Express
* NestJS
* Node.js APIs

It uses standard JavaScript/TypeScript functionality.

Therefore it can be used in:

```text
Browser
    ↓
JavaScript
    ↓
TypeScript
    ↓
React
    ↓
Next.js
    ↓
Vue
    ↓
Nuxt
    ↓
Node.js
    ↓
Express
    ↓
NestJS
    ↓
Laravel Blade
```

---

# Dependency Free

Runtime dependencies:

```json
{
  "dependencies": {}
}
```

The package does not require external libraries to perform formatting.

Development dependencies are used only for:

* TypeScript
* Vitest
* tsup

---

# Security

The package is designed to have a minimal attack surface.

It:

* Does not use `eval()`.
* Does not use `new Function()`.
* Does not execute downloaded code.
* Does not make network requests.
* Does not collect analytics.
* Does not collect personal information.
* Does not store passwords.
* Does not communicate with payment gateways.
* Has no runtime dependencies.

See:

```text
SECURITY.md
```

for the complete security policy.

---

# Testing

The project uses Vitest.

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run TypeScript validation:

```bash
npm run typecheck
```

Run the complete check:

```bash
npm run check
```

The test suite covers:

* Integer values
* Decimal values
* Zero
* Negative values
* Null
* Undefined
* Empty values
* Large numbers
* Rounding
* Custom separators
* Currency symbols
* Prefix/suffix
* Khmer digits
* Khmer text conversion
* Parsing
* Validation
* Invalid values

---

# Building

Build the package:

```bash
npm run build
```

The output will be generated in:

```text
dist/
```

Expected files:

```text
dist/
├── index.js
├── index.cjs
├── index.iife.js
├── index.d.ts
└── source maps
```

---

# Development

Clone the repository:

```bash
git clone https://github.com/chamnan-dev/khmer-money-formatter.git
```

Enter the directory:

```bash
cd khmer-money-formatter
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Type check:

```bash
npm run typecheck
```

Build:

```bash
npm run build
```

Run all checks:

```bash
npm run check
```

---

# Project Structure

```text
khmer-money-formatter/
│
├── src/
│   ├── index.ts
│   ├── formatter.ts
│   ├── parser.ts
│   ├── number.ts
│   ├── khmer.ts
│   ├── khmer-text.ts
│   └── types.ts
│
├── tests/
│   ├── formatter.test.ts
│   ├── parser.test.ts
│   ├── number.test.ts
│   ├── khmer.test.ts
│   └── khmer-text.test.ts
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── publish.yml
│
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── vitest.config.ts
│
├── README.md
├── SECURITY.md
├── CHANGELOG.md
├── LICENSE
└── .gitignore
```

---

# Release and Publishing

The project uses GitHub Actions for automated npm publishing.

Create a new version:

```bash
npm version patch
```

Or:

```bash
npm version minor
```

Or:

```bash
npm version major
```

Push commits and tags:

```bash
git push origin main --follow-tags
```

The publishing workflow is triggered by version tags:

```text
v1.0.0
v1.0.1
v1.1.0
v2.0.0
```

The workflow:

```text
Git Tag
   ↓
GitHub Actions
   ↓
npm ci
   ↓
TypeScript Check
   ↓
Vitest
   ↓
Build
   ↓
npm publish
```

---

# npm Trusted Publishing

For npm publishing, GitHub Actions should use **npm Trusted Publishing / OIDC** where supported.

This avoids storing a long-lived npm access token in GitHub Actions.

The repository workflow should have:

```yaml
permissions:
  contents: read
  id-token: write
```

Publishing:

```bash
npm publish --access public
```

---

# Changelog

Release history is maintained in:

```text
CHANGELOG.md
```

Example:

```md
# Changelog

## [1.0.0] - 2026-08-21

### Added

- Khmer Riel formatter
- Khmer money parser
- Generic number formatter
- Generic number parser
- Khmer numeral conversion
- Number-to-Khmer-text conversion
- Khmer currency long format
- Money validation
- Input formatting
- ESM build
- CommonJS build
- Browser build
- TypeScript definitions
- GitHub Actions CI
- npm publishing
```

---

# FAQ

## Does this package support TypeScript?

Yes.

The package is written in TypeScript and includes `.d.ts` declaration files.

---

## Does it require jQuery?

No.

jQuery is not a dependency.

It can optionally be used together with jQuery.

---

## Does it work with React?

Yes.

It is framework independent and works with React.

---

## Does it work with Next.js?

Yes.

It can be used in both frontend and server-side code where appropriate.

---

## Does it work with Vue?

Yes.

---

## Does it work with Node.js?

Yes.

ESM and CommonJS builds are provided.

---

## Does it support Khmer digits?

Yes.

```ts
formatKHR(123456, {
  khmerDigits: true
});
```

Result:

```text
១២៣,៤៥៦ ៛
```

---

## Can it convert numbers into Khmer words?

Yes.

```ts
numberToKhmerText(123);
```

Result:

```text
មួយរយម្ភៃបី
```

---

## Does it support Khmer Riel?

Yes.

The default currency is:

```text
៛
```

and the long currency name is:

```text
រៀល
```

---

## Does it make API requests?

No.

The formatter is completely local.

---

## Does it collect user data?

No.

There is no analytics, tracking, or data collection.

---

## Does it have runtime dependencies?

No.

The package is dependency-free at runtime.

---

## Is it suitable for financial calculations?

The package is intended primarily for **formatting and parsing display values**.

For financial systems that require exact decimal arithmetic, use an appropriate decimal or integer-based monetary representation in your application's calculation layer rather than relying on JavaScript floating-point arithmetic.

For example, storing amounts as integer Riel:

```ts
const amountInRiel = 10000;
```

and formatting only for display:

```ts
formatKHR(amountInRiel);
```

---

# Contributing

Contributions are welcome.

Before submitting a pull request:

```bash
npm install
npm run check
npm run build
```

Please make sure:

* Tests pass.
* TypeScript passes.
* New functionality has tests.
* Public APIs are documented.
* Existing APIs remain backward compatible where possible.

---

# License

MIT License.

Copyright (c) 2026 Chamnan.

See [LICENSE](LICENSE) for the complete license text.

---

# Author

**Chamnan**

GitHub:

```text
https://github.com/chamnan-dev
```

---

# Final Example

The simplest usage:

```ts
import {
  formatKHR,
  parseKHR
} from "khmer-money-formatter";

const formatted = formatKHR(10000);

console.log(formatted);
// "10,000 ៛"

const amount = parseKHR(formatted);

console.log(amount);
// 10000
```

Khmer digits:

```ts
import {
  formatKHR,
  toKhmerNumber
} from "khmer-money-formatter";

console.log(
  toKhmerNumber(123456)
);

// "១២៣៤៥៦"

console.log(
  formatKHR(123456, {
    khmerDigits: true
  })
);

// "១២៣,៤៥៦ ៛"
```

Khmer text:

```ts
import {
  numberToKhmerText
} from "khmer-money-formatter";

console.log(
  numberToKhmerText(123)
);

// "មួយរយម្ភៃបី"
```

For a Khmer invoice:

```ts
import {
  formatKHR,
  numberToKhmerText
} from "khmer-money-formatter";

const total = 150000;

console.log(
  `Total: ${formatKHR(total)}`
);

console.log(
  `In words: ${numberToKhmerText(total)}`
);
```

The goal of **Khmer Money Formatter** is simple:

> **Small + Fast + Dependency-Free + TypeScript-first + Khmer-friendly + Framework-independent.**

🇰🇭 Built for Khmer developers and applications.
