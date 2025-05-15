"use client";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function AudioPlayer({ className }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.2); 
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/valheim-music.mp3");
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        console.warn("Autoplay bloqueado. Usuário precisa interagir primeiro.");
        setIsPlaying(false);
      });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Play bloqueado:", err));
    }
  };

  const toggleMute = () => {
    setIsMuted((m) => !m);
  };

  const handleVolumeChange = (v: number[]) => {
    setVolume(v[0]);
    if (v[0] > 0 && isMuted) setIsMuted(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-2 bg-valheim-dark/80 backdrop-blur-md rounded-full p-2 transition-all duration-300",
        showControls ? "h-auto" : "h-12",
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Play/Pause */}
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className={cn(
          "h-8 w-8 rounded-full text-valheim-gold hover:text-white transition-colors",
          isPlaying
            ? "bg-valheim-gold/20 hover:bg-valheim-gold/30"
            : "bg-red-500/20 hover:bg-red-500/40 text-red-500"
        )}
      >
        <Music className="h-4 w-4" />
        <span className="sr-only">{isPlaying ? "Pausar" : "Tocar"} música</span>
      </Button>

      {showControls && (
        <>
          {/* Volume */}
          <div className="h-24 flex items-center justify-center">
            <Slider
              orientation="vertical"
              value={[isMuted ? 0 : volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className={cn(
                "h-24 w-4 flex flex-col items-center justify-center gap-2",
                "[&>[data-orientation=vertical]]:relative",
                "[&_[data-orientation=vertical]]:w-full",
                "[&_[data-orientation=vertical]]:h-full",
                "[&_[data-orientation=vertical]]:rounded-full",
                "[&_[data-orientation=vertical]]:bg-valheim-gold/20",
                "[&_[data-orientation=vertical]>[data-state=range]]:bg-blue-500",
                "[&_[data-orientation=vertical]>[data-state=range]]:rounded-full",
                "[&_[data-orientation=vertical]>[data-state=range]]:absolute",
                "[&_[data-orientation=vertical]>[data-state=range]]:bottom-0",
                "[&_[data-orientation=vertical]>[data-state=range]]:w-full",
                "[&_[role=slider]]:h-6 [&_[role=slider]]:w-6",
                "[&_[role=slider]]:rounded-full",
                "[&_[role=slider]]:bg-valheim-gold",
                "[&_[role=slider]]:border-2 [&_[role=slider]]:border-valheim-gold"
              )}
            />


          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="h-8 w-8 rounded-full bg-valheim-gold/20 text-valheim-gold hover:bg-valheim-gold/30 hover:text-white"
          >
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            <span className="sr-only">{isMuted ? "Ativar" : "Desativar"} som</span>
          </Button>
        </>
      )}
    </div>
  );
}
