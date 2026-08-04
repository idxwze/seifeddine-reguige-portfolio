# Handoff: Portfolio Redesign (Seifeddine Reguige)

## Overview
A full visual redesign of the personal portfolio at `seifeddine-reguige.vercel.app`, in the "Organic" design language (warm cream/terracotta/sage, Caprasimo display type, rounded organic shapes). Single scrolling page: Hero, About, Selected Work, Journey (education + experience), Core Stack, Contact.

## About the Design Files
`Portfolio.dc.html` is a **design reference prototype**, not production code — it runs on a proprietary component runtime (custom `{{ }}` template syntax, `<sc-for>`/`<sc-if>` control flow) that does not exist outside this tool. **Do not copy its markup verbatim.** The task is to recreate this design's look, layout, and interactions inside the existing Next.js/TypeScript/Tailwind codebase (`seifeddine-reguige-portfolio`), using its existing component structure (`components/sections/`, `components/ui/`, `data/*.ts`) rather than introducing a new stack. Open the HTML file in a browser to see it render, and use screenshots (ask me to generate them if useful) alongside this README as the source of truth for values.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interactions below are final — implement pixel-close, not just "inspired by."

## Design Tokens (Organic system — also in `organic-styles.css`)
- **Background:** `#f5ead8` (cream) — surface/card background: `#ebddc5`
- **Text:** `#201e1d`
- **Accent (terracotta):** base `#c67139`; ramp 100→900: `#fff2eb #ffe1d0 #ffc6a5 #f6a06b #d67f48 #b2622d #8c491a #643312 #402310`
- **Accent-2 (sage):** base `#7a8a5e`; ramp 100→900: `#f0fae1 #e1eecc #ccdbb2 #aebf92 #8fa073 #728157 #56633f #3d472b #272e1b`
- **Neutral ramp:** `#f9f4ed #eee7db #dcd3c4 #c0b6a5 #a19786 #82796a #645c50 #474238 #2e2b25`
- **Divider:** black at 16% opacity
- **Heading font:** Caprasimo (400 only), body font: Figtree (400/600/700), both via Google Fonts
- **Radii:** sm 8px, md 16px, lg 28px (cards use ~32px); buttons/tags/inputs are fully pill (999px)
- **Shadows:** sm `0 1px 2px rgba(46,43,37,.14)`, md `0 3px 10px rgba(46,43,37,.16)`, lg `0 12px 32px rgba(46,43,37,.22)`
- **Spacing scale (px):** 4.4, 8.8, 13.2, 17.6, 26.4, 35.2 (roughly a 1.1x-densified 4px scale)

## Screens / Sections (all one page, `max-width: 1240px` centered container)

### 1. Nav (sticky top)
Sticky bar, translucent cream background + blur. Left: name as brand mark (Caprasimo, 18px). Right: text links "Work / Journey / Stack / Contact" + a pill primary button "Resume" (download icon + link to resume PDF).

