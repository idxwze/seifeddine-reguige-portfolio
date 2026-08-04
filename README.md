# Seifeddine Reguige Portfolio

Personal portfolio site. Single scrolling page, deployed at [seifeddine-reguige.vercel.app](https://seifeddine-reguige.vercel.app).

Sections: Hero → About → Work → Journey → Stack → Contact

## Stack

- Next.js 14 App Router
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Vercel Analytics

## Project Structure

```
app/                routes, layout, metadata, global styles
components/
  layout/           Navbar, Footer
  sections/         Hero, About, Work, Journey, Stack, Contact
  custom-cursor.tsx pointer-ring cursor (degrades on touch)
  intro-overlay.tsx opening animation overlay
data/               all editable content as TypeScript files
lib/                metadata helpers
public/
  files/            resume PDF
  images/           photos, logos, project covers
```

## Content updates 

All copy and links live in `data/`:

| File | Controls |
|------|----------|
| `data/site.ts` | Name, email, GitHub/LinkedIn, bio, nav items, hero stats |
| `data/projects.ts` | Work section items (`featuredProjects` array) |
| `data/experience.ts` | Journey section timeline nodes |
| `data/skills.ts` | Stack section skill groups |

To swap assets:

- Portrait: replace `public/images/me.jpg`
- Resume: replace `public/files/Seifeddine-Reguige-Resume.pdf`
- Project covers: replace files under `public/images/`

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
