"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <div className="space-y-10">
      <div className="space-y-3 text-center">
        <p className="section-kicker">Technical Focus</p>
        <h2 className="section-title mx-auto max-w-[8ch]">Core Stack</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 xl:grid-cols-6">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <p className="text-[0.56rem] font-bold uppercase tracking-[0.32em] text-muted-foreground">{group.title}</p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.05 + itemIndex * 0.03 }}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-border/70 bg-card/60 px-3 py-2 text-xs font-medium text-foreground transition hover:border-primary/25 hover:bg-card hover:text-primary"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
