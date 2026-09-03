import { useParams, Link } from "wouter";
import { getProjectBySlug } from "@/content";
import type { ContentBlock } from "@/content/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

// ─── Block Renderers ───────────────────────────────────────────

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading": {
      const { text, level } = block.data;
      if (!text) return null;
      if (level === 1) {
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
      return (
        <figure className="my-6 flex flex-col items-center">
          <img
            src={asset(block.data.url)}
            alt={block.data.caption ?? ""}
            className="max-w-full max-h-[560px] w-auto h-auto object-contain rounded-xl border"
          />
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
          {items.map((item) => (
            <div key={item.id} className={`${widthMap[item.width]} flex flex-col`}>
              {item.type === "image" ? (
                <img src={asset(item.url)} alt={item.caption ?? ""} className="w-full h-auto rounded-xl border" />
              ) : (
                <video src={asset(item.url)} className="w-full h-auto rounded-xl border" controls />
              )}
              {item.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-2">{item.caption}</figcaption>
              )}
            </div>
          ))}
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

    default:
      return null;
  }
}

// ─── Main page ─────────────────────────────────────────────────

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const zh = lang === "zh";

  const project = slug ? getProjectBySlug(slug) : null;

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

  const blocks = Array.isArray(project.blocks) ? project.blocks : [];

  return (
    <div className="container max-w-3xl py-10">
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

      {/* Blocks content */}
      {blocks.length > 0 ? (
        <div className="space-y-2">
          {blocks.map(block => (
            <RenderBlock key={block.id} block={block} />
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
              <img key={idx} src={asset(url)} alt={`screenshot-${idx + 1}`} className="rounded-xl border object-cover w-full" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
