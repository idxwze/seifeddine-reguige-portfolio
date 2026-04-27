"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { heroStats, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(55,220,255,0.2),transparent_0_19rem),radial-gradient(circle_at_76%_18%,rgba(38,117,255,0.13),transparent_0_21rem),radial-gradient(circle_at_52%_70%,rgba(55,220,255,0.08),transparent_0_26rem)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(55,220,255,0.16),transparent_0_18rem),radial-gradient(circle_at_88%_16%,rgba(38,117,255,0.12),transparent_0_20rem)]" />
      <div className="container-shell pb-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 lg:space-y-10">
            <motion.div variants={item} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-primary cyan-glow">
              Open to 2026 software, backend, data & ML roles
            </motion.div>

            <div className="space-y-4 lg:space-y-5">
              <motion.h1 variants={item} className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.085em] text-foreground sm:text-6xl lg:text-[6.2rem] xl:text-[7rem]">
                SEIFEDDINE
                <span className="outline-title block font-display">REGUIGE</span>
              </motion.h1>

              <motion.p variants={item} className="text-[0.7rem] font-bold uppercase tracking-[0.34em] text-primary sm:text-xs">
                {siteConfig.title}
              </motion.p>

              <motion.p variants={item} className="max-w-xl text-balance text-lg font-semibold leading-7 text-foreground sm:text-xl">
                Computer Science student at uOttawa building backend systems, data workflows, and ML-assisted software with careful engineering habits.
              </motion.p>

              <motion.p variants={item} className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                {siteConfig.heroSubheadline}
              </motion.p>
            </div>

            <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-2xl px-6 text-[0.72rem] font-bold uppercase tracking-[0.18em]">
                <a href={siteConfig.resumeHref} target="_blank" rel="noopener noreferrer">
                  View Resume
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-2xl border-border/70 bg-card/55 px-6 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-foreground hover:bg-card/80"
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="hidden h-12 w-12 rounded-2xl border border-border/70 bg-card/55 text-foreground hover:bg-card/80 sm:inline-flex"
              >
                <a href="#contact" aria-label="Jump to contact section">
                  <Mail className="size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-full border border-border/70 bg-card/55 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="mr-2 font-bold text-foreground">{stat.value}</span>
                  {stat.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[28rem] lg:max-w-[29rem]"
          >
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={reducedMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="surface group/avatar relative overflow-hidden rounded-[2rem] p-4 sm:p-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,224,255,0.2),transparent_0_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between rounded-[1.2rem] border border-border/60 bg-background/45 px-4 py-3 backdrop-blur-sm">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.34em] text-primary">Core Toolkit</p>
                    <p className="mt-1 text-sm text-foreground">Java, Python, JavaScript, PHP, SQL</p>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(74,222,255,0.9)]" />
                </div>

                <div className="relative overflow-hidden rounded-[1.6rem] border border-border/60 bg-[#040b10]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
                  <Image
                    src="/images/me.jpg"
                    alt="Portrait of Seifeddine Reguige."
                    width={900}
                    height={1200}
                    priority
                    className="aspect-[0.86] w-full object-cover grayscale transition duration-700 ease-out group-hover/avatar:scale-[1.015] group-hover/avatar:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
                    <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm">
                      <p className="text-[0.56rem] font-bold uppercase tracking-[0.28em] text-primary">Focused on</p>
                      <p className="mt-1 text-xs text-white">Backend, data analysis, ML, computer vision</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-right backdrop-blur-sm">
                      <p className="text-[0.56rem] font-bold uppercase tracking-[0.28em] text-primary">Education</p>
                      <p className="mt-1 text-xs text-white">uOttawa CS (Co-op)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
