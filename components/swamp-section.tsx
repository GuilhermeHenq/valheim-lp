"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function SwampSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []

    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <section id="swamp" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-biome-swamp-dark to-biome-swamp-light opacity-30"></div>
      <div className="fog-overlay opacity-40"></div>

      <div className="swamp-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="swamp-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(124, 252, 0, 0.3)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-biome-swamp-light">PÂNTANO</span>
            </h2>
            <p className="text-gray-300 mb-6">
              O Pântano é um bioma sombrio e perigoso, com águas rasas e venenosas, árvores mortas e uma atmosfera
              opressiva. É um local hostil, mas contém recursos essenciais para a progressão no jogo.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Sucata de ferro encontrada em criptas submersas",
                "Draugrs e sanguessugas espreitam nas águas escuras",
                "Raízes antigas para poções especiais",
                "Glow Mushrooms iluminam levemente o caminho",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-biome-swamp-glow mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="/pantano" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-biome-swamp-light text-white hover:bg-biome-swamp-light/80 transition-all duration-300">
                Explorar Pântano
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-biome-swamp-glow/20 to-biome-swamp-light/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-biome-swamp-light/30">
                <Image src="/images/swamp.png" alt="Pântano de Valheim" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="fog-overlay opacity-30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
