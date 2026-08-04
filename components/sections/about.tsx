"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 } as const,
};

export function AboutSection() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
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
        About
      </p>
      <h2 style={{ fontSize: 32, marginBottom: "var(--space-6)" }}>
        Currently building research data infrastructure at uOttawa
      </h2>

      <div style={{ display: "flex", gap: "var(--space-8)", flexWrap: "wrap" }}>
        {/* Bio — 2/3 */}
        <div style={{ flex: "2 1 460px", fontSize: 16, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {siteConfig.bioParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Info cards — 1/3 */}
        <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {/* Based in */}
          <div
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
            <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)" }}>
              Based in
            </span>
            <span style={{ fontFamily: "var(--font-caprasimo), system-ui", fontSize: 16 }}>
              Ottawa, Ontario
            </span>
          </div>

          {/* Languages */}
          <div
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
            <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)" }}>
              Languages
            </span>
            <span style={{ fontFamily: "var(--font-caprasimo), system-ui", fontSize: 16 }}>
              English &amp; French, fluent
            </span>
          </div>

          {/* Education */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "var(--space-3)",
              padding: "var(--space-3)",
              borderRadius: "calc(var(--radius-lg) * 1.15)",
              background: "var(--color-bg)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <Image
              src="/images/uottawa-logo.png"
              alt="University of Ottawa"
              width={34}
              height={34}
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <span
                style={{
                  fontFamily: "var(--font-caprasimo), system-ui",
                  fontSize: 14,
                  display: "block",
                }}
              >
                BSc Computer Science
              </span>
              <span style={{ fontSize: 12, opacity: 0.55 }}>Summer 2026 grad</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
