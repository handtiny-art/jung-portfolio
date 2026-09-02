export type HeadingBlock = { id: string; type: "heading"; data: { text: string; level: 1 | 2 | 3 } };
export type TextBlock = { id: string; type: "text"; data: { text: string } };
export type ImageBlock = { id: string; type: "image"; data: { url: string; caption?: string } };
export type MetricsBlock = { id: string; type: "metrics"; data: { items: { metric: string; value: string; description?: string }[] } };
export type QuoteBlock = { id: string; type: "quote"; data: { text: string; author?: string } };
export type DividerBlock = { id: string; type: "divider"; data: Record<string, never> };
export type ColumnsBlock = { id: string; type: "columns"; data: { columns: { heading: string; content: string }[] } };
export type MediaGridBlock = {
  id: string;
  type: "mediaGrid";
  data: { items: { id: string; type: "image" | "video"; url: string; width: "full" | "half" | "third" | "quarter"; caption?: string }[] };
};
export type TableBlock = { id: string; type: "table"; data: { headers: string[]; rows: string[][] } };

export type ContentBlock =
  | HeadingBlock
  | TextBlock
  | ImageBlock
  | MetricsBlock
  | QuoteBlock
  | DividerBlock
  | ColumnsBlock
  | MediaGridBlock
  | TableBlock;

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  summary?: string | null;
  description?: string | null;
  categoryId?: number | null;
  coverImageUrl?: string | null;
  screenshots?: string[];
  projectUrl?: string | null;
  githubUrl?: string | null;
  tags?: string[];
  published: boolean;
  featured?: boolean;
  sortOrder?: number;
  blocks?: ContentBlock[];
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  coverImageUrl?: string | null;
  tags?: string[];
  published: boolean;
  publishedAt?: string | null;
}

export interface MusicTrack {
  id: number;
  title: string;
  artist?: string | null;
  album?: string | null;
  description?: string | null;
  genre?: string | null;
  coverImageUrl?: string | null;
  audioUrl?: string | null;
  duration?: number | null;
  tags?: string[];
  published: boolean;
  sortOrder?: number;
}

export interface Video {
  id: number;
  title: string;
  description?: string | null;
  coverImageUrl?: string | null;
  videoUrl?: string | null;
  embedUrl?: string | null;
  tags?: string[];
  published: boolean;
  sortOrder?: number;
}
