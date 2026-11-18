# Ashraful Islam Tanzil Portfolio

A recruiter-first Next.js portfolio for AI/ML research and software engineering work.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/PORTFOLIO2/`.

## Updating content

Portfolio content is typed and kept under `src/data/`:

- Edit `src/data/profile.ts` for name, headline, biography, location, and availability.
- Edit `src/data/links.ts` for contact, social, project, and artifact URLs.
- Edit `src/data/projects.ts` for project cards and status labels.
- Edit `src/data/research.ts` for case-study narratives and artifact links.
- Edit `src/data/education.ts` for education and `src/data/skills.ts` for grouped skills.
- Edit case-study layouts in `src/app/work/[slug]/page.tsx` only when presentation changes.

Add project figures under `public/` with descriptive alt text. Do not add unverified metrics, respondent-level data, credentials, or large datasets/model weights.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run cv
npm run check:links
npm run build
```

The production build generates `public/cv.pdf` and exports a static site to `out/`.

## Deployment

Pushing verified changes to `main` triggers `.github/workflows/deploy.yml`, which deploys the static export to GitHub Pages at `https://ai-tanzil811.github.io/PORTFOLIO2/`.
