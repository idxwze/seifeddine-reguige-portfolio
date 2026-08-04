# Seifeddine Reguige Portfolio

Personal portfolio site — a single scrolling page in the Organic design language (warm cream/terracotta/sage palette, Caprasimo display type, rounded organic shapes).

Sections: Hero → About → Selected Work → Journey → Core Stack → Contact

Deployed at [seifeddine-reguige.vercel.app](https://seifeddine-reguige.vercel.app)

## Stack

- Next.js 14 App Router
- React 18 + TypeScript
- Tailwind CSS (Organic design-system tokens)
- Framer Motion (scroll reveal, intro animation, hover states)
- Vercel Analytics

## Project Structure

```text
app/                 routes, layout, metadata, global styles
components/
  layout/            Navbar, Footer
  sections/          Hero, About, Work, Journey, Stack, Contact
  custom-cursor.tsx  pointer-ring cursor (degrades on touch)
  intro-overlay.tsx  opening animation overlay
data/                all editable content as TypeScript files
lib/                 metadata helpers
public/
  files/             resume PDF
  images/            photos, logos, project covers
docs/
  design_handoff/    Organic design reference (not shipped to production)
```

## Where to Update Content

All copy and links live in `data/`:

| File | Controls |
|------|----------|
| `data/site.ts` | Name, email, GitHub/LinkedIn, hero tag, bio paragraphs, nav items, stats |
| `data/projects.ts` | `featuredProjects` array (4 Work section items) |
| `data/experience.ts` | `timelineNodes` (Journey section) |
| `data/skills.ts` | `organicSkillGroups` (Stack section) |

To swap assets:

- Portrait: replace `public/images/me.jpg`
- Resume: replace `public/files/Seifeddine-Reguige-Resume.pdf`
- Project covers: replace `public/images/optical-flow-reliability-cover.png` (others use icon placeholders until real screenshots are ready)

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # TypeScript check
npm run lint       # ESLint
npm run build      # production build
```

## Deployment

Push to `main` — Vercel auto-deploys via the GitHub integration.
