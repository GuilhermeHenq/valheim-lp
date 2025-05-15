"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  horizontalMovement: number
}

export function MountainSnow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const newSnowflakes: Snowflake[] = []

    for (let i = 0; i < 100; i++) {
      newSnowflakes.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 10,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.3 + 0.7,
        duration: Math.random() * 15 + 5,
        delay: Math.random() * 10,
        horizontalMovement: Math.random() * 10 - 5,
      })
    }

    setSnowflakes(newSnowflakes)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute rounded-full animate-falling-snow"
          style={
            {
              left: `${snowflake.x}%`,
              top: `${snowflake.y}%`,
              width: `${snowflake.size}px`,
              height: `${snowflake.size}px`,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              opacity: snowflake.opacity,
              animationDuration: `${snowflake.duration}s`,
              animationDelay: `${snowflake.delay}s`,
              "--horizontal-movement": `${snowflake.horizontalMovement}%`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
