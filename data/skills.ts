import type { SkillGroup, SkillGroupOrganic } from "@/data/types";

/* ── Organic design — 5 groups for the Stack section ────────────────── */
export const organicSkillGroups: SkillGroupOrganic[] = [
  {
    title: "Languages",
    tagClass: "tag-accent",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "PHP", "GoLang", "Prolog", "Scheme", "Bash"],
  },
  {
    title: "Frontend, Mobile & UI/UX",
    tagClass: "tag-accent-2",
    items: ["React Native", "Expo", "Android Studio", "Responsive & accessible UI", "Wireframing & prototyping", "Usability heuristics"],
  },
  {
    title: "Backend & Databases",
    tagClass: "tag-neutral",
    items: ["REST APIs", "Supabase (Postgres, RLS, Auth)", "Firebase", "SQLite", "Relational data modeling", "ETL pipelines"],
  },
  {
    title: "ML & Data Science",
    tagClass: "tag-accent",
    items: ["Pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow", "OpenCV", "XGBoost", "Regression & clustering"],
  },
  {
    title: "Tools & Practices",
    tagClass: "tag-accent-2",
    items: ["Git", "GitHub Actions (CI/CD)", "Docker", "Kubernetes", "Streamlit", "Jupyter", "Linux/Unix", "Agile/Scrum"],
  },
];

/* ── Legacy — kept for backwards compatibility ───────────────────────── */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "PHP", "SQL", "Bash"],
  },
  {
    title: "Backend & Data",
    items: ["REST APIs", "Supabase", "SQLite", "Data Processing", "ETL Pipelines"],
  },
  {
    title: "Machine Learning",
    items: ["scikit-learn", "PyTorch", "TensorFlow", "Regression", "Clustering"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "Optical Flow", "RAFT", "Feature Engineering"],
  },
  {
    title: "Frontend & Mobile",
    items: ["HTML5", "CSS3", "React", "Android (Java)", "Responsive Design"],
  },
  {
    title: "Tools",
    items: ["Git", "Streamlit", "Docker", "Jupyter", "Linux/Unix"],
  },
];
