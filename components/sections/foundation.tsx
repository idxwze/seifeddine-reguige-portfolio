"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/education";
import { experienceItems } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";

export function FoundationSection() {
  return (
    <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
      <div className="pointer-events-none absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="lg:sticky lg:top-28"
      >
        <div className="space-y-3">
          <p className="section-kicker">Foundation</p>
          <h2 className="section-title max-w-[10ch]">Education & Experience</h2>
        </div>
        <Card className="relative mt-8 overflow-hidden rounded-[2rem] border-border/70 bg-card/72">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,226,255,0.12),transparent_0_22%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-6 top-6 hidden h-24 w-24 overflow-hidden rounded-[1.4rem] border border-border/70 bg-background/45 p-4 backdrop-blur-md sm:block">
            <Image
              src="/images/uottawa-logo.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="96px"
              className="object-contain object-top p-4 opacity-15 brightness-0 dark:opacity-20 dark:invert"
            />
          </div>
          <CardContent className="space-y-7 p-8 md:p-10">
            <div className="space-y-2 pr-16 sm:pr-24">
              <h3 className="font-display text-3xl font-semibold tracking-[-0.06em] text-foreground">{education.institution}</h3>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-primary">{education.honors}</p>
            </div>
            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>{education.degree}</p>
              <p>{education.dates}</p>
              <p>{education.standing}</p>
              <p>{education.cgpa}</p>
            </div>
            <div className="border-t border-border/70 pt-6">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-primary">Relevant Coursework</p>
              <p className="mt-3 text-sm leading-7 text-foreground/90">{education.coursework.join(" • ")}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 lg:pt-3"
      >
        <div className="space-y-3">
          <p className="section-kicker text-muted-foreground">Timeline</p>
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/60 px-3 py-2 backdrop-blur-sm">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/70 bg-background/50">
              <Image
                src="/images/uottawa-logo.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="32px"
                className="object-contain object-top p-1.5 opacity-55 brightness-0 dark:invert"
              />
            </div>
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.28em] text-primary">University of Ottawa Roles</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            University IT experience across web systems, backend-adjacent workflows, reliability, and secure technical support.
          </p>
        </div>
        <div className="relative space-y-5 pl-7 sm:pl-9">
          <div className="absolute bottom-6 left-[0.78rem] top-2 w-px bg-gradient-to-b from-primary/65 via-primary/24 to-transparent sm:left-[0.95rem]" />
          <div className="absolute bottom-4 left-[0.51rem] h-2.5 w-2.5 rotate-45 border-b border-r border-primary/55 sm:left-[0.68rem]" />
          {experienceItems.map((item, index) => (
            <div key={item.role} className="relative">
              <div className="absolute -left-7 top-7 z-10 flex size-6 items-center justify-center rounded-full border border-primary/35 bg-background shadow-[0_0_0_6px_hsl(var(--background)),0_0_28px_hsl(var(--primary)/0.2)] sm:-left-9">
                <span className="size-2 rounded-full bg-primary" />
                <span className="sr-only">Timeline item {index + 1}</span>
              </div>
              <Card className="relative overflow-hidden rounded-[1.75rem] border-border/70 bg-card/72 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/90">
            <div className="absolute right-5 top-5 h-12 w-12 overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-2">
              <Image
                src="/images/uottawa-logo.png"
                alt=""
                fill
                sizes="48px"
                aria-hidden="true"
                className="object-contain object-top p-2 opacity-[0.1] brightness-0 dark:invert dark:opacity-[0.12]"
              />
            </div>
            <CardContent className="space-y-5 p-7">
              <div className="flex items-start justify-between gap-6 pr-12">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">{item.organization}</p>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-foreground">{item.role}</h3>
                </div>
                <p className="pt-1 text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground">{item.dates}</p>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
              <ul className="space-y-2.5 text-sm leading-7 text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
