import { PageLayout } from "@/components/Layout";
import { getCategories, getProjects } from "@/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/assets";
import { useMemo, useState } from "react";
import { Link } from "wouter";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

  const categories = useMemo(() => getCategories(), []);
  const projects = useMemo(
    () => getProjects(selectedCategory ? { categoryId: selectedCategory } : {}),
    [selectedCategory]
  );

  return (
    <PageLayout>
      <div className="container py-16">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.025 45)" }}
          >
            {t.projects.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed">{t.projects.desc}</p>
        </div>

        {/* Category Filter — warm pill buttons */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {[{ id: undefined, name: t.projects.all }, ...categories].map(cat => {
              const isActive = cat.id === undefined ? !selectedCategory : selectedCategory === cat.id;
              return (
                <button
                  key={cat.id ?? "all"}
                  onClick={() => setSelectedCategory(cat.id as number | undefined)}
                  className="px-3.5 py-1.5 text-sm rounded-full transition-all duration-150"
                  style={
                    isActive
                      ? {
                          background: "oklch(0.35 0.06 50)",
                          color: "oklch(0.97 0.018 72)",
                          border: "1px solid oklch(0.35 0.06 50)",
                          boxShadow: "0 2px 6px oklch(0.35 0.06 50 / 0.25)",
                        }
                      : {
                          background: "oklch(0.99 0.012 75)",
                          color: "oklch(0.50 0.025 55)",
                          border: "1px solid oklch(0.84 0.030 65)",
                        }
                  }
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Guitar string separator */}
        <div className="guitar-string mb-10" />

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-20" style={{ color: "oklch(0.55 0.025 55)" }}>
            <p className="text-lg mb-2">{t.projects.empty}</p>
            <p className="text-sm">{t.projects.emptyHint}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <div
                  className="group h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
                  style={{
                    background: "oklch(0.99 0.012 75)",
                    border: "1px solid oklch(0.84 0.030 65)",
                    boxShadow: "0 1px 4px oklch(0.35 0.06 50 / 0.07), inset 0 1px 0 oklch(1 0 0 / 0.7)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 4px 16px oklch(0.35 0.06 50 / 0.13), 0 1px 4px oklch(0.35 0.06 50 / 0.08), inset 0 1px 0 oklch(1 0 0 / 0.7)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.72 0.115 65 / 0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 1px 4px oklch(0.35 0.06 50 / 0.07), inset 0 1px 0 oklch(1 0 0 / 0.7)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.84 0.030 65)";
                  }}
                >
                  {/* Cover image */}
                  {project.coverImageUrl ? (
                    <div className="aspect-video overflow-hidden" style={{ background: "oklch(0.93 0.018 72)" }}>
                      <img
                        src={asset(project.coverImageUrl)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-video flex items-center justify-center relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, oklch(0.88 0.055 70 / 0.5), oklch(0.82 0.045 60 / 0.4))",
                        backgroundImage: `repeating-linear-gradient(91deg, transparent, transparent 3px, oklch(0.78 0.055 55 / 0.12) 3px, oklch(0.78 0.055 55 / 0.12) 4px)`,
                      }}
                    >
                      <span
                        className="text-4xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "oklch(0.55 0.065 60 / 0.5)",
                        }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        className="font-semibold line-clamp-1 transition-colors"
                        style={{ color: "oklch(0.22 0.03 48)", fontFamily: "'Playfair Display', serif" }}
                      >
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full shrink-0"
                          style={{
                            background: "oklch(0.88 0.055 70 / 0.5)",
                            border: "1px solid oklch(0.72 0.115 65 / 0.4)",
                            color: "oklch(0.40 0.06 52)",
                          }}
                        >
                          {t.projects.featured}
                        </span>
                      )}
                    </div>
                    {project.summary && (
                      <p className="text-sm line-clamp-2 mb-3" style={{ color: "oklch(0.50 0.025 55)" }}>
                        {project.summary}
                      </p>
                    )}
                    {Array.isArray(project.tags) && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-md"
                            style={{
                              background: "oklch(0.93 0.018 72)",
                              border: "1px solid oklch(0.84 0.030 65)",
                              color: "oklch(0.45 0.025 55)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
