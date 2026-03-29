# Seifeddine Reguige Portfolio

Minimal one-page portfolio for Seifeddine Reguige, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

The current site is intentionally compact:

- cinematic hero
- curated project grid with modal details
- combined education and experience section
- compact tech stack
- simple contact CTA

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI primitives for dialog behavior
- `next-themes` for dark-mode support

## Project Structure

```text
app/                 routes, layout, metadata, global styles
components/          layout, sections, and reusable UI primitives
data/                editable portfolio content and TypeScript models
lib/                 utility helpers and metadata helpers
public/files/        resume download
public/images/       portfolio imagery
```

## Content Updates

Most portfolio content lives in `data/`:

- `data/site.ts` global identity, links, navigation, hero stats
- `data/education.ts` education card content
- `data/experience.ts` experience timeline content
- `data/projects.ts` project cards and modal content
- `data/skills.ts` grouped skill tags

To swap assets:

- replace portrait or project images in `public/images/`
- replace the resume file in `public/files/Seifeddine-Reguige-Resume.pdf`

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

Create a production build:

```bash
npm run build
npm run start
```

## Deployment

This project is ready for Vercel deployment out of the box.

For Vercel:

1. Import the repository.
2. Use the default Next.js settings.
3. Deploy.

## Notes

- The portfolio is dark by default and includes a polished intro overlay.
- Project cards open in a modal to preserve the one-page flow.
- Current images are placeholders and should be replaced with real project or portrait assets later.
- The resume in `public/files/` is intentionally public and served as a downloadable asset.
- If `package-lock.json` needs a full refresh after dependency changes, run `npm install` once locally.
