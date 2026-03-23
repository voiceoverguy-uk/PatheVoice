import { useState, useEffect, useRef, useCallback } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
  subtitle?: string;
  logoSrc: string;
}

function formatTime(t: number) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function AudioPlayer({ src, title, subtitle, logoSrc }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveformRef = useRef<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [waveformReady, setWaveformReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function buildWaveform() {
      try {
        const res = await fetch(src);
        const buf = await res.arrayBuffer();
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const decoded = await ctx.decodeAudioData(buf);
        await ctx.close();
        if (cancelled) return;

        const raw = decoded.getChannelData(0);
        const BARS = 120;
        const block = Math.floor(raw.length / BARS);
        const samples: number[] = [];
        for (let i = 0; i < BARS; i++) {
          let sum = 0;
          for (let j = 0; j < block; j++) sum += Math.abs(raw[i * block + j]);
          samples.push(sum / block);
        }
        const max = Math.max(...samples, 0.001);
        waveformRef.current = samples.map((v) => v / max);
      } catch {
        waveformRef.current = Array.from({ length: 120 }, (_, i) =>
          0.3 + 0.5 * Math.abs(Math.sin(i * 0.4)) + 0.2 * Math.random()
        );
      }
      if (!cancelled) setWaveformReady(true);
    }
    buildWaveform();
    return () => { cancelled = true; };
  }, [src]);

  const draw = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const bars = waveformRef.current;
    if (!bars.length) return;
    const barW = width / bars.length;
    const progressX = width * progress;

    bars.forEach((amp, i) => {
      const x = i * barW;
      const barH = Math.max(amp * height * 0.88, 3);
      const y = (height - barH) / 2;
      const gap = 1.5;

      ctx.fillStyle = x < progressX ? "#FFB800" : "rgba(255,255,255,0.22)";
      const r = Math.min(2, barW / 2 - 0.5);
      const bw = Math.max(barW - gap * 2, 1);
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(x + gap, y, bw, barH, r);
      } else {
        ctx.rect(x + gap, y, bw, barH);
      }
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    if (waveformReady) draw(currentTime && duration ? currentTime / duration : 0);
  }, [waveformReady, draw, currentTime, duration]);

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (!a) return;
    setCurrentTime(a.currentTime);
    draw(a.duration ? a.currentTime / a.duration : 0);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    draw(0);
  };

  const togglePlay = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
    } else {
      await a.play();
      setIsPlaying(true);
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const a = audioRef.current;
    if (!canvas || !a || !duration) return;
    const rect = canvas.getBoundingClientRect();
    const progress = (e.clientX - rect.left) / rect.width;
    a.currentTime = progress * duration;
    setCurrentTime(a.currentTime);
    draw(progress);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  const progress = duration ? currentTime / duration : 0;

  return (
    <div className="bg-[#0A0A0A] border border-accent/25 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="flex items-center gap-5 mb-6">
        <img
          src={logoSrc}
          alt="Pathé logo"
          className="w-20 h-20 object-contain shrink-0"
        />
        <div>
          {subtitle && (
            <p className="text-xs uppercase tracking-widest text-accent/70 font-serif mb-1">
              {subtitle}
            </p>
          )}
          <h3 className="font-newsreel text-2xl tracking-wider text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={700}
        height={88}
        className="w-full cursor-pointer mb-4"
        style={{ height: "72px" }}
        onClick={handleCanvasClick}
      />

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="w-11 h-11 rounded-full bg-accent text-[#141414] flex items-center justify-center shrink-0 hover:bg-accent/80 transition-colors shadow-md"
        >
          {isPlaying ? (
            <svg width="13" height="14" viewBox="0 0 13 14" fill="currentColor">
              <rect x="1" y="1" width="4" height="12" rx="1.5" />
              <rect x="8" y="1" width="4" height="12" rx="1.5" />
            </svg>
          ) : (
            <svg width="13" height="14" viewBox="0 0 13 14" fill="currentColor" style={{ marginLeft: "2px" }}>
              <path d="M1.5 1.5l10 5.5-10 5.5z" />
            </svg>
          )}
        </button>

        <span className="text-sm font-mono text-white/50 shrink-0 tabular-nums w-28">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <div className="ml-auto flex items-center gap-3">
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            className="text-white/40 shrink-0"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            {volume > 0 && <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />}
            {volume > 0.5 && <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />}
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 cursor-pointer accent-[#FFB800]"
            aria-label="Volume"
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />
    </div>
  );
}
