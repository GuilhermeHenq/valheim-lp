"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = [
      "rgba(222, 184, 135, 0.2)",
      "rgba(100, 180, 220, 0.2)",
      "rgba(77, 128, 97, 0.2)",
      "rgba(255, 200, 100, 0.2)",
    ]

    const newParticles: Particle[] = []

    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 + 100, // Start below the viewport
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="particles-container">
      <div className="mist-overlay"></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
