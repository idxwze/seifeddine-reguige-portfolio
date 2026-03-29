"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navigationItems } from "@/data/site";

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active?.target.id) {
          setActiveSection(active.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    function closeMenu() {
      setOpen(false);
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    }

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-6 md:px-6 md:py-8">
      <div className="pointer-events-auto w-full max-w-fit rounded-full border border-white/10 bg-white/[0.03] shadow-[0_22px_80px_-44px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
        <div className="flex h-12 items-center gap-3 px-4 md:px-6">
          <Link href="#hero" className="shrink-0 text-lg font-black tracking-[-0.08em] text-white">
            SR<span className="text-primary">.</span>
          </Link>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Toggle navigation</span>
            <motion.div animate={open ? "open" : "closed"} className="flex flex-col gap-1">
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 3 } }} className="h-px w-4 bg-current" />
              <motion.span variants={{ closed: { rotate: 0, y: 0, opacity: 1 }, open: { rotate: -45, y: -3, opacity: 1 } }} className="h-px w-4 bg-current" />
            </motion.div>
          </button>

          <nav
            aria-label="Primary navigation"
            className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[calc(100%+0.75rem)] flex-col gap-2 rounded-[1.25rem] border border-white/10 bg-background/95 p-3 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:static md:flex md:flex-row md:items-center md:gap-8 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className="relative rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground transition hover:text-white"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className={isActive ? "text-primary" : undefined}>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
