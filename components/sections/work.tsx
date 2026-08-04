"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import type { FeaturedProject } from "@/data/types";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 } as const,
};

/* ── Icon placeholders ──────────────────────────────────────────────── */
const HouseIcon = () => (
  <svg width={56} height={56} viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-2-800)" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 11.5 12 4l8 7.5" />
    <path d="M6 10v9h5v-5h2v5h5v-9" />
  </svg>
);
const BoxIcon = () => (
  <svg width={56} height={56} viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-800)" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 8 12 3 3 8v8l9 5 9-5Z" />
    <path d="M3 8l9 5 9-5" />
    <path d="M12 13v8" />
  </svg>
);
const FilmIcon = () => (
  <svg width={56} height={56} viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-800)" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
    <path d="m4 8 2-4h3l-2 4Z" />
    <path d="m9 8 2-4h3l-2 4Z" />
    <path d="m14 8 2-4h3l-2 4Z" />
  </svg>
);

/* ── Project visual ─────────────────────────────────────────────────── */
function ProjectVisual({ project, hovered }: { project: FeaturedProject; hovered: boolean }) {
  const circleStyle: React.CSSProperties = {
    width: 170,
    height: 170,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "var(--shadow-md)",
    transition: "transform 0.35s ease",
    transform: hovered ? "scale(1.06)" : "scale(1)",
    position: "relative",
    zIndex: 1,
  };

  if (project.visual === "photo" && project.photoSrc) {
    return (
      <Image
        src={project.photoSrc}
        alt={project.photoAlt ?? project.title}
        width={170}
        height={170}
        className="washed"
        style={{
          width: 170,
          height: 170,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "var(--shadow-md)",
          transition: "transform 0.35s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          position: "relative",
          zIndex: 1,
        }}
      />
    );
  }

  if (project.visual === "house") {
    return (
      <div style={{ ...circleStyle, background: "var(--color-accent-2-200)" }}>
        <HouseIcon />
      </div>
    );
  }

  if (project.visual === "box") {
    return (
      <div style={{ ...circleStyle, background: "var(--color-accent-200)" }}>
        <BoxIcon />
      </div>
    );
  }

  // film
  return (
    <div style={{ ...circleStyle, background: "var(--color-neutral-200)" }}>
      <FilmIcon />
    </div>
  );
}

/* ── Single project column ──────────────────────────────────────────── */
function ProjectColumn({ project }: { project: FeaturedProject }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 180,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 var(--space-4)",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Faded index numeral */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -26,
          fontFamily: "var(--font-caprasimo), system-ui",
          fontSize: 56,
          color: "var(--color-accent-200)",
          zIndex: 0,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {project.index}
      </div>

      <ProjectVisual project={project} hovered={hovered} />

      <h3
        style={{
          marginTop: "var(--space-4)",
          fontSize: 15,
          fontFamily: "var(--font-figtree), system-ui",
          fontWeight: 700,
        }}
      >
        {project.title}
      </h3>
      <p style={{ fontSize: 12, opacity: 0.75, marginTop: "var(--space-1)", lineHeight: 1.5 }}>
        {project.shortDescription}
      </p>
      {project.repoHref && (
        <a
          href={project.repoHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: 11,
            color: "var(--color-accent)",
            textDecoration: "none",
            marginTop: "var(--space-1)",
            padding: "0 var(--space-1)",
            borderRadius: 999,
            transition: "background 0.15s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(198,113,57,0.1)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
        >
          View repo
        </a>
      )}
    </div>
  );
}

/* ── Work section ───────────────────────────────────────────────────── */
export function WorkSection() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="work"
      {...(reducedMotion ? {} : scrollReveal)}
      style={{
        position: "relative",
        maxWidth: 1240,
        margin: "0 auto",
        padding: "calc(var(--space-8) * 1.5) var(--space-8)",
        overflow: "hidden",
      }}
    >
      {/* Giant watermark "WORK" */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -10,
          left: -6,
          fontFamily: "var(--font-caprasimo), system-ui",
          fontSize: 160,
          color: "var(--color-accent-100)",
          zIndex: 0,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        WORK
      </div>

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
          Selected Work
        </p>
        <h2 style={{ fontSize: 32, marginBottom: "var(--space-8)" }}>Projects</h2>

        {/* 4 columns with 1px dividers */}
        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {featuredProjects.map((project, i) => (
            <div key={project.index} style={{ display: "contents" }}>
              <ProjectColumn project={project} />
              {i < featuredProjects.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    background: "var(--color-divider)",
                    flex: "0 0 auto",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
