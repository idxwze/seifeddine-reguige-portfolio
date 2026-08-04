"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig, heroStats } from "@/data/site";

/* ── SVG icons ──────────────────────────────────────────────────────── */
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
const LinkedInIcon = () => (
  <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A5.5 5.5 0 0 1 16 8Z" />
    <rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} />
  </svg>
);
const GitHubIcon = () => (
  <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.3c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

/* ── Stagger animation variants ─────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Shared button styles ───────────────────────────────────────────── */
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
const btnIcon: React.CSSProperties = {
  ...btnSecondary,
  width: 36,
  height: 36,
  padding: 0,
  justifyContent: "center",
};

export function HeroSection() {
  const [photoHovered, setPhotoHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "calc(var(--space-8) * 2) var(--space-8) var(--space-8)",
      }}
    >
      {/* ── Diagonal hairline texture ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.5,
          backgroundImage: [
            "repeating-linear-gradient(135deg, transparent, transparent 34px, color-mix(in srgb, var(--color-accent) 10%, transparent) 34px, color-mix(in srgb, var(--color-accent) 10%, transparent) 36px)",
            "repeating-linear-gradient(45deg, transparent, transparent 34px, color-mix(in srgb, var(--color-accent-2) 8%, transparent) 34px, color-mix(in srgb, var(--color-accent-2) 8%, transparent) 36px)",
          ].join(", "),
        }}
      />

      {/* ── Floating accent blobs ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          right: -60,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "var(--color-accent-200)",
          opacity: 0.55,
          zIndex: 0,
          animation: reducedMotion ? "none" : "floatY 7s ease-in-out infinite alternate",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -120,
          left: "8%",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "var(--color-accent-2-200)",
          opacity: 0.5,
          zIndex: 0,
          animation: reducedMotion ? "none" : "floatY 9s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: "var(--space-8)",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        {/* Left column */}
        <motion.div
          variants={container}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "show"}
          style={{ flex: "1 1 480px", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
        >
          {/* Tag */}
          <motion.span
            variants={reducedMotion ? undefined : item}
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              fontSize: 11,
              letterSpacing: "0.02em",
              padding: "3px 10px",
              borderRadius: 999,
              background: "var(--color-accent-100)",
              color: "var(--color-accent-800)",
            }}
          >
            {siteConfig.heroTag}
          </motion.span>

          {/* H1 */}
          <motion.h1
            variants={reducedMotion ? undefined : item}
            style={{ fontSize: 74, lineHeight: 1.02, marginTop: "var(--space-2)" }}
          >
            Seifeddine
            <br />
            Reguige
          </motion.h1>

          {/* H2 */}
          <motion.h2
            variants={reducedMotion ? undefined : item}
            style={{ fontSize: 26, color: "var(--color-accent-700)", marginTop: "var(--space-1)" }}
          >
            Backend, Data &amp; Applied ML
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={reducedMotion ? undefined : item}
            style={{ fontSize: 18, maxWidth: 540, marginTop: "var(--space-2)", opacity: 0.85, lineHeight: 1.6 }}
          >
            {siteConfig.heroHeadline}
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={reducedMotion ? undefined : item}
            style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-4)" }}
          >
            <a
              href={siteConfig.resumeHref}
              download
              style={btnPrimary}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-600)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)")}
            >
              <DownloadIcon />
              Download resume
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              style={btnSecondary}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(32,30,29,0.07)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
            >
              <MailIcon />
              Get in touch
            </a>
          </motion.div>

          {/* Social icon buttons */}
          <motion.div
            variants={reducedMotion ? undefined : item}
            style={{ display: "flex", gap: "var(--space-2)" }}
          >
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={btnIcon}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(32,30,29,0.07)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
            >
              <LinkedInIcon />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={btnIcon}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(32,30,29,0.07)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
            >
              <GitHubIcon />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={reducedMotion ? undefined : item}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "var(--space-4)",
              marginTop: "var(--space-4)",
              maxWidth: 560,
            }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
                    fontSize: 26,
                    color: "var(--color-accent-700)",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, opacity: 0.65, marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — circular portrait with spinning rings */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{ position: "relative", width: 340, height: 340 }}
            onMouseEnter={() => setPhotoHovered(true)}
            onMouseLeave={() => setPhotoHovered(false)}
          >
            {/* Ring 1 — accent-300, 22s, scales to 1.18× on hover */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -16,
                transition: "transform 0.45s ease, opacity 0.45s ease",
                transform: photoHovered ? "scale(1.18)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "2px dashed var(--color-accent-300)",
                  opacity: 0.6,
                  animation: reducedMotion ? "none" : "spinSlow 22s linear infinite",
                }}
              />
            </div>

            {/* Ring 2 — accent-2-300, 30s reverse, scales to 1.3× on hover */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -34,
                transition: "transform 0.45s ease, opacity 0.45s ease",
                transform: photoHovered ? "scale(1.3)" : "scale(1)",
                opacity: photoHovered ? 0.8 : 1,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "2px dashed var(--color-accent-2-300)",
                  opacity: 0.4,
                  animation: reducedMotion ? "none" : "spinSlow 30s linear infinite reverse",
                }}
              />
            </div>

            {/* Portrait */}
            <Image
              src="/images/me.jpg"
              alt="Portrait of Seifeddine Reguige"
              width={340}
              height={340}
              priority
              className="washed"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "var(--shadow-lg)",
                position: "relative",
                zIndex: 1,
                transition: "transform 0.45s ease",
                transform: photoHovered ? "scale(1.06)" : "scale(1)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
