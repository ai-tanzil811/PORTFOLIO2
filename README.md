# Ashraful Islam Tanzil Portfolio

This repository contains the portfolio website for Ashraful Islam Tanzil. It is built with Next.js and exported as static files for hosting on GitHub Pages or Cloudflare Workers Static Assets.

- Live site: https://aitanzil.me
- Repository: https://github.com/ai-tanzil811/PORTFOLIO2
- Framework: Next.js 15
- Styling: Tailwind CSS and project-specific CSS
- Testing: Vitest and Playwright

## Overview

The site is configured as a fully static Next.js export:

- `output: "export"` in `next.config.ts`
- Trailing slashes enabled
- Static output written to `out/`
- Generated CV written to `public/cv.pdf`
- Custom domain declared by `CNAME` and `public/CNAME`

The generated site can be served by GitHub Pages or by Cloudflare Workers Static Assets. It does not require a Node.js server or an OpenNext Worker bundle.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000/.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run cv` | Generate `public/cv.pdf` |
| `npm run build` | Generate the CV and create the static export in `out/` |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run lint` | Run ESLint |
| `npm run check:links` | Check URLs found in source and README files |
| `npm run test:unit` | Run Vitest unit and component tests |
| `npm run test:e2e` | Run Playwright end-to-end tests |
| `npm test` | Run unit and end-to-end test suites |

Before submitting a change, run:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Updating portfolio content

Portfolio content is stored in typed modules under `src/data/`:

| File | Purpose |
| --- | --- |
| `src/data/profile.ts` | Name, headline, biography, location, and availability |
| `src/data/links.ts` | Contact, social, project, and artifact URLs |
| `src/data/projects.ts` | Project cards and status labels |
| `src/data/research.ts` | Research summaries and case-study content |
| `src/data/education.ts` | Education history |
| `src/data/skills.ts` | Skill groups |

Case-study route presentation is defined in `src/app/work/[slug]/page.tsx`.

Add static images or documents to `public/`. Reference public assets with root-relative paths, such as `/icon.svg` or `/cv.pdf`, rather than repository or GitHub Pages subpaths.

Keep portfolio claims factual and avoid publishing unverified metrics, private respondent data, credentials, or large model weights.

## SEO and custom domain

The canonical site URL is https://aitanzil.me/.

The project maintains SEO configuration in:

- `src/app/layout.tsx` - metadata and JSON-LD
- `src/app/sitemap.ts` - generated sitemap entries
- `src/app/robots.ts` - robots rules
- `public/sitemap.xml` - static sitemap copy
- `public/robots.txt` - static robots copy
- `CNAME` and `public/CNAME` - custom domain binding

Both CNAME files must contain only:

```text
aitanzil.me
```

Do not prefix the custom domain with `http://`, `https://`, or a trailing slash.

## GitHub Pages deployment

Pushing verified changes to `main` triggers `.github/workflows/deploy.yml`.

The workflow:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Runs type checking and linting.
4. Runs `npm run build`.
5. Uploads `out/` as a GitHub Pages artifact.
6. Deploys the artifact to GitHub Pages.

GitHub Pages must be configured to deploy using GitHub Actions.

## Cloudflare Workers Static Assets deployment

This repository also includes [wrangler.jsonc](./wrangler.jsonc) for Cloudflare Workers Builds:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "portfolio2",
  "compatibility_date": "2026-11-22",
  "assets": {
    "directory": "./out"
  }
}
```

This configuration tells Wrangler to serve the existing static export in `out/`. It does not use a Worker script or OpenNext.

The Cloudflare Workers build settings are:

| Setting | Value |
| --- | --- |
| Root directory | `/` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Static assets directory | `./out`, declared by `wrangler.jsonc` |

Do not add `output: "standalone"`, an OpenNext configuration, or a `main` field for this static deployment. Those settings would change this project into a Worker application and are not required.

Validate the deployment configuration locally:

```bash
npm run build
npx wrangler deploy --dry-run
```

The dry run should report that Wrangler read files from `out/` and found no bindings.

## Cloudflare and DNS

When the custom domain is proxied through Cloudflare:

1. Configure the DNS record for `aitanzil.me` according to the Cloudflare dashboard.
2. Enable the orange-cloud proxy for the hostname.
3. Set SSL/TLS encryption mode to Full (strict).
4. Keep the canonical URLs and sitemap on HTTPS.
5. Use relative or root-relative asset paths without `/PORTFOLIO2/`.

Cloudflare status information belongs in the footer. Use the official Cloudflare product name and link to https://www.cloudflare.com; do not alter or recreate an official Cloudflare logo.

## Testing

The unit suite is provided by Vitest. The Playwright suite is under `tests/e2e/` and includes:

- Page title and canonical metadata checks
- Structured data validation
- Terminal interaction checks
- Mixed-content asset-request checks
- Mobile horizontal overflow checks
- Cloudflare footer link validation

For a local E2E run:

```bash
npx playwright install --with-deps chromium
npm run test:e2e
```

## Troubleshooting

### Wrangler runs OpenNext automatically

Confirm [wrangler.jsonc](./wrangler.jsonc) exists at the repository root and contains the `assets.directory: "./out"` entry. A missing Wrangler configuration can trigger interactive or automatic OpenNext setup.

### `pages-manifest.json` is missing

This error appears when an OpenNext/standalone configuration is applied to a static export. Restore the static assets configuration above and remove OpenNext or standalone deployment settings.

### A stale CV file is generated

`npm run build` regenerates `public/cv.pdf`. If the generated binary differs unexpectedly, verify `scripts/generate-cv.ts` and the source resume data before committing.
