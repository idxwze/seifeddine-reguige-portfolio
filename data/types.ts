/* ── Nav / Stats ────────────────────────────────────────────────────── */
export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

/* ── Experience ─────────────────────────────────────────────────────── */
export interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  summary: string;
  bullets: string[];
}

/* ── Journey timeline (Organic section) ─────────────────────────────── */
export interface TimelineNode {
  role: string;
  org: string;
  dates: string;
  /** true = show uOttawa logo; false = show dot */
  logo: boolean;
}

/* ── Featured projects (Work section, 4 items) ───────────────────────── */
export type ProjectVisual = "photo" | "house" | "box" | "film";

export interface FeaturedProject {
  index: string;
  title: string;
  shortDescription: string;
  visual: ProjectVisual;
  repoHref: string;
  /** Only used when visual === "photo" */
  photoSrc?: string;
  photoAlt?: string;
}

/* ── Full project detail (for future detail pages) ───────────────────── */
export interface ProjectSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectMediaItem {
  src: string;
  alt: string;
  label: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  tags: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  status?: "In Progress" | "Planned / exploratory";
  heroEyebrow: string;
  sections: ProjectSection[];
  highlights?: string[];
  links?: ProjectLink[];
  supportingMedia?: ProjectMediaItem[];
}

/* ── Skills ──────────────────────────────────────────────────────────── */
export interface SkillGroup {
  title: string;
  items: string[];
}

export type TagClass = "tag-accent" | "tag-accent-2" | "tag-neutral";

export interface SkillGroupOrganic {
  title: string;
  tagClass: TagClass;
  items: string[];
}
