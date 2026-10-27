import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "wouter";
import { getProjectBySlug } from "@/content";
import type { ContentBlock } from "@/content/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X, ZoomIn } from "lucide-react";

// ─── Section color coding ──────────────────────────────────────
// Rotates through a small, brand-harmonious accent palette — one color per
// top-level (H1) section, used for the jump-nav dot and the section's
// left-edge accent so a reader can orient at a glance.
const SECTION_COLORS = [
  "oklch(0.55 0.15 35)",  // rust
  "oklch(0.50 0.12 150)", // forest
  "oklch(0.58 0.13 85)",  // ochre
  "oklch(0.50 0.10 255)", // slate blue
  "oklch(0.48 0.12 325)", // plum
];

type ZoomState = { src: string; alt: string } | null;

// ─── Block Renderers ───────────────────────────────────────────

function RenderBlock({ block, onZoom }: { block: ContentBlock; onZoom: (src: string, alt: string) => void }) {
  switch (block.type) {
    case "heading": {
      const { text, level } = block.data;
      if (!text) return null;
      if (level === 1) {
        // Top-level headings are rendered by the section wrapper instead, so
        // this case only fires for intro content without a section (rare).
        return (
          <div className="mt-16 mb-5 first:mt-0">
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.03 48)" }}
            >
              {text}
            </h1>
            <div
              className="mt-3 h-px w-16"
              style={{ background: "oklch(0.68 0.105 58 / 0.6)" }}
            />
          </div>
        );
      }
      if (level === 2) {
        return (
          <h2
            className="text-2xl font-semibold mt-9 mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.28 0.045 50)" }}
          >
            {text}
          </h2>
        );
      }
      return (
        <h3
          className="text-xl font-medium mt-6 mb-2"
          style={{ color: "oklch(0.35 0.06 50)" }}
        >
          {text}
        </h3>
      );
    }

    case "text": {
      if (!block.data.text) return null;
      return (
        <p className="text-base leading-relaxed text-foreground/80 whitespace-pre-wrap">
          {block.data.text}
        </p>
      );
    }

    case "image": {
      if (!block.data.url) return null;
      const src = asset(block.data.url);
      const alt = block.data.caption ?? "";
      return (
        <figure className="my-6 flex flex-col items-center">
          <button
            type="button"
            onClick={() => onZoom(src, alt)}
            className="group relative max-w-full rounded-xl border overflow-hidden cursor-zoom-in"
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[560px] w-auto h-auto object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
              <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-90 drop-shadow transition-opacity" />
            </span>
          </button>
          {block.data.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">{block.data.caption}</figcaption>
          )}
        </figure>
      );
    }

    case "metrics": {
      const items = block.data.items.filter(i => i.metric || i.value);
      if (!items.length) return null;
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary">{item.value}</div>
              <div className="text-sm font-medium mt-1">{item.metric}</div>
              {item.description && (
                <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      );
    }

    case "quote": {
      if (!block.data.text) return null;
      return (
        <blockquote className="border-l-4 border-primary pl-5 py-1 my-4 bg-muted/30 rounded-r-lg">
          <p className="text-base italic text-foreground/80">"{block.data.text}"</p>
          {block.data.author && (
            <cite className="text-sm text-muted-foreground mt-2 block not-italic">— {block.data.author}</cite>
          )}
        </blockquote>
      );
    }

    case "divider": {
      return <Separator className="my-6" />;
    }

    case "columns": {
      const cols = block.data.columns.filter(c => c.heading || c.content);
      if (!cols.length) return null;
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          {cols.map((col, idx) => (
            <div key={idx} className="border rounded-xl p-4">
              {col.heading && <div className="font-semibold mb-2">{col.heading}</div>}
              <p className="text-sm text-foreground/80 whitespace-pre-wrap">{col.content}</p>
            </div>
          ))}
        </div>
      );
    }

    case "mediaGrid": {
      const items = block.data.items.filter(i => i.url);
      if (!items.length) return null;

      const widthMap = {
        full: "w-full",
        half: "w-[calc(50%-0.5rem)]",
        third: "w-[calc(33.333%-0.667rem)]",
        quarter: "w-[calc(25%-0.75rem)]",
      };

      return (
        <div className="my-4 flex flex-wrap gap-4">
          {items.map((item) => {
            const src = asset(item.url);
            const alt = item.caption ?? "";
            return (
              <div key={item.id} className={`${widthMap[item.width]} flex flex-col`}>
                {item.type === "image" ? (
                  <button
                    type="button"
                    onClick={() => onZoom(src, alt)}
                    className="group relative rounded-xl border overflow-hidden cursor-zoom-in"
                  >
                    <img src={src} alt={alt} className="w-full h-auto" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                      <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-90 drop-shadow transition-opacity" />
                    </span>
                  </button>
                ) : (
                  <video src={src} className="w-full h-auto rounded-xl border" controls />
                )}
                {item.caption && (
                  <figcaption className="text-center text-sm text-muted-foreground mt-2">{item.caption}</figcaption>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    case "table": {
      const { headers, rows } = block.data;
      if (!headers.length || !rows.length) return null;
      return (
        <div className="my-4 overflow-x-auto border rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                {headers.map((header, idx) => (
                  <th key={idx} className="border p-3 text-left font-semibold text-foreground">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-t hover:bg-muted/50">
                  {row.map((cell, colIdx) =>
                    typeof cell === "string" ? (
                      <td key={colIdx} className="border p-3 align-top text-foreground/80">
                        {cell}
                      </td>
                    ) : (
                      <td key={colIdx} className="border p-3 align-top">
                        <div className="font-semibold text-foreground">{cell.label}</div>
                        {cell.description && (
                          <div className="text-sm text-foreground/70 mt-1 leading-relaxed">{cell.description}</div>
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "badges": {
      const items = block.data.items.filter(Boolean);
      if (!items.length) return null;
      return (
        <div className="flex flex-wrap gap-2 my-4">
          {items.map((label, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 text-sm font-medium rounded-full"
              style={{
                background: "oklch(0.88 0.055 70 / 0.4)",
                border: "1px solid oklch(0.72 0.115 65 / 0.4)",
                color: "oklch(0.35 0.06 50)",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      );
    }

    case "steps": {
      const items = block.data.items.filter(i => i.title);
      if (!items.length) return null;
      return (
        <div className="my-4 space-y-5">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shrink-0"
                style={{
                  background: "oklch(0.42 0.065 48)",
                  color: "oklch(0.97 0.018 72)",
                }}
              >
                {idx + 1}
              </div>
              <div>
                <div className="font-semibold text-foreground">{item.title}</div>
                {item.description && (
                  <div className="text-sm text-foreground/70 mt-0.5 leading-relaxed">{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "list": {
      const items = block.data.items.filter(i => i.title);
      if (!items.length) return null;
      return (
        <ul className="my-4 space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "oklch(0.58 0.075 52)" }} />
              <div>
                <span className="font-semibold text-foreground">{item.title}</span>
                {item.description && (
                  <span className="text-foreground/80"> {item.description}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      );
    }

    case "link": {
      const { title, description, href, ctaLabel } = block.data;
      if (!title || !href) return null;
      const isInternal = href.startsWith("/");
      const content = (
        <div className="my-4 flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/40 cursor-pointer">
          <div>
            <div className="font-semibold text-foreground">{title}</div>
            {description && <div className="text-sm text-muted-foreground mt-1">{description}</div>}
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-primary shrink-0">
            {ctaLabel ?? "View"}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      );
      return isInternal ? (
        <Link href={href}>{content}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    case "overviewMeta": {
      const { role, timeline, team, responsibilitiesTitle, responsibilities } = block.data;
      const metaRows = [
        { label: "Role", value: role },
        { label: "Timeline", value: timeline },
        { label: "Team", value: team },
      ].filter(row => row.value);
      const items = (responsibilities ?? []).filter(Boolean);
      if (!metaRows.length && !items.length) return null;

      return (
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 my-6">
          {metaRows.length > 0 && (
            <div className="space-y-5">
              {metaRows.map(row => (
                <div key={row.label}>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "oklch(0.58 0.075 52)" }}
                  >
                    {row.label}
                  </div>
                  <div className="text-base text-foreground/90">{row.value}</div>
                </div>
              ))}
            </div>
          )}
          {items.length > 0 && (
            <div>
              {responsibilitiesTitle && (
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.58 0.075 52)" }}
                >
                  {responsibilitiesTitle}
                </div>
              )}
              <ul className="space-y-2.5">
                {items.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "oklch(0.58 0.075 52)" }} />
                    <span className="text-base text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    default:
      return null;
  }
}

// ─── Section grouping ──────────────────────────────────────────
// Splits the flat block list into top-level (H1) sections so each one can
// get its own jump-nav entry, color accent, and anchor.

type Section = { id: string; title: string; color: string; blocks: ContentBlock[] };

function groupIntoSections(blocks: ContentBlock[]): { intro: ContentBlock[]; sections: Section[] } {
  const intro: ContentBlock[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;
  let colorIdx = 0;

  for (const block of blocks) {
    if (block.type === "heading" && block.data.level === 1 && block.data.text) {
      current = {
        id: block.id,
        title: block.data.text,
        color: SECTION_COLORS[colorIdx % SECTION_COLORS.length],
        blocks: [],
      };
      colorIdx++;
      sections.push(current);
    } else if (current) {
      current.blocks.push(block);
    } else {
      intro.push(block);
    }
  }

  return { intro, sections };
}

// ─── Lightbox ───────────────────────────────────────────────────

function Lightbox({ zoom, onClose }: { zoom: ZoomState; onClose: () => void }) {
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom, onClose]);

  if (!zoom) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
      style={{ background: "oklch(0.1 0 0 / 0.85)" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ background: "oklch(1 0 0 / 0.12)" }}
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={zoom.src}
        alt={zoom.alt}
        onClick={e => e.stopPropagation()}
        className="max-w-full max-h-[88vh] rounded-lg shadow-2xl cursor-zoom-out"
      />
      {zoom.alt && (
        <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 text-center px-4">
          {zoom.alt}
        </p>
      )}
    </div>
  );
}

// ─── Jump nav ───────────────────────────────────────────────────

function JumpNav({ sections, activeId, className }: { sections: Section[]; activeId: string | null; className?: string }) {
  if (sections.length < 2) return null;

  // Plain `href="#id"` would collide with wouter's hash-based router (every
  // route already lives at `#/...`), so we scroll manually instead of
  // letting the browser touch location.hash.
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={className}>
      {sections.map(section => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => goTo(section.id)}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors shrink-0"
            style={{
              color: isActive ? "oklch(0.22 0.03 48)" : "oklch(0.52 0.030 52)",
              fontWeight: isActive ? 600 : 500,
              background: isActive ? "oklch(0.91 0.022 66)" : "transparent",
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{
                background: section.color,
                boxShadow: isActive ? `0 0 0 3px color-mix(in oklch, ${section.color} 20%, transparent)` : "none",
              }}
            />
            <span className="whitespace-nowrap lg:whitespace-normal lg:leading-snug">{section.title}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ─── Main page ─────────────────────────────────────────────────

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const zh = lang === "zh";

  const project = slug ? getProjectBySlug(slug) : null;
  const blocks = useMemo(() => (project && Array.isArray(project.blocks) ? project.blocks : []), [project]);
  const { intro, sections } = useMemo(() => groupIntoSections(blocks), [blocks]);

  const [zoom, setZoom] = useState<ZoomState>(null);
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);
  const onZoom = (src: string, alt: string) => setZoom({ src, alt });

  const sectionIdsKey = sections.map(s => s.id).join(",");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (sections.length < 2) return;
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    observerRef.current = observer;
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdsKey]);

  if (!project) {
    return (
      <div className="container max-w-3xl py-16 text-center">
        <p className="text-muted-foreground mb-4">{zh ? "找不到此作品" : "Project not found"}</p>
        <Button asChild variant="outline">
          <Link href="/projects"><ArrowLeft className="h-4 w-4 mr-2" />{zh ? "返回作品集" : "Back to Projects"}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl py-10">
      {/* Back link */}
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        {zh ? "返回作品集" : "Back to Projects"}
      </Link>

      {/* Cover image */}
      {project.coverImageUrl && (
        <img
          src={asset(project.coverImageUrl)}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8 border"
        />
      )}

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h1>

        {project.summary && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{project.summary}</p>
        )}

        {/* Tags */}
        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3">
          {project.projectUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1.5" />
                {zh ? "查看作品" : "View Project"}
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </header>

      <Separator className="mb-8" />

      {/* Mobile jump nav — sticky horizontal pill bar */}
      <JumpNav
        sections={sections}
        activeId={activeId}
        className="lg:hidden sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 mb-6 flex gap-1 overflow-x-auto py-2 border-b bg-background"
      />

      <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
        {/* Desktop jump nav — sticky sidebar */}
        <JumpNav
          sections={sections}
          activeId={activeId}
          className="hidden lg:flex lg:flex-col lg:gap-1 lg:sticky lg:top-24 lg:self-start"
        />

        {/* Content */}
        <div className="min-w-0">
          {blocks.length > 0 ? (
            <div className="space-y-2">
              {intro.map(block => (
                <RenderBlock key={block.id} block={block} onZoom={onZoom} />
              ))}
              {sections.map(section => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 mt-16 first:mt-0 pl-5 -ml-5 border-l-2"
                  style={{ borderColor: `color-mix(in oklch, ${section.color} 55%, transparent)` }}
                >
                  <h1
                    className="text-3xl font-bold mb-5"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.03 48)" }}
                  >
                    {section.title}
                  </h1>
                  <div className="space-y-2">
                    {section.blocks.map(block => (
                      <RenderBlock key={block.id} block={block} onZoom={onZoom} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : project.description ? (
            <div className="prose prose-neutral max-w-none">
              <p className="text-base leading-relaxed text-foreground/80 whitespace-pre-wrap">{project.description}</p>
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">{zh ? "此作品尚未填寫詳細內容。" : "No detailed content yet."}</p>
          )}

          {/* Screenshots */}
          {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">{zh ? "截圖" : "Screenshots"}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((url, idx) => (
                  <button key={idx} type="button" onClick={() => onZoom(asset(url), `screenshot-${idx + 1}`)} className="cursor-zoom-in">
                    <img src={asset(url)} alt={`screenshot-${idx + 1}`} className="rounded-xl border object-cover w-full" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Lightbox zoom={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
