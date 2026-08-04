# Design Brief — Seifeddine Reguige, Portfolio

## The job

One page. One job: convince a technical recruiter or hiring engineer, in under sixty seconds,
that this person builds real systems and should get an interview.

**Audience:** engineering hiring managers and technical recruiters in Ottawa and remote-friendly
Canadian companies — backend, infrastructure, data/ML, and security teams. Some will be
engineers who will judge the site itself as a work sample. Assume they are skimming on a
laptop with fifteen other tabs open.

**Timing:** graduating August 2026. The site needs to read as "available now," not "student
project."

## What the subject actually is

This is not a generic developer portfolio. The through-line across everything Seifeddine has
built is **making systems observable and predictable under real conditions**:

- Predicting when optical flow will fail *before* spending compute on it
- Diagnosing DNS, DHCP, and routing failures across 100+ workstations
- Building secure research data infrastructure with governance and validation baked in
- Comparing TSP heuristics by visualizing route quality rather than quoting a number
- Packet analysis, monitoring tooling, system hardening

The vernacular here is **instrumentation and measurement**: heatmaps, error curves, packet
captures, routing tables, validation passes, holdout evaluation. That's the material to
design from. A portfolio about someone who measures systems should look like an instrument,
not like a business card.

## Direction

Take a real position. The site should be recognizably his, not a template with his name in it.

**Explicitly avoid** the three looks that every AI-generated portfolio currently converges on:

1. Cream background (~#F4F1EA) + high-contrast serif display + terracotta accent (~#D97757)
2. Near-black background + one acid-green or vermilion accent
3. Broadsheet layout with hairline rules, zero border-radius, dense newspaper columns

Any of these would be a default rather than a choice. Spend the freedom elsewhere.

**Hero:** open with the most characteristic thing in his world, not a big name and a tagline.
Consider something derived from the actual work — an EPE heatmap, a route-optimization
animation, a live-ish system readout. Whatever it is, it should be real content, not decoration.

**Typography:** pick a display face with genuine personality and a body face that can carry
dense technical copy at small sizes. Set a real type scale. Monospace should appear where it
means something — metrics, tech tags, file paths — not sprinkled for flavor.

**Structure:** the four projects are not a sequence, so don't number them 01/02/03. They *are*
differentiable by domain (computer vision, recommender systems, mobile/backend, algorithms) —
if a structural device is used, encode that.

**Signature:** one memorable element, executed properly, with everything around it quiet.

**Motion:** deliberate and minimal. One orchestrated moment beats scattered effects. Scattered
hover animations are the fastest way to make a site read as AI-generated.

## Content requirements

- Every project needs its result stated plainly. The optical flow project has real numbers
  (R² ≈ 0.80, Spearman ≈ 0.85) — lead with those, they're more persuasive than adjectives.
- Tech tags per project, pulled from the content file.
- Experience section must include the current RA / Data Scientist role.
- Links out to GitHub repos on every project. A project without a repo link is a claim
  without evidence.
- Contact: email and LinkedIn at minimum.
- Bilingual (EN/FR) is a real differentiator in the Ottawa market — public sector and federal
  contractors care. Surface it somewhere, don't bury it in a skills list.

## Quality floor

Responsive to 375px. Visible keyboard focus. `prefers-reduced-motion` respected. Real alt text.
Lighthouse accessibility ≥ 95. Loads fast on a mid-range laptop — if the hero animation costs
two seconds of blocking time, it isn't worth it.

## Copy

Plain verbs, sentence case, no filler. Describe what things do rather than selling them.
"Predicts optical flow reliability from scene metadata before running the model" beats
"Leveraging cutting-edge ML to revolutionize computer vision workflows." Specific always
beats clever.
