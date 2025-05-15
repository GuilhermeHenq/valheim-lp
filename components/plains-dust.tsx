"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface DustParticle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  horizontalDistance: number
}

export function PlainsDust() {
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([])

  useEffect(() => {
    const newDustParticles: DustParticle[] = []

    for (let i = 0; i < 40; i++) {
      newDustParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 8 + 3,
        delay: Math.random() * 10,
        horizontalDistance: Math.random() * 100 + 50,
      })
    }

    setDustParticles(newDustParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dustParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-dust-drift"
          style={
            {
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: "rgba(210, 180, 140, 0.6)",
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              "--horizontal-distance": `${particle.horizontalDistance}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
