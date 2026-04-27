"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/education";
import { experienceItems } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";

export function FoundationSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
          <CardContent className="space-y-6 p-8 md:p-10">
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
        className="space-y-5"
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
        {experienceItems.map((item) => (
          <Card key={item.role} className="relative overflow-hidden rounded-[1.75rem] border-border/70 bg-card/72 transition duration-300 hover:border-primary/30 hover:bg-card/90">
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
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
