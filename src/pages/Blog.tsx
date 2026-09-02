import { PageLayout } from "@/components/Layout";
import { getPosts } from "@/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/assets";
import { format } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import { BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useMemo } from "react";

export default function Blog() {
  const { t, lang } = useLanguage();
  const posts = useMemo(() => getPosts(), []);
  const dateLocale = lang === "zh" ? zhTW : enUS;
  const dateFormat = lang === "zh" ? "yyyy年MM月dd日" : "MMM dd, yyyy";

  return (
    <PageLayout>
      <div className="container py-16">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="p-2 rounded-lg"
              style={{
                background: "oklch(0.88 0.055 70 / 0.4)",
                border: "1px solid oklch(0.72 0.115 65 / 0.3)",
              }}
            >
              <BookOpen className="h-5 w-5" style={{ color: "oklch(0.45 0.07 50)" }} />
            </div>
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.025 45)" }}
            >
              {t.blog.title}
            </h1>
          </div>
          <p className="text-muted-foreground leading-relaxed">{t.blog.desc}</p>
        </div>

        {/* Guitar string separator */}
        <div className="guitar-string mb-10" />

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="text-center py-20" style={{ color: "oklch(0.55 0.025 55)" }}>
            <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-25" />
            <p className="text-lg mb-2">{t.blog.empty}</p>
            <p className="text-sm">{t.blog.emptyHint}</p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div
                  className="group rounded-xl cursor-pointer transition-all duration-200"
                  style={{
                    background: "oklch(0.99 0.012 75)",
                    border: "1px solid oklch(0.84 0.030 65)",
                    boxShadow: "0 1px 4px oklch(0.35 0.06 50 / 0.06), inset 0 1px 0 oklch(1 0 0 / 0.7)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 4px 16px oklch(0.35 0.06 50 / 0.11), inset 0 1px 0 oklch(1 0 0 / 0.7)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.72 0.115 65 / 0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 1px 4px oklch(0.35 0.06 50 / 0.06), inset 0 1px 0 oklch(1 0 0 / 0.7)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.84 0.030 65)";
                  }}
                >
                  <div className="p-6">
                    <div className="flex gap-5">
                      {/* Cover image */}
                      {post.coverImageUrl && (
                        <div
                          className="hidden sm:block w-28 h-20 rounded-lg overflow-hidden shrink-0"
                          style={{
                            border: "1px solid oklch(0.84 0.030 65)",
                            boxShadow: "0 1px 4px oklch(0.35 0.06 50 / 0.08)",
                          }}
                        >
                          <img
                            src={asset(post.coverImageUrl)}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h2
                          className="text-xl font-semibold mb-2 line-clamp-2 transition-colors"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "oklch(0.22 0.03 48)",
                          }}
                        >
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p
                            className="text-sm leading-relaxed line-clamp-2 mb-3"
                            style={{ color: "oklch(0.50 0.025 55)" }}
                          >
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-3 flex-wrap">
                          {post.publishedAt && (
                            <span
                              className="text-xs"
                              style={{ color: "oklch(0.60 0.025 55)" }}
                            >
                              {format(new Date(post.publishedAt), dateFormat, { locale: dateLocale })}
                            </span>
                          )}
                          {post.publishedAt && Array.isArray(post.tags) && post.tags.length > 0 && (
                            <span
                              className="w-1 h-1 rounded-full"
                              style={{ background: "oklch(0.72 0.115 65 / 0.5)" }}
                            />
                          )}
                          {Array.isArray(post.tags) && post.tags.slice(0, 3).map(tag => (
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
                      </div>
                    </div>
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
