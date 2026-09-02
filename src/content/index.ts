import { categories } from "./categories";
import { music } from "./music";
import { posts } from "./posts";
import { projects } from "./projects";
import { videos } from "./videos";

export * from "./types";

export function getCategories() {
  return categories;
}

export function getProjects(opts?: { categoryId?: number; publishedOnly?: boolean }) {
  const publishedOnly = opts?.publishedOnly ?? true;
  return projects
    .filter(p => (publishedOnly ? p.published : true))
    .filter(p => (opts?.categoryId ? p.categoryId === opts.categoryId : true))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug && p.published) ?? null;
}

export function getPosts(opts?: { publishedOnly?: boolean }) {
  const publishedOnly = opts?.publishedOnly ?? true;
  return posts
    .filter(p => (publishedOnly ? p.published : true))
    .sort((a, b) => {
      const at = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bt = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bt - at;
    });
}

export function getPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug && p.published) ?? null;
}

export function getMusic(opts?: { publishedOnly?: boolean }) {
  const publishedOnly = opts?.publishedOnly ?? true;
  return music
    .filter(m => (publishedOnly ? m.published : true))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getVideos(opts?: { publishedOnly?: boolean }) {
  const publishedOnly = opts?.publishedOnly ?? true;
  return videos
    .filter(v => (publishedOnly ? v.published : true))
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}
