import { PageLayout } from "@/components/Layout";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { getVideos } from "@/content";
import { asset } from "@/lib/assets";
import { Play, Video as VideoIcon } from "lucide-react";
import { useState } from "react";

interface VideoItem {
  id: number;
  title: string;
  description?: string | null;
  coverImageUrl?: string | null;
  videoUrl?: string | null;
  embedUrl?: string | null;
  tags?: unknown;
}

function VideoPlayer({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <Dialog open onOpenChange={open => { if (!open) onClose(); }}>
      <DialogContent
        className="max-w-4xl p-0 overflow-hidden"
        style={{
          background: "oklch(0.99 0.012 75)",
          border: "1px solid oklch(0.72 0.115 65 / 0.4)",
          boxShadow: "0 20px 60px oklch(0.18 0.025 45 / 0.25)",
        }}
      >
        <DialogHeader className="p-4 pb-0">
          <DialogTitle
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.03 48)" }}
          >
            {video.title}
          </DialogTitle>
        </DialogHeader>
        <div className="p-4">
          {video.embedUrl ? (
            <div className="aspect-video rounded-lg overflow-hidden" style={{ border: "1px solid oklch(0.84 0.030 65)" }}>
              <iframe
                src={video.embedUrl}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : video.videoUrl ? (
            <div className="aspect-video rounded-lg overflow-hidden" style={{ border: "1px solid oklch(0.84 0.030 65)" }}>
              <video
                src={asset(video.videoUrl!)}
                controls
                className="w-full h-full bg-black"
                autoPlay
              />
            </div>
          ) : (
            <div
              className="aspect-video rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.93 0.018 72)" }}
            >
              <p style={{ color: "oklch(0.55 0.025 55)" }}>{t.videos.unavailable}</p>
            </div>
          )}
          {video.description && (
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "oklch(0.50 0.025 55)" }}>
              {video.description}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function VideosPage() {
  const { t } = useLanguage();
  const videos = getVideos();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

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
              <VideoIcon className="h-5 w-5" style={{ color: "oklch(0.45 0.07 50)" }} />
            </div>
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.025 45)" }}
            >
              {t.videos.title}
            </h1>
          </div>
          <p className="text-muted-foreground leading-relaxed">{t.videos.desc}</p>
        </div>

        {/* Guitar string separator */}
        <div className="guitar-string mb-10" />

        {/* Videos Grid */}
        {videos.length === 0 ? (
          <div className="text-center py-20" style={{ color: "oklch(0.55 0.025 55)" }}>
            <VideoIcon className="h-12 w-12 mx-auto mb-4 opacity-25" />
            <p className="text-lg mb-2">{t.videos.empty}</p>
            <p className="text-sm">{t.videos.emptyHint}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <div
                key={video.id}
                className="group rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
                style={{
                  background: "oklch(0.99 0.012 75)",
                  border: "1px solid oklch(0.84 0.030 65)",
                  boxShadow: "0 1px 4px oklch(0.35 0.06 50 / 0.07), inset 0 1px 0 oklch(1 0 0 / 0.7)",
                }}
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 16px oklch(0.35 0.06 50 / 0.13), inset 0 1px 0 oklch(1 0 0 / 0.7)";
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
                {/* Thumbnail */}
                <div
                  className="aspect-video relative overflow-hidden"
                  style={{ background: "oklch(0.88 0.055 70 / 0.3)" }}
                >
                  {video.coverImageUrl ? (
                    <img
                      src={asset(video.coverImageUrl!)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        backgroundImage: `repeating-linear-gradient(91deg, transparent, transparent 3px, oklch(0.78 0.055 55 / 0.12) 3px, oklch(0.78 0.055 55 / 0.12) 4px)`,
                      }}
                    >
                      <VideoIcon className="h-10 w-10" style={{ color: "oklch(0.58 0.075 52 / 0.35)" }} />
                    </div>
                  )}
                  {/* Play overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-colors duration-200"
                    style={{ background: "oklch(0.18 0.025 45 / 0)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "oklch(0.18 0.025 45 / 0.3)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "oklch(0.18 0.025 45 / 0)"; }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 active:scale-95"
                      style={{
                        background: "oklch(0.97 0.018 72 / 0.92)",
                        boxShadow: "0 4px 12px oklch(0.18 0.025 45 / 0.3)",
                      }}
                    >
                      <Play className="h-5 w-5 ml-0.5" style={{ color: "oklch(0.35 0.06 50)" }} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3
                    className="font-semibold mb-1 line-clamp-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.03 48)" }}
                  >
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-sm line-clamp-2 mb-2" style={{ color: "oklch(0.50 0.025 55)" }}>
                      {video.description}
                    </p>
                  )}
                  {Array.isArray(video.tags) && (video.tags as string[]).length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {(video.tags as string[]).slice(0, 3).map(tag => (
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
            ))}
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </PageLayout>
  );
}
