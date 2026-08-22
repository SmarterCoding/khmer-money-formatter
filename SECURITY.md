# Security Policy

## Supported Versions

Security updates are provided for the latest maintained release.

| Version | Supported |
| ------- | --------- |
| 1.x     | Yes       |
| < 1.0   | No        |

## Reporting a Vulnerability

If you discover a security vulnerability, please do not create a public GitHub issue.

Instead, report the vulnerability privately through the repository's security reporting mechanism.

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Affected version
- Suggested mitigation, if available

## Security Design

Khmer Money Formatter is designed to have a minimal runtime attack surface.

The package:

- Does not use `eval()`.
- Does not use `new Function()`.
- Does not execute external code.
- Does not make network requests.
- Does not collect analytics.
- Does not collect personal information.
- Does not store user data.
- Does not communicate with external services.
- Has no runtime dependencies.

## Financial Data

This library is a formatting and parsing utility.

Applications should implement their own secure financial calculation, authorization, authentication, and database security controls.

For exact financial calculations, applications should prefer integer-based monetary values or a suitable decimal arithmetic implementation rather than JavaScript floating-point arithmetic.