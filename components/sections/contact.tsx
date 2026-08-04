"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 } as const,
};

const DownloadIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
  </svg>
);
const MailIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x={2} y={4} width={20} height={16} rx={3} /><path d="m22 7-10 6L2 7" />
  </svg>
);

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
  fontSize: 14,
  color: "var(--color-bg)",
  background: "var(--color-accent)",
  border: "1px solid transparent",
  borderRadius: 999,
  padding: "var(--space-3) var(--space-4)",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 0.15s ease",
};
const btnSecondary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
  fontSize: 14,
  color: "var(--color-text)",
  background: "transparent",
  border: "1px solid var(--color-divider)",
  borderRadius: 999,
  padding: "var(--space-3) var(--space-4)",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 0.15s ease",
};
const btnGhost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
  fontSize: 14,
  color: "var(--color-accent)",
  background: "transparent",
  border: "1px solid transparent",
  borderRadius: 999,
  padding: "var(--space-3) var(--space-4)",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background 0.15s ease",
};

export function ContactSection() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      {...(reducedMotion ? {} : scrollReveal)}
      style={{
        position: "relative",
        overflow: "hidden",
        maxWidth: 1240,
        margin: "var(--space-8) auto calc(var(--space-8) * 2)",
        padding: "calc(var(--space-8) * 1.4) var(--space-8)",
      }}
    >
      {/* Floating sage circle */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -100,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "var(--color-accent-2-200)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
            marginBottom: "var(--space-2)",
          }}
        >
          Contact
        </p>

        <h2 style={{ fontSize: 52, maxWidth: 640 }}>
          Let&apos;s build something reliable together.
        </h2>

        <p
          style={{
            fontSize: 16,
            maxWidth: 520,
            opacity: 0.8,
            marginTop: "var(--space-3)",
          }}
        >
          Open to backend, systems, and applied ML roles and collaborations. Reach
          out by email or connect on LinkedIn.
        </p>

        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginTop: "var(--space-6)",
          }}
        >
          <a
            href={`mailto:${siteConfig.email}`}
            style={btnPrimary}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-600)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)")}
          >
            <MailIcon />
            {siteConfig.email}
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={btnSecondary}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(32,30,29,0.07)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
          >
            LinkedIn
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            style={btnSecondary}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(32,30,29,0.07)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
          >
            GitHub
          </a>

          <a
            href={siteConfig.resumeHref}
            download
            style={btnGhost}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(198,113,57,0.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}
