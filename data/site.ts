import type { NavItem, StatItem } from "@/data/types";

export const siteConfig = {
  name: "Seifeddine Reguige",
  location: "Ottawa, ON",
  title: "Backend & Data/ML Software Developer",
  email: "sregu043@uottawa.ca",
  linkedin: "https://www.linkedin.com/in/seifeddine-reguige-4164bb251",
  url: "https://seifeddine-reguige.vercel.app",
  resumeHref: "/files/Seifeddine-Reguige-Resume.pdf",
  heroSubheadline:
    "I build practical software systems with a backend-first mindset, using data, ML, and clear engineering fundamentals to turn messy technical problems into usable tools.",
  seoDescription:
    "Seifeddine Reguige is a University of Ottawa Computer Science student focused on backend systems, data analysis, machine learning, computer vision, and practical software delivery."
};

export const navigationItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#foundation" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const heroStats: StatItem[] = [
  { value: "2026", label: "Expected graduation" },
  { value: "2", label: "University IT roles" },
  { value: "ML + Backend", label: "Project focus" }
];
