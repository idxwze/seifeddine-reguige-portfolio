"use client";

import { motion, useReducedMotion } from "framer-motion";
import { organicSkillGroups } from "@/data/skills";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 } as const,
};

const tagBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: 11,
  letterSpacing: "0.02em",
  padding: "3px 10px",
  borderRadius: 999,
};

export function StackSection() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="stack"
      {...(reducedMotion ? {} : scrollReveal)}
      style={{
        maxWidth: 1240,
        margin: "var(--space-8) auto",
        padding: "calc(var(--space-8) * 1.2) var(--space-8)",
        background: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--color-accent-700)",
          marginBottom: "var(--space-2)",
        }}
      >
        Core Stack
      </p>
      <h2 style={{ fontSize: 32, marginBottom: "var(--space-6)" }}>
        Tools &amp; technologies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        {organicSkillGroups.map((group) => (
          <div
            key={group.title}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              padding: "var(--space-3)",
              borderRadius: "calc(var(--radius-lg) * 1.15)",
              background: "var(--color-bg)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
              }}
            >
              {group.title}
            </span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "var(--space-1)" }}>
              {group.items.map((item) => (
                <span key={item} className={group.tagClass} style={tagBase}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
