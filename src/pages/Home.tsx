import { PageLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/content";
import { asset } from "@/lib/assets";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();
  const projects = getProjects();

  return (
    <PageLayout>
      {/* ── Hero Section with wood-grain texture ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "oklch(0.945 0.018 68)",
          backgroundImage: `
            radial-gradient(
              ellipse 75% 60% at 88% 10%,
              oklch(0.78 0.055 58 / 0.32) 0%,
              oklch(0.86 0.030 62 / 0.14) 45%,
              transparent 75%
            ),
            radial-gradient(
              ellipse 50% 45% at 92% 50%,
              oklch(0.72 0.070 54 / 0.18) 0%,
              transparent 65%
            )
          `,
        }}
      >
        {/* Fretboard position marker dots (decorative) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 opacity-20 pointer-events-none hidden lg:block"
          style={{
            background: "repeating-linear-gradient(180deg, transparent 0px, transparent 47px, oklch(0.58 0.075 52 / 0.5) 47px, oklch(0.58 0.075 52 / 0.5) 49px)",
          }}
        />

        <div className="container pt-20 pb-16 relative">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "oklch(0.88 0.055 70 / 0.5)",
                border: "1px solid oklch(0.72 0.115 65 / 0.4)",
                color: "oklch(0.35 0.06 50)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "oklch(0.56 0.070 50)" }}
              />
              {t.home.badge}
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.165 0.028 42)",
              }}
            >
              {t.home.heroTitle1}<br />
              <span style={{ color: "oklch(0.42 0.065 48)" }}>{t.home.heroTitle2}</span>
            </h1>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                style={{
                  background: "oklch(0.42 0.065 48)",
                  color: "oklch(0.945 0.018 68)",
                  border: "none",
                  boxShadow: "0 2px 8px oklch(0.42 0.065 48 / 0.3), inset 0 1px 0 oklch(1 0 0 / 0.15)",
                }}
              >
                <Link href="/projects">
                  {t.home.viewProjects} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom guitar string divider */}
        <div className="guitar-string" />
      </section>

      {/* ── Featured Work ── */}
      <section className="container py-16">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "oklch(0.58 0.075 52)" }}
          >
            {t.home.featuredWork}
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium transition-colors shrink-0"
            style={{ color: "oklch(0.45 0.07 50)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.30 0.06 50)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.45 0.07 50)"; }}
          >
            {t.home.viewProjects}
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map(project => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block wood-card rounded-3xl p-6 sm:p-10 cursor-pointer"
            >
              <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-center">
                {/* Text */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.03 48)" }}
                  >
                    {project.title}
                  </h3>
                  {project.summary && (
                    <p
                      className="text-base sm:text-lg leading-relaxed mb-5"
                      style={{ color: "oklch(0.50 0.025 55)" }}
                    >
                      {project.summary}
                    </p>
                  )}
                  {Array.isArray(project.tags) && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            background: "oklch(0.88 0.055 70 / 0.4)",
                            border: "1px solid oklch(0.72 0.115 65 / 0.4)",
                            color: "oklch(0.35 0.06 50)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span
                    className="inline-flex items-center text-sm font-medium transition-colors"
                    style={{ color: "oklch(0.45 0.07 50)" }}
                  >
                    {t.projects.viewProject}
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Image */}
                <div
                  className="aspect-video rounded-2xl border overflow-hidden flex items-center justify-center shrink-0"
                  style={{ borderColor: "oklch(0.84 0.030 65)", background: "oklch(0.99 0.012 75)" }}
                >
                  {project.coverImageUrl ? (
                    <img
                      src={asset(project.coverImageUrl)}
                      alt={project.title}
                      className="w-full h-full object-contain p-6"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.88 0.055 70 / 0.5), oklch(0.82 0.045 60 / 0.4))",
                        backgroundImage: `repeating-linear-gradient(91deg, transparent, transparent 3px, oklch(0.78 0.055 55 / 0.12) 3px, oklch(0.78 0.055 55 / 0.12) 4px)`,
                      }}
                    >
                      <span
                        className="text-5xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.55 0.065 60 / 0.5)" }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
