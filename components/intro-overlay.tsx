"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function IntroOverlay() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (!prefersReducedMotion && window.sessionStorage.getItem("sr-intro-seen") === "1") {
      setVisible(false);
      return;
    }

    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => setVisible(false), 240);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem("sr-intro-seen", "1");
      setVisible(false);
    }, 1325);
    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: prefersReducedMotion ? 0.18 : 0.65,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          className="pointer-events-none fixed inset-0 z-[120] overflow-hidden bg-background/72 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.14),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(79,214,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,214,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50"
            initial={{ scale: 0.86, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6, transition: { duration: prefersReducedMotion ? 0.2 : 0.8, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ scale: 1.06, opacity: 0, transition: { duration: prefersReducedMotion ? 0.18 : 0.55 } }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                duration: prefersReducedMotion ? 0.18 : 0.72,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 1.015,
              filter: "blur(8px)",
              transition: {
                duration: prefersReducedMotion ? 0.18 : 0.52,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0, transition: { delay: prefersReducedMotion ? 0 : 0.08, duration: 0.4 } }}
                className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary"
              >
                Seifeddine Reguige
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: prefersReducedMotion ? 0 : 0.14, duration: 0.5 } }}
                className="font-display text-[clamp(2.8rem,9vw,7rem)] font-semibold tracking-[-0.08em] text-foreground"
              >
                SR<span className="text-primary">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, transition: { delay: prefersReducedMotion ? 0 : 0.2, duration: 0.45 } }}
                className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-muted-foreground"
              >
                {siteConfig.title}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
