"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectItems } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = React.useState(projectItems[0]?.slug ?? "");

  return (
    <div className="space-y-12">
      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <div className="space-y-3">
          <p className="section-kicker">Work</p>
          <h2 className="section-title max-w-[10ch]">Selected Work</h2>
        </div>
        <p className="max-w-md justify-self-end text-right text-sm leading-7 text-muted-foreground">
          Projects chosen for technical depth: ML/CV reliability, recommendation modeling, and role-based mobile/backend workflows.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {projectItems.map((project, index) => (
          <Dialog key={project.slug}>
            <DialogTrigger asChild>
              <motion.button
                type="button"
                onClick={() => setActiveProject(project.slug)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.012 }}
                className={`group surface relative overflow-hidden rounded-[1.9rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  index % 2 === 1 ? "lg:translate-y-10" : ""
                } ${
                  projectItems.length % 2 === 1 && index === projectItems.length - 1 ? "lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-[calc(50%-0.75rem)] lg:translate-y-0" : ""
                }`}
              >
                {project.slug === "honours-research-optical-flow-reliability-prediction" ? (
                  <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.22em] text-white/75 backdrop-blur">
                    GIF
                  </div>
                ) : null}
                <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(95,226,255,0.12),transparent_0_36%)]" />
                </div>
                <div className="relative aspect-[1.12] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={`object-cover transition duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-1 ${
                      project.slug === "honours-research-optical-flow-reliability-prediction"
                        ? "saturate-[0.78] contrast-105 group-hover:saturate-100"
                        : "grayscale group-hover:grayscale-0"
                    }`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,14,0.1),rgba(2,10,14,0.82))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <span className="translate-y-1 text-[0.56rem] font-bold uppercase tracking-[0.32em] text-primary opacity-85 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          {project.tech.slice(0, 3).join(" / ")}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-white/70 transition duration-500 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="max-w-[16ch] text-2xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[2rem]">
                          {project.shortTitle}
                        </h3>
                        <p className="max-w-[46ch] text-sm leading-6 text-white/72">{project.summary}</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white/70 opacity-0 transition duration-500 group-hover:opacity-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            </DialogTrigger>

            <DialogContent className="h-[min(90vh,920px)] w-[min(1120px,calc(100vw-1.5rem))] max-w-[1120px] overflow-hidden rounded-[2rem] border-border/70 bg-card p-0">
              {activeProject === project.slug ? (
                <div className="flex h-full min-h-0 flex-col">
                  <div className="grid min-h-0 flex-1 gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
                    <div className="relative min-h-[18rem] lg:min-h-full">
                      <Image src={project.image} alt={project.imageAlt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,14,0.1),rgba(2,10,14,0.3)_38%,rgba(2,10,14,0.78))]" />
                    </div>

                    <div className="min-h-0 overflow-y-auto">
                      <div className="p-7 sm:p-8 lg:p-10">
                        <DialogHeader className="space-y-4">
                          <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-primary">{project.heroEyebrow}</p>
                          <DialogTitle className="max-w-[22ch] text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-foreground lg:text-[2.45rem]">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="max-w-[62ch] text-sm leading-7 text-muted-foreground lg:text-[0.96rem]">
                            {project.summary}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-border/70 bg-background/45 text-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-border/70 bg-background/45 px-2.5 py-1 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-muted-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {project.links?.length ? (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                {link.label}
                                <ArrowUpRight className="size-3.5" />
                              </a>
                            ))}
                          </div>
                        ) : null}

                        {project.highlights?.length ? (
                          <div className="mt-8 rounded-[1.4rem] border border-border/70 bg-background/45 p-5 sm:p-6">
                            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Highlights</h4>
                            <ul className="mt-4 space-y-3.5">
                              {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        <div className="mt-8 space-y-7">
                          {project.sections.map((section) => (
                            <div key={section.title} className="space-y-3">
                              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">{section.title}</h4>
                              <div className="space-y-3">
                                {section.paragraphs.map((paragraph) => (
                                  <p key={paragraph} className="max-w-[66ch] text-sm leading-7 text-muted-foreground lg:text-[0.96rem]">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                              {section.bullets?.length ? (
                                <ul className="space-y-3.5 pt-1">
                                  {section.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-muted-foreground lg:text-[0.96rem]">
                                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary/80" />
                                      <span className="max-w-[64ch]">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {project.supportingMedia?.length ? (
                    <div className="border-t border-border/70 bg-muted/35 px-7 py-6 sm:px-8 lg:px-10">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Supporting media</h4>
                        <p className="hidden text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
                          Visual outputs from the saved analysis pipeline
                        </p>
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {project.supportingMedia.map((media) => (
                          <figure key={media.src} className="space-y-2.5">
                            <div className="relative aspect-[1.35] overflow-hidden rounded-2xl border border-border/70 bg-background/50">
                              <Image src={media.src} alt={media.alt} fill className="object-cover" />
                            </div>
                            <figcaption className="max-w-[24ch] text-[0.68rem] font-medium uppercase leading-5 tracking-[0.18em] text-muted-foreground">
                              {media.label}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
