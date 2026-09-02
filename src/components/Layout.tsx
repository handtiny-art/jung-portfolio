import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/blog", label: t.nav.blog },
    { href: "/music", label: t.nav.music },
    { href: "/videos", label: t.nav.videos },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "oklch(0.97 0.018 72 / 0.95)",
        borderColor: "oklch(0.84 0.030 65)",
        backgroundImage: `
          repeating-linear-gradient(
            92deg,
            transparent,
            transparent 2px,
            oklch(0.88 0.030 65 / 0.20) 2px,
            oklch(0.88 0.030 65 / 0.20) 3px
          )
        `,
        boxShadow: "0 1px 0 oklch(0.72 0.115 65 / 0.15), 0 2px 8px oklch(0.35 0.06 50 / 0.06)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src={asset("/assets/brand/logo.png")}
              alt="Guitar soundhole logo"
              className="w-7 h-7 object-contain transition-all duration-200 group-hover:scale-105 drop-shadow-sm flex-shrink-0"
            />
            <span
              className="text-lg font-bold tracking-tight"
              style={{
                color: "oklch(0.165 0.028 42)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150",
                  location === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={
                  location === link.href
                    ? {
                        background: "oklch(0.88 0.055 70 / 0.45)",
                        color: "oklch(0.25 0.04 50)",
                        boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.5), 0 1px 3px oklch(0.35 0.06 50 / 0.12)",
                      }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language toggle */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-150"
              style={{
                border: "1px solid oklch(0.72 0.115 65 / 0.5)",
                color: "oklch(0.45 0.07 50)",
                background: "oklch(0.88 0.055 70 / 0.2)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.88 0.055 70 / 0.45)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.58 0.075 52)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.88 0.055 70 / 0.2)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.72 0.115 65 / 0.5)";
              }}
              aria-label="Toggle language"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav
            className="md:hidden pb-4 pt-3 space-y-1"
            style={{ borderTop: "1px solid oklch(0.84 0.030 65)" }}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={
                  location === link.href
                    ? { background: "oklch(0.88 0.055 70 / 0.4)" }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
            <div
              className="pt-2 mt-2 space-y-1"
              style={{ borderTop: "1px solid oklch(0.84 0.030 65)" }}
            >
              <button
                onClick={() => { setLang(lang === "zh" ? "en" : "zh"); setMobileOpen(false); }}
                className="block w-full text-left px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                {lang === "zh" ? "Switch to English" : "切換為中文"}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/blog", label: t.nav.blog },
    { href: "/music", label: t.nav.music },
    { href: "/videos", label: t.nav.videos },
  ];

  return (
    <footer
      className="mt-20"
      style={{
        borderTop: "1px solid oklch(0.84 0.030 65)",
        background: "oklch(0.94 0.022 68)",
        backgroundImage: `
          repeating-linear-gradient(
            91deg,
            transparent,
            transparent 3px,
            oklch(0.82 0.045 60 / 0.15) 3px,
            oklch(0.82 0.045 60 / 0.15) 4px
          )
        `,
      }}
    >
      <div className="guitar-string" />

      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="text-base font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.30 0.04 50)" }}
            >
              Portfolio
            </span>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t.common.copyright}
            </p>
          </div>

          <nav className="flex items-center gap-5">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors"
                style={{ color: "oklch(0.50 0.025 55)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.30 0.04 50)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.50 0.025 55)"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-center gap-6 mt-6 opacity-30">
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.58 0.075 52)" }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageLayout({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn("flex-1 page-enter", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
