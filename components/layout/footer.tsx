import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "var(--space-4) var(--space-8)",
        borderTop: "1px solid var(--color-divider)",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "var(--space-2)",
        fontSize: 12,
        opacity: 0.6,
        color: "var(--color-text)",
      }}
    >
      <span>© 2026 {siteConfig.name}</span>
      <span>{siteConfig.location}</span>
    </footer>
  );
}
