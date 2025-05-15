"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function MeadowsSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []

    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <section id="meadows" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-biome-meadows-dark to-biome-meadows-light opacity-30"></div>

      <div className="meadows-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="meadows-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
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
              <span className="text-biome-meadows-light">PRADO</span>
            </h2>
            <p className="text-gray-300 mb-6">
              O Prado é o bioma inicial de Valheim, caracterizado por campos abertos, florestas leves e colinas suaves.
              É o ambiente mais pacífico do jogo, perfeito para estabelecer sua primeira base e aprender os fundamentos
              da sobrevivência.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Recursos abundantes como madeira, pedra e couro",
                "Inimigos fracos como Greylings e Javalis",
                "Clima ameno e visibilidade excelente",
                "Framboesas e cogumelos para alimentação básica",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-biome-meadows-light mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="/prado" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-biome-meadows-light text-black hover:bg-biome-meadows-light/80 transition-all duration-300">
                Explorar Prado
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
              <div className="absolute -inset-1 bg-gradient-to-r from-biome-meadows-light/30 to-biome-meadows-dark/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-biome-meadows-light/30">
                <div className="w-full h-full bg-[url('/images/meadows.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
