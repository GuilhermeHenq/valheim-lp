"use client"

import { useEffect, useState } from "react"

interface FogCloud {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

export function ForestFog() {
  const [fogClouds, setFogClouds] = useState<FogCloud[]>([])

  useEffect(() => {
    const newFogClouds: FogCloud[] = []

    for (let i = 0; i < 15; i++) {
      newFogClouds.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 300 + 200,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 60 + 40,
        delay: Math.random() * 10,
      })
    }

    setFogClouds(newFogClouds)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fogClouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute rounded-full animate-fog-drift"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size}px`,
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
            opacity: cloud.opacity,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