### 2. Hero
- Full-bleed section, subtle diagonal hairline texture behind everything (two overlapping `repeating-linear-gradient`s at 135°/45°, ~35px pitch, accent/sage tinted at ~8-10% opacity) — evokes a technical/blueprint feel.
- Two large soft-edged circles (accent-200 and accent-2-200, ~55%/50% opacity) positioned off-canvas top-right and bottom-left, **floating** with a slow 7–9s alternate vertical bob (`translateY(0)` ↔ `translateY(-18px)`).
- Left column: pill tag "Computer Science @ uOttawa · Summer 2026 Grad" → H1 "Seifeddine Reguige" (74px, Caprasimo, line-height 1.02) → H2 "Backend, Data & Applied ML" (26px, accent-700) → paragraph (18px, 540px max-width): "I build practical software systems with a backend-first mindset, using data, ML, and clear engineering fundamentals to turn messy technical problems into usable tools." → CTA row (primary "Download resume", secondary "Get in touch" mailto) → icon-only LinkedIn/GitHub buttons → a 4-column stat strip (2026/Summer Grad, 8.18/CGPA out of 10, ×3/Dean's Honour List, 4/Featured projects).
- All hero text elements fade+slide up on load, staggered ~80ms apart (see Interactions).
- Right column: circular portrait (340px) with two **dashed** decorative rings around it (accent-300 and accent-2-300 borders) that continuously rotate slowly (22s and 30s, opposite directions) — see hover behavior below.

### 3. About
Surface-colored rounded panel. H2 "Currently building research data infrastructure at uOttawa". Two-column: left ~2/3 is 3 bio paragraphs (16px, line-height 1.7, verbatim voice from the person's LinkedIn/about text — see Portfolio.dc.html for exact copy); right ~1/3 is a stack of 3 small cards: "Based in — Ottawa, Ontario", "Languages — English & French, fluent", and a uOttawa-logo card "BSc Computer Science / Summer 2026 grad".

### 4. Selected Work
Section has a giant (160px Caprasimo) near-invisible watermark word "WORK" behind the heading (accent-100, very low contrast, decorative only). Below: **4 projects arranged in one horizontal row**, separated by thin 1px vertical divider lines (full column height), NOT a grid of cards. Each column: a large faded index numeral (01–04, Caprasimo, accent-200) behind a 170px circular visual, then project title (15px bold), a 1–2 line short description (12px, muted), then a "View repo" ghost link.
- Project 1 (Optical Flow Reliability Predictor) uses a real photo in the circle.
- Projects 2–4 (PropertyOps, PCSurMesure, Movie Recommender System) have no real screenshots — each uses a **flat-color circle with a simple line icon** standing in as a project mark: PropertyOps = house icon on sage-200 bg; PCSurMesure = box/package icon on terracotta-200 bg; Movie Recommender = clapperboard icon on neutral-200 bg. Icons are simple 2.75px-stroke outline glyphs (see SVG paths in the HTML file). Circles scale up slightly (1.06x) on hover.
- Copy (verbatim, keep as-is): see `Portfolio.dc.html`'s `projects` array in the logic script for exact titles/descriptions/repo links.

### 5. Journey (Education & Experience)
Watermark word "JOURNEY" (accent-2-100) behind heading. A **minimal horizontal timeline**: a single thin horizontal divider line, with 3 nodes spaced evenly across it (Education → IT Systems Developer → Research Assistant, chronological). Each node: a 56px circle with a 2px accent-300 border containing the uOttawa logo (34px), then the date range (small caps label), role title (h5), and org name (muted, small). A toggle exists in the source (`extendedExperience`) that swaps in 3 more historical roles (Tutor, IT Support, Exam Proctor) — implement this as real data, not necessarily a UI toggle, unless you want to keep it as a "show more" control.

### 6. Core Stack
Surface panel, "Tools & technologies". Grid of 5 cards (auto-fit, min 260px), one per skill group (Languages / Frontend, Mobile & UI/UX / Backend & Databases / ML & Data Science / Tools & Practices), each a card with a small-caps kicker label and a wrapped row of pill tags. Tag color alternates by group between accent, accent-2, and neutral tag styles for rhythm (not per-item).

### 7. Contact
Decorative floating sage circle bottom-right. H2 52px: "Let's build something reliable together." One line of supporting copy. Row of 4 CTAs: primary mailto button (shows the email address as label), secondary LinkedIn, secondary GitHub, ghost "Resume" download.

### Footer
Simple line: "© 2026 Seifeddine Reguige" / "Ottawa, Ontario, Canada", divided by a top hairline.

## Interactions & Behavior
1. **Opening intro animation**: on first load, a full-viewport cream overlay shows a small rotating dashed ring, then the name (Caprasimo 52px) fades/slides up, then the tagline "Backend, Data & Applied ML" fades in ~300ms later; the whole overlay fades out and is removed from the accessibility tree (`visibility: hidden`) around 2.6s after load. Non-blocking (should not trap focus or prevent scrolling/interaction once it starts fading).
2. **Scroll reveal**: each major section (About, Work, Journey, Stack, Contact) starts at `opacity:0; translateY(24px)` and animates to `opacity:1; translateY(0)` (0.7s ease) the first time it's ~15% in viewport (IntersectionObserver, one-shot per section, no re-hide on scroll back up).
3. **Custom cursor**: default cursor is hidden; a small 20px ring follows the pointer (light lag is fine — direct 1:1 tracking is acceptable too). It grows to 46px and gets a soft accent tint fill when hovering any link/button/interactive element, and shrinks to 0.8x scale momentarily on mousedown (press feedback). This should degrade gracefully to a normal cursor on touch devices.
4. **Hero portrait hover**: hovering the portrait area scales the photo to 1.06x, and independently scales the two decorative rings around it up (to 1.18x and 1.3x) while they keep rotating — i.e. the rings should keep spinning continuously regardless of hover state, and hover only affects their scale/opacity, not their rotation.
5. **Project circle hover**: each project visual (photo or icon-circle) scales to 1.06x on hover.
6. All interactive elements need real `:hover`/`:active`/`:focus-visible` states per the existing Organic component classes (buttons, tags, inputs) — don't rely on browser defaults.

## State Management
Purely presentational — no forms, no async data. The only "state" is: intro-animation-played (can be a mount-time effect, doesn't need to persist), and whichever timeline dataset (short/extended) is chosen for the Journey section. Custom cursor position and hover states are transient UI state / refs, not app state.

## Assets
- `assets/me.jpg` — portrait photo, used with a desaturated "washed" filter (`saturate(.6) contrast(.85) brightness(1.1) opacity(.94)`) matching the Organic system's photo treatment.
- `assets/uottawa-logo.png` — University of Ottawa logo, used small (26–34px) in the About card and Journey timeline nodes.
- `assets/optical-flow-cover.png` — real cover image for the Optical Flow project circle.
- `assets/Seifeddine-Reguige-Resume.pdf` — the downloadable resume linked from Nav, Hero, and Contact.
- No screenshots exist yet for PropertyOps, PCSurMesure, or Movie Recommender — the icon-circle treatment above is the intended placeholder until real screenshots are supplied.

## Content source of truth
Full copy (bio paragraphs, all project descriptions, experience bullets, skills lists, resume-derived facts like CGPA 8.18/10 and Dean's Honour List ×3) lives in the `renderVals()` method inside `Portfolio.dc.html` — copy text verbatim from there into the codebase's `data/*.ts` files rather than re-writing it.

## Known placeholders to confirm with the client before shipping
- GitHub profile link is currently `https://github.com/` (unset).
- PropertyOps repo link (`github.com/idxwze/property-ops`) and PCSurMesure repo link (`github.com/idxwze/PCSurMesure`) are best-guess placeholders — confirm actual URLs.

## Files in this bundle
- `Portfolio.dc.html` — the full design reference (open in any browser)
- `organic-styles.css` — the design system's token/component stylesheet referenced above
- `assets/` — all images and the resume PDF used by the design
