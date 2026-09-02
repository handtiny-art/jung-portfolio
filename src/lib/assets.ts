// Resolves a local asset path (e.g. "/assets/projects/foo.png") against the
// site's configured base path, so it works both in dev and when deployed to
// a GitHub Pages subpath (e.g. https://user.github.io/jung-portfolio/).
// External URLs (http/https) are passed through unchanged.
export function asset(path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL;
  return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}
