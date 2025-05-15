"use client"

import { useEffect, useState } from "react"

interface SwampParticle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export function SwampParticles() {
  const [particles, setParticles] = useState<SwampParticle[]>([])

  useEffect(() => {
    const colors = [
      "rgba(124, 252, 0, 0.4)",
      "rgba(144, 238, 144, 0.4)",
      "rgba(173, 255, 47, 0.4)",
      "rgba(50, 205, 50, 0.4)",
    ]

    const newParticles: SwampParticle[] = []

    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-swamp-glow"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color}`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
