import { PageLayout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/content";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/assets";
import { format } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams } from "wouter";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const post = slug ? getPostBySlug(slug) : null;
  const dateLocale = lang === "zh" ? zhTW : enUS;
  const dateFormat = lang === "zh" ? "yyyy年MM月dd日" : "MMM dd, yyyy";

  if (!post) {
    return (
      <PageLayout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">{t.blog.notFound}</h1>
          <p className="text-muted-foreground mb-6">{t.blog.notFoundHint}</p>
          <Button asChild variant="outline">
            <Link href="/blog">{t.blog.backToBlog}</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container py-16 max-w-3xl">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          {t.blog.backToBlog}
        </Link>

        {/* Cover */}
        {post.coverImageUrl && (
          <div className="aspect-video rounded-xl overflow-hidden bg-muted mb-8">
            <img
              src={asset(post.coverImageUrl)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap text-sm text-muted-foreground">
            {post.publishedAt && (
              <time>
                {t.blog.publishedAt} {format(new Date(post.publishedAt), dateFormat, { locale: dateLocale })}
              </time>
            )}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          {post.excerpt && (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        {post.content && (
          <article className="prose prose-neutral max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </PageLayout>
  );
}
