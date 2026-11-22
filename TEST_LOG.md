# Test Log

Recorded: 2026-11-22

## Summary

All verified build, lint, unit, and Playwright checks passed.

## Build

Command: `npm run build`

- Status: Passed
- Next.js: 15.5.29
- Result: Production build compiled and exported successfully
- Static pages generated: 12
- Output: Static site exported to `out/`

## Lint

Command: `npm run lint`

- Status: Passed
- Result: No lint errors reported

## Unit and Component Tests

Command: `npm run test:unit`

- Status: Passed
- Test files: 2 passed
- Tests: 5 passed
- Coverage includes:
  - Known terminal commands
  - Unknown-command fallback
  - HTTPS profile URL validation
  - Terminal output rendering
  - Terminal clear behavior

## End-to-End Tests

Command: `npm run test:e2e`

- Status: Passed
- Test files: 1 passed
- Tests: 2 passed
- Browser: Chromium
- Coverage includes:
  - HTTP 200 homepage load
  - Page title and meta description checks
  - Canonical URL verification
  - No-index check
  - JSON-LD Person structured data validation
  - Initial semantic/no-script fallback content
  - Terminal interaction
  - Critical accessibility violations
  - Mobile viewport horizontal overflow at 375x812

## Complete Test Command

Command: `npm test`

- Status: Passed
- Unit/component stage: 5 tests passed
- Playwright stage: 2 tests passed

## Environment Notes

- Playwright Chromium initially could not launch because required Linux shared libraries were missing.
- Chromium system dependencies and browser binaries were installed before the passing E2E run.
