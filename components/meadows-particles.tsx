"use client"

import { useEffect, useState } from "react"

interface Leaf {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  duration: number
  delay: number
  color: string
}

export function MeadowsParticles() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    const colors = [
      "rgba(139, 195, 74, 0.7)",
      "rgba(156, 204, 101, 0.7)",
      "rgba(124, 179, 66, 0.7)",
      "rgba(104, 159, 56, 0.7)",
    ]

    const newLeaves: Leaf[] = []

    for (let i = 0; i < 30; i++) {
      newLeaves.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 10,
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setLeaves(newLeaves)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-falling-leaf"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            backgroundColor: leaf.color,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            transform: `rotate(${leaf.rotation}deg)`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
