# Security Policy

## Reporting a vulnerability

If you discover a security issue in Arca SDK (`@arcasdk/core`, `@arcasdk/pdf`), **do not** open a public GitHub issue.

Report it privately via [GitHub Security Advisories](https://github.com/ralcorta/arcasdk/security/advisories/new).

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

You can expect an acknowledgment within 48 hours, updates while we work on it, and credit in advisories unless you prefer anonymity.

## Supported versions

| Package | Version | Supported |
| ------- | ------- | --------- |
| `@arcasdk/core` | 1.x | Yes (current) |
| `@arcasdk/pdf` | 0.1.x | Yes (current) |
| `@arcasdk/core` | 0.3.x and earlier | No |
| `afip.ts` (legacy npm) | any | No — that package is not this repo’s current line |

## Credentials and secrets

- Never commit `.env`, certificates, or keys (`.crt`, `.key`, `.pem`)
- Keep homologation and production certificates separate
- Store certs and keys outside git (environment variables or a secret manager)

## Dependencies

CI runs `npm audit` on the production tree. Dependency bumps are reviewed manually; this repository does not use Dependabot.

## Compliance notes

- Talks to ARCA (ex AFIP) over TLS/SOAP
- Inputs are validated in the SDK before requests are built; fiscal totals and similar rules are enforced by ARCA, not fully pre-validated here
