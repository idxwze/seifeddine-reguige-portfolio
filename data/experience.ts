import type { ExperienceItem, TimelineNode } from "@/data/types";

/* ── Journey timeline — 3-node default, 6-node extended ─────────────── */
export const timelineNodes: TimelineNode[] = [
  {
    role: "BSc Computer Science",
    org: "University of Ottawa · CGPA 8.18/10",
    dates: "Jan 2023 – Aug 2026",
    logo: true,
  },
  {
    role: "IT Systems Developer",
    org: "Faculty of Health Sciences, uOttawa",
    dates: "Oct 2024 – Apr 2025",
    logo: true,
  },
  {
    role: "Research Assistant / Data Scientist",
    org: "Faculty of Social Sciences, uOttawa",
    dates: "Summer 2026 – Present",
    logo: true,
  },
];

/* Extended timeline (all roles — can be toggled via UI if desired) */
export const timelineNodesExtended: TimelineNode[] = [
  {
    role: "BSc Computer Science",
    org: "University of Ottawa · CGPA 8.18/10",
    dates: "Jan 2023 – Aug 2026",
    logo: true,
  },
  {
    role: "Volunteer Math & CS Tutor",
    org: "Independent",
    dates: "Sept 2024 – Present",
    logo: false,
  },
  {
    role: "IT Systems Developer",
    org: "Faculty of Health Sciences, uOttawa",
    dates: "Oct 2024 – Apr 2025",
    logo: true,
  },
  {
    role: "IT Support",
    org: "Adapted Exams Centre, uOttawa",
    dates: "Sept 2025 – Mar 2026",
    logo: true,
  },
  {
    role: "Exam Proctor",
    org: "Adapted Exams Centre, uOttawa",
    dates: "Jan 2026 – Present",
    logo: true,
  },
  {
    role: "Research Assistant / Data Scientist",
    org: "Faculty of Social Sciences, uOttawa",
    dates: "Summer 2026 – Present",
    logo: true,
  },
];

/* ── Full experience detail (for any future detail sections) ─────────── */
export const experienceItems: ExperienceItem[] = [
  {
    role: "Research Assistant / Data Scientist",
    organization: "Faculty of Social Sciences, University of Ottawa",
    dates: "Summer 2026 – Present",
    summary:
      "Building secure digital research infrastructure for sensitive public health and policy data at the Faculty of Social Sciences.",
    bullets: [
      "Contributing to the development of a secure digital research infrastructure for sensitive public health and policy research data, supporting collection, organization, analysis, and controlled data management workflows.",
      "Supporting legacy data migration and dataset structuring through CSV exports, data cleaning, normalization, metadata documentation, quality validation, and preparation of analysis-ready datasets.",
      "Collaborating with researchers, technical staff, and infrastructure teams to define data models, document variables, organize scholarly resources, and support future relational database integration.",
      "Applying computer science and data science practices to improve data governance, secure storage, research documentation, and future analysis and visualization workflows.",
    ],
  },
  {
    role: "IT Systems Developer",
    organization: "Faculty of Health Sciences, University of Ottawa",
    dates: "Oct 2024 – Apr 2025",
    summary:
      "Developed and maintained web-based systems and data-driven interfaces for university faculty platforms.",
    bullets: [
      "Developed and maintained web-based systems using Java, PHP, JavaScript, HTML, and CSS for faculty platforms serving 10,000+ monthly users.",
      "Worked with backend logic, API integrations, and structured data processing to support research and operational workflows.",
      "Built and refined responsive interfaces for presenting healthcare and research information.",
      "Optimized front-end performance through JavaScript refactoring and debugging.",
    ],
  },
  {
    role: "IT Support",
    organization: "Adapted Exams Centre, University of Ottawa",
    dates: "Sept 2025 – Mar 2026",
    summary:
      "Resolved technical issues across exam centre workstations and maintained secure, stable exam environments.",
    bullets: [
      "Resolved 95% of technical issues across 100+ Linux/Windows workstations (OS failures, network outages, misconfigurations, account issues).",
      "Performed system hardening, environment validation, and pre-exam reliability checks to ensure secure and stable operation.",
      "Troubleshot DNS/DHCP issues, routing problems, corrupted profiles, and unauthorized processes.",
      "Created documentation covering incident procedures, baseline configurations, and system workflows.",
    ],
  },
];
