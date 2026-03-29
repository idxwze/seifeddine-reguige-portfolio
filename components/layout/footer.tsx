import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container-shell flex flex-col items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.24em] text-muted-foreground md:flex-row">
        <div className="flex items-center gap-5">
          <span className="text-xl tracking-[-0.08em] text-white">SR.</span>
          <span className="opacity-30">/</span>
          <span>© 2026 {siteConfig.name}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            LinkedIn
          </Link>
          <Link href={siteConfig.resumeHref} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            Resume
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
