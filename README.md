# Seifeddine Reguige Portfolio

This is my personal portfolio site. I designed it as a compact one-page experience with a dark cinematic visual style, strong motion, and a clean structure that is easy to maintain over time.

The site is intentionally focused:

- cinematic hero
- curated project grid with modal details
- combined education and experience section
- compact tech stack
- simple contact area

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
public/files/        public resume download
public/images/       portfolio imagery
```

## Where I Update Content

Most of the portfolio content lives in `data/`:

- `data/site.ts` for identity, links, navigation, and hero stats
- `data/education.ts` for education details
- `data/experience.ts` for experience entries
- `data/projects.ts` for project cards and modal content
- `data/skills.ts` for skill groups

To swap assets later:

- replace images in `public/images/`
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

Then open [http://localhost:3000](http://localhost:3000).

## Production

Create a production build:

```bash
npm run build
npm run start
```

## Deployment

This project is set up for Vercel out of the box.

To deploy:

1. Push the repository.
2. Import it into Vercel.
3. Use the default Next.js settings.
4. Deploy.

## Notes

- The portfolio is dark by default and includes a cinematic intro overlay.
- Project cards open in a modal to preserve the one-page flow.
- Some images are still placeholders and can be replaced later.
- The resume in `public/files/` is intentionally public and served as a downloadable asset.
- If I change dependencies and need to refresh the lockfile, I can run `npm install` again locally.
