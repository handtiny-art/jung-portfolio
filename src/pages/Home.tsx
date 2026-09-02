import { PageLayout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Music,
  Video,
} from "lucide-react";
import { Link } from "wouter";

const skillsZh = [
  "產品策略", "用戶研究", "需求分析", "敏捷開發",
  "資料分析", "原型設計", "A/B 測試", "跨部門協作",
  "Figma", "JIRA", "SQL", "產品路線圖",
];

const skillsEn = [
  "Product Strategy", "User Research", "Requirements Analysis", "Agile",
  "Data Analysis", "Prototyping", "A/B Testing", "Cross-functional Collaboration",
  "Figma", "JIRA", "SQL", "Product Roadmap",
];

export default function Home() {
  const { t, lang } = useLanguage();
  const skills = lang === "zh" ? skillsZh : skillsEn;

  const sections = [
    {
      href: "/projects",
      icon: Briefcase,
      title: t.nav.projects,
      description: t.home.projectsDesc,
      cta: t.home.viewProjects,
    },
    {
      href: "/blog",
      icon: BookOpen,
      title: t.nav.blog,
      description: t.home.blogDesc,
      cta: t.home.readBlog,
    },
    {
      href: "/music",
      icon: Music,
      title: t.nav.music,
      description: t.home.musicDesc,
      cta: t.nav.music,
    },
    {
      href: "/videos",
      icon: Video,
      title: t.nav.videos,
      description: t.home.videosDesc,
      cta: t.nav.videos,
    },
  ];

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
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.165 0.028 42)",
              }}
            >
              {t.home.heroTitle1}<br />
              <span style={{ color: "oklch(0.42 0.065 48)" }}>{t.home.heroTitle2}</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "oklch(0.52 0.030 52)" }}
            >
              {t.home.heroDesc}
            </p>

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
              <Button
                variant="outline"
                asChild
                style={{
                  borderColor: "oklch(0.68 0.105 58 / 0.6)",
                  color: "oklch(0.42 0.065 48)",
                  background: "oklch(0.88 0.025 65 / 0.3)",
                }}
              >
                <Link href="/blog">{t.home.readBlog}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom guitar string divider */}
        <div className="guitar-string" />
      </section>

      {/* ── Skills Section ── */}
      <section className="container py-16">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: "oklch(0.58 0.075 52)" }}
        >
          {t.home.skills}
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-md transition-all duration-150 cursor-default"
              style={{
                border: "1px solid oklch(0.84 0.030 65)",
                color: "oklch(0.35 0.06 50)",
                background: "oklch(0.99 0.012 75)",
                boxShadow: "0 1px 2px oklch(0.35 0.06 50 / 0.06), inset 0 1px 0 oklch(1 0 0 / 0.7)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLSpanElement).style.background = "oklch(0.88 0.055 70 / 0.4)";
                (e.currentTarget as HTMLSpanElement).style.borderColor = "oklch(0.72 0.115 65 / 0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLSpanElement).style.background = "oklch(0.99 0.012 75)";
                (e.currentTarget as HTMLSpanElement).style.borderColor = "oklch(0.84 0.030 65)";
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Guitar string separator */}
      <div className="container"><div className="guitar-string" /></div>

      {/* ── Explore Sections Grid ── */}
      <section className="container py-16">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-8"
          style={{ color: "oklch(0.58 0.075 52)" }}
        >
          {t.home.explore}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <div
                key={section.href}
                className="group wood-card rounded-xl p-6 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Icon with amber glow on hover */}
                  <div
                    className="p-2.5 rounded-lg transition-all duration-200 shrink-0"
                    style={{
                      background: "oklch(0.88 0.055 70 / 0.4)",
                      border: "1px solid oklch(0.72 0.115 65 / 0.3)",
                      color: "oklch(0.45 0.07 50)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "oklch(0.22 0.03 48)",
                      }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.50 0.025 55)" }}
                    >
                      {section.description}
                    </p>
                    <Link
                      href={section.href}
                      className="inline-flex items-center text-sm font-medium transition-colors"
                      style={{ color: "oklch(0.45 0.07 50)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.30 0.06 50)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.45 0.07 50)"; }}
                    >
                      {section.cta}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
