"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
  className?: string
}

export function AudioPlayer({ className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("/audio/valheim-theme.mp3")
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir áudio:", error)
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.volume = 0
    } else {
      audioRef.current.volume = volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    if (value[0] > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-valheim-dark/80 backdrop-blur-md rounded-full p-2 transition-all duration-300",
        showControls ? "w-auto" : "w-12",
        className,
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="h-8 w-8 rounded-full bg-valheim-gold/20 text-valheim-gold hover:bg-valheim-gold/30 hover:text-white"
      >
        <Music className="h-4 w-4" />
        <span className="sr-only">{isPlaying ? "Pausar" : "Tocar"} música</span>
      </Button>

      {showControls && (
        <>
          <div className="w-24">
            <Slider
              value={[isMuted ? 0 : volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="cursor-pointer"
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
  )
}
