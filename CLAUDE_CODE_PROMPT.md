# Prompt for Claude Code

Drop `PORTFOLIO_CONTENT.md` and `DESIGN_BRIEF.md` into the repo root first, then run `claude` in the
WebStorm terminal and paste the block below.

---

## Step 1 — Audit (paste this first, don't skip to building)

```
Read PORTFOLIO_CONTENT.md in the repo root. That file is the source of truth for every
piece of content on this site — bio, experience, projects, skills, education, links.

Before changing anything, audit the repo and report back:

1. Map the site. What framework, what routing, where content lives (hardcoded in
   components? a data/ directory? MDX? a CMS?), and how styling is done (Tailwind,
   CSS modules, styled-components, plain CSS).
2. Diff the site's current content against PORTFOLIO_CONTENT.md. List every mismatch:
   - roles or titles that are wrong, outdated, or missing entirely
   - projects present in the content file but missing from the site, and vice versa
   - skills, dates, links, and contact details that disagree
   - anything on the site that isn't in the content file at all (I need to decide
     whether it's stale or just undocumented)
3. Flag anything broken: dead links, missing images, console errors, unused
   components, dependencies that are badly out of date.
4. Tell me how the content is structured and whether it's worth refactoring content
   out of components into a single data file before we do the redesign.

Don't edit anything yet. Give me the audit and your recommended order of work.
```

## Step 2 — Content sync (after you've reviewed the audit)

```
Now sync the content. Use PORTFOLIO_CONTENT.md as the source of truth.

- Add the Research Assistant / Data Scientist role — it's my current position and it's
  missing from the site.
- Correct every title and date to match the content file. Note that "Web Administrator"
  is now "IT Systems Developer" and "Technical Assistant" is now "IT Support".
- Add any of the four projects that aren't already there, with the tech tags and the
  result metrics as written.
- Update the bio and skills sections.
- If content is currently hardcoded across components, extract it into a single
  typed data file first, then have the components read from it. I want one place to
  edit next time.

Leave the visual design alone in this pass — content only. Show me the diff before
committing.
```

## Step 3 — Redesign

```
Read DESIGN_BRIEF.md. Implement the redesign against it.

Work in two passes: propose the token system (palette, type scale, layout concept,
signature element) and let me react to it before you write component code. Once I
approve the direction, build it — deriving every color and type decision from the
approved tokens.

Requirements regardless of direction: responsive down to 375px, visible keyboard
focus states, prefers-reduced-motion respected, Lighthouse accessibility ≥ 95.
```

---

## Notes

- Run the steps separately. Handing Claude Code the audit, the content sync, and a full
  redesign in one message gets you a large unreviewable diff.
- Commit between steps so you can roll back the redesign without losing the content fixes.
- If the repo is a template you didn't write, say so in step 1 — it changes how aggressively
  it should refactor.
