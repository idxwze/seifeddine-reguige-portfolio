"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Organic intro overlay: cream full-viewport screen with a spinning dashed
 * ring, the Caprasimo name, and the tagline. Fades out after ~2.6 s
 * (1.7 s visible + 0.9 s fade). Only shown once per browser session.
 */
export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (window.sessionStorage.getItem("sr-intro-seen") === "1") {
      setVisible(false);
      return;
    }

    const delay = prefersReducedMotion ? 250 : 2600;
    const t = window.setTimeout(() => {
      window.sessionStorage.setItem("sr-intro-seen", "1");
      setVisible(false);
    }, delay);

    return () => window.clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: prefersReducedMotion ? 0.15 : 0.9, ease: "easeInOut" },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/* Spinning dashed ring */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "2px dashed var(--color-accent-300)",
              marginBottom: "var(--space-4)",
              animation: prefersReducedMotion ? "none" : "spinSlow 6s linear infinite",
            }}
          />

          {/* Name */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.15 }}
            style={{
              fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
              fontSize: 52,
              textAlign: "center",
              color: "var(--color-text)",
            }}
          >
            Seifeddine Reguige
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.45 }}
            style={{
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginTop: "var(--space-3)",
            }}
          >
            Backend, Data &amp; Applied ML
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
