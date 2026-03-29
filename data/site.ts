import type { NavItem, StatItem } from "@/data/types";

export const siteConfig = {
  name: "Seifeddine Reguige",
  location: "Ottawa, ON",
  title: "Software Developer",
  email: "sregu043@uottawa.ca",
  linkedin: "https://www.linkedin.com/in/seifeddine-reguige-4164bb251",
  url: "https://seifeddine-reguige.vercel.app",
  resumeHref: "/files/Seifeddine-Reguige-Resume.pdf",
  heroSubheadline: "Computer Science student focused on backend systems, data analysis, machine learning, and practical software delivery.",
  seoDescription:
    "Seifeddine Reguige is a University of Ottawa Computer Science student and software developer focused on backend systems, data analysis, machine learning, and practical technical execution."
};

export const navigationItems: NavItem[] = [
  { label: "Intro", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "Story", href: "#foundation" },
  { label: "Tools", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const heroStats: StatItem[] = [
  { value: "3", label: "Selected projects" },
  { value: "2", label: "University IT roles" },
  { value: "Java + Python + SQL", label: "Core tools" }
];
