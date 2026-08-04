import type { NavItem, StatItem } from "@/data/types";

export const siteConfig = {
  name: "Seifeddine Reguige",
  location: "Ottawa, Ontario, Canada",
  title: "Backend, Data & Applied ML",
  heroTag: "Computer Science @ uOttawa · Summer 2026 Grad",
  email: "seifeddine.reguige@icloud.com",
  linkedin: "https://www.linkedin.com/in/seifeddine-reguige-4164bb251",
  // NOTE: GitHub username inferred from project repo links (idxwze) — confirm if wrong
  github: "https://github.com/idxwze",
  url: "https://seifeddine-reguige.vercel.app",
  resumeHref: "/files/Seifeddine-Reguige-Resume.pdf",
  heroHeadline:
    "I build practical software systems with a backend-first mindset, using data, ML, and clear engineering fundamentals to turn messy technical problems into usable tools.",
  seoDescription:
    "Seifeddine Reguige is a University of Ottawa Computer Science student focused on backend systems, data analysis, machine learning, computer vision, and practical software delivery.",
  bioParagraphs: [
    "Computer Science student at the University of Ottawa, graduating August 2026, specializing in backend development, systems programming, networking, and applied machine learning. I enjoy breaking down complex technical problems, building reliable systems, and understanding how software and networks behave under real-world constraints.",
    "My experience spans Linux systems, backend engineering (Java, C++, Python), database design, network protocols, packet analysis, and cybersecurity tooling. I have built projects in C++, Java, Go, PHP, SQL, and Python, including recommender systems, computer vision pipelines, and Android applications.",
    "I currently work as a Research Assistant / Data Scientist with the Faculty of Social Sciences at uOttawa, contributing to a secure digital research infrastructure for sensitive public health and policy data.",
  ],
};

export const navigationItems: NavItem[] = [
  { label: "Work",    href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Stack",   href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: StatItem[] = [
  { value: "2026",  label: "Summer Grad" },
  { value: "8.18",  label: "CGPA / 10" },
  { value: "×3",    label: "Dean's Honour List" },
  { value: "4",     label: "Featured projects" },
];
