"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { timelineNodes } from "@/data/experience";

const scrollReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.15 } as const,
};

export function JourneySection() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="journey"
      {...(reducedMotion ? {} : scrollReveal)}
      style={{
        position: "relative",
        maxWidth: 1240,
        margin: "0 auto",
        padding: "calc(var(--space-8) * 1.5) var(--space-8)",
        overflow: "hidden",
      }}
    >
      {/* Giant watermark "JOURNEY" */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -10,
          right: -6,
          fontFamily: "var(--font-caprasimo), system-ui",
          fontSize: 160,
          color: "var(--color-accent-2-100)",
          zIndex: 0,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        JOURNEY
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
          Journey
        </p>
        <h2 style={{ fontSize: 32, marginBottom: "var(--space-8)" }}>
          Education &amp; Experience
        </h2>

        {/* Horizontal timeline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            paddingTop: 8,
          }}
        >
          {/* The horizontal line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              height: 2,
              background: "var(--color-divider)",
              zIndex: 0,
            }}
          />

          {timelineNodes.map((node, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                zIndex: 1,
                flex: "1 1 180px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-2)",
                maxWidth: 220,
              }}
            >
              {/* Circle with logo or dot */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--color-bg)",
                  border: "2px solid var(--color-accent-300)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {node.logo ? (
                  <Image
                    src="/images/uottawa-logo.png"
                    alt="University of Ottawa"
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "var(--color-accent-2-400)",
                    }}
                  />
                )}
              </div>

              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                {node.dates}
              </span>

              <h3
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontFamily: "var(--font-figtree), system-ui",
                  fontWeight: 700,
                }}
              >
                {node.role}
              </h3>

              <span style={{ fontSize: 12, opacity: 0.55 }}>{node.org}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
