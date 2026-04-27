"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="surface relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,225,255,0.12),transparent_0_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,rgba(82,225,255,0.12),transparent_0_34%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="section-kicker">Reach Out</p>
          <h2 className="section-title mx-auto max-w-[10ch]">Let&apos;s Talk Software</h2>
        </div>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Open to software roles where backend fundamentals, data work, and applied ML matter. The fastest way to reach me is by email or LinkedIn.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-2xl px-6 text-[0.72rem] font-bold uppercase tracking-[0.18em]">
            <Link href={`mailto:${siteConfig.email}`}>
              <Mail className="size-4" />
              Send Message
            </Link>
          </Button>
          <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-2xl border-border/70 bg-card/55 hover:bg-card/80">
            <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
              <Linkedin className="size-4" />
            </Link>
          </Button>
          <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-2xl border-border/70 bg-card/55 hover:bg-card/80">
            <Link href={siteConfig.resumeHref} target="_blank" rel="noopener noreferrer" aria-label="Open resume PDF">
              <Download className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground sm:flex-row sm:gap-6">
          <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-primary">
            {siteConfig.email}
          </Link>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </motion.div>
  );
}
