import { PageLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import { getMusic } from "@/content";
import { asset } from "@/lib/assets";
import { cn } from "@/lib/utils";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music as MusicIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MusicPage() {
  const { t } = useLanguage();
  const tracks = getMusic();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = currentIdx !== null ? tracks[currentIdx] : null;

  const playTrack = useCallback((idx: number) => {
    setCurrentIdx(idx);
    setCurrentTime(0);
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (currentTrack?.audioUrl) {
      audio.src = asset(currentTrack.audioUrl);
      audio.load();
      if (isPlaying) audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play().catch(() => setIsPlaying(false));
    else audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };
  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };
  const handleEnded = () => {
    if (currentIdx !== null && currentIdx < tracks.length - 1) playTrack(currentIdx + 1);
    else setIsPlaying(false);
  };
  const handleSeek = (val: number[]) => {
    if (audioRef.current) { audioRef.current.currentTime = val[0]; setCurrentTime(val[0]); }
  };
  const prev = () => { if (currentIdx !== null && currentIdx > 0) playTrack(currentIdx - 1); };
  const next = () => { if (currentIdx !== null && currentIdx < tracks.length - 1) playTrack(currentIdx + 1); };

  return (
    <PageLayout>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="container py-16">
        {/* Header with guitar string decoration */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            {/* Guitar sound hole icon */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "radial-gradient(circle at 35% 35%, oklch(0.82 0.055 68), oklch(0.42 0.065 50))",
                border: "2px solid oklch(0.58 0.075 52)",
                boxShadow: "inset 0 1px 3px oklch(1 0 0 / 0.2), 0 2px 6px oklch(0.35 0.06 50 / 0.2)",
              }}
            >
              <MusicIcon className="h-4 w-4" style={{ color: "oklch(0.95 0.01 75)" }} />
            </div>
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.18 0.025 45)" }}
            >
              {t.music.title}
            </h1>
          </div>
          <p className="text-muted-foreground leading-relaxed">{t.music.desc}</p>
        </div>

        {/* Guitar strings decoration */}
        <div className="relative mb-10 h-6 overflow-hidden">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className="absolute left-0 right-0"
              style={{
                top: `${i * 4 + 2}px`,
                height: `${0.5 + i * 0.2}px`,
                background: `linear-gradient(90deg, transparent 0%, oklch(0.72 0.115 65 / ${0.15 + i * 0.06}) 10%, oklch(0.58 0.075 52 / ${0.3 + i * 0.08}) 50%, oklch(0.72 0.115 65 / ${0.15 + i * 0.06}) 90%, transparent 100%)`,
                boxShadow: `0 0 ${1 + i}px oklch(0.72 0.115 65 / 0.15)`,
              }}
            />
          ))}
        </div>

        {/* Sticky Player */}
        {currentTrack && (
          <div className="sticky top-16 z-40 mb-8">
            <div
              className="rounded-xl p-4 backdrop-blur-md"
              style={{
                background: "oklch(0.96 0.025 68 / 0.97)",
                border: "1px solid oklch(0.72 0.115 65 / 0.4)",
                boxShadow: "0 4px 20px oklch(0.35 0.06 50 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.6)",
                backgroundImage: `repeating-linear-gradient(91deg, transparent, transparent 3px, oklch(0.82 0.045 60 / 0.12) 3px, oklch(0.82 0.045 60 / 0.12) 4px)`,
              }}
            >
              <div className="flex items-center gap-4">
                {/* Cover */}
                <div
                  className="w-12 h-12 rounded-lg overflow-hidden shrink-0"
                  style={{
                    border: "1px solid oklch(0.72 0.115 65 / 0.3)",
                    boxShadow: "0 2px 6px oklch(0.35 0.06 50 / 0.15)",
                  }}
                >
                  {currentTrack.coverImageUrl ? (
                    <img src={asset(currentTrack.coverImageUrl)} alt={currentTrack.title} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: "oklch(0.88 0.055 70 / 0.5)" }}
                    >
                      <MusicIcon className="h-5 w-5" style={{ color: "oklch(0.45 0.07 50)" }} />
                    </div>
                  )}
                </div>
                {/* Info + Progress */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-semibold text-sm truncate"
                    style={{ color: "oklch(0.22 0.03 48)" }}
                  >
                    {currentTrack.title}
                  </p>
                  {currentTrack.artist && (
                    <p className="text-xs truncate" style={{ color: "oklch(0.50 0.025 55)" }}>
                      {currentTrack.artist}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs w-8 text-right" style={{ color: "oklch(0.55 0.025 55)" }}>
                      {formatTime(currentTime)}
                    </span>
                    <Slider
                      value={[currentTime]}
                      max={duration || 100}
                      step={0.1}
                      onValueChange={handleSeek}
                      className="flex-1"
                    />
                    <span className="text-xs w-8" style={{ color: "oklch(0.55 0.025 55)" }}>
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
                {/* Controls */}
                <div className="flex items-center gap-1 shrink-0">
                  <Button
                    variant="ghost" size="icon" className="h-8 w-8"
                    onClick={prev} disabled={currentIdx === 0}
                    style={{ color: "oklch(0.45 0.07 50)" }}
                  >
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <button
                    className="h-9 w-9 rounded-full flex items-center justify-center transition-all duration-150 active:scale-95"
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: "oklch(0.35 0.06 50)",
                      color: "oklch(0.97 0.018 72)",
                      boxShadow: "0 2px 8px oklch(0.35 0.06 50 / 0.35), inset 0 1px 0 oklch(1 0 0 / 0.15)",
                    }}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <Button
                    variant="ghost" size="icon" className="h-8 w-8"
                    onClick={next} disabled={currentIdx === tracks.length - 1}
                    style={{ color: "oklch(0.45 0.07 50)" }}
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost" size="icon" className="h-8 w-8"
                    onClick={() => setMuted(!muted)}
                    style={{ color: "oklch(0.45 0.07 50)" }}
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  <Slider
                    value={[muted ? 0 : volume]}
                    max={1} step={0.01}
                    onValueChange={val => { setVolume(val[0]); setMuted(false); }}
                    className="w-20 hidden sm:flex"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Track List */}
        {tracks.length === 0 ? (
          <div className="text-center py-20" style={{ color: "oklch(0.55 0.025 55)" }}>
            <MusicIcon className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg mb-2">{t.music.empty}</p>
            <p className="text-sm">{t.music.emptyHint}</p>
          </div>
        ) : (
          <div className="space-y-2">
            {tracks.map((track, idx) => {
              const isActive = currentIdx === idx;
              return (
                <div
                  key={track.id}
                  className="group rounded-xl cursor-pointer transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: "oklch(0.88 0.055 70 / 0.35)",
                          border: "1px solid oklch(0.72 0.115 65 / 0.5)",
                          boxShadow: "0 2px 8px oklch(0.35 0.06 50 / 0.10), inset 0 1px 0 oklch(1 0 0 / 0.5)",
                        }
                      : {
                          background: "oklch(0.99 0.012 75)",
                          border: "1px solid oklch(0.84 0.030 65)",
                          boxShadow: "0 1px 3px oklch(0.35 0.06 50 / 0.05)",
                        }
                  }
                  onClick={() => {
                    if (isActive) setIsPlaying(!isPlaying);
                    else playTrack(idx);
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 3px 10px oklch(0.35 0.06 50 / 0.10)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.72 0.115 65 / 0.35)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px oklch(0.35 0.06 50 / 0.05)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.84 0.030 65)";
                    }
                  }}
                >
                  <div className="p-4 flex items-center gap-4">
                    {/* Track number / playing bars */}
                    <div className="w-8 text-center shrink-0">
                      {isActive && isPlaying ? (
                        <div className="flex items-end justify-center gap-0.5 h-5">
                          {[1, 2, 3].map(b => (
                            <div
                              key={b}
                              className="w-1 rounded-full animate-bounce"
                              style={{
                                height: `${8 + b * 4}px`,
                                animationDelay: `${b * 0.1}s`,
                                background: "oklch(0.45 0.07 50)",
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <span
                          className="text-sm"
                          style={{ color: isActive ? "oklch(0.35 0.06 50)" : "oklch(0.60 0.025 55)" }}
                        >
                          {idx + 1}
                        </span>
                      )}
                    </div>
                    {/* Cover */}
                    <div
                      className="w-12 h-12 rounded-lg overflow-hidden shrink-0"
                      style={{
                        border: "1px solid oklch(0.84 0.030 65)",
                        boxShadow: "0 1px 4px oklch(0.35 0.06 50 / 0.10)",
                      }}
                    >
                      {track.coverImageUrl ? (
                        <img src={asset(track.coverImageUrl)} alt={track.title} className="w-full h-full object-cover" />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ background: "oklch(0.88 0.055 70 / 0.4)" }}
                        >
                          <MusicIcon className="h-5 w-5" style={{ color: "oklch(0.55 0.065 60)" }} />
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-medium truncate"
                        style={{ color: isActive ? "oklch(0.25 0.04 50)" : "oklch(0.22 0.03 48)" }}
                      >
                        {track.title}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap mt-0.5">
                        {track.artist && (
                          <span className="text-sm" style={{ color: "oklch(0.55 0.025 55)" }}>
                            {track.artist}
                          </span>
                        )}
                        {track.genre && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "oklch(0.88 0.055 70 / 0.4)",
                              border: "1px solid oklch(0.72 0.115 65 / 0.3)",
                              color: "oklch(0.40 0.06 52)",
                            }}
                          >
                            {track.genre}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Duration */}
                    {track.duration && (
                      <span className="text-sm shrink-0" style={{ color: "oklch(0.60 0.025 55)" }}>
                        {formatTime(track.duration)}
                      </span>
                    )}
                    {/* Hover play button */}
                    <button
                      className="h-8 w-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150 shrink-0 active:scale-95"
                      style={{
                        background: "oklch(0.35 0.06 50)",
                        color: "oklch(0.97 0.018 72)",
                        boxShadow: "0 2px 6px oklch(0.35 0.06 50 / 0.3)",
                      }}
                      onClick={e => {
                        e.stopPropagation();
                        if (isActive) setIsPlaying(!isPlaying);
                        else playTrack(idx);
                      }}
                    >
                      {isActive && isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
