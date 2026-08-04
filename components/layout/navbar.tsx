"use client";

import Link from "next/link";
import { siteConfig, navigationItems } from "@/data/site";

const DownloadIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-4)",
          padding: "var(--space-3) var(--space-8)",
        }}
      >
        {/* Brand */}
        <Link
          href="#hero"
          style={{
            fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
            fontSize: 18,
            color: "var(--color-text)",
            textDecoration: "none",
            marginRight: "auto",
            flexShrink: 0,
          }}
        >
          Seifeddine Reguige
        </Link>

        {/* Nav links */}
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              color: "var(--color-text)",
              fontSize: 14,
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "var(--color-text)")
            }
          >
            {item.label}
          </a>
        ))}

        {/* Resume button */}
        <a
          href={siteConfig.resumeHref}
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-caprasimo), system-ui, sans-serif",
            fontSize: 13,
            color: "var(--color-bg)",
            background: "var(--color-accent)",
            border: "1px solid transparent",
            borderRadius: 999,
            padding: "var(--space-2) var(--space-4)",
            textDecoration: "none",
            transition: "background 0.15s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-600)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)")
          }
        >
          <DownloadIcon />
          Resume
        </a>
      </div>
    </nav>
  );
}
