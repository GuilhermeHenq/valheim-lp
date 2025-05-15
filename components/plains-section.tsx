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

export function PlainsSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []

    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 8 + 3,
        delay: Math.random() * 5,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <section id="plains" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-biome-plains-dark to-biome-plains-light opacity-30"></div>

      <div className="plains-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="plains-particle"
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
              <span className="text-biome-plains-light">PLANÍCIE</span>
            </h2>
            <p className="text-gray-300 mb-6">
              As Planícies são vastas áreas abertas cobertas por grama dourada alta. Apesar da aparência pacífica, este
              é o bioma mais perigoso de Valheim, com inimigos extremamente poderosos e recursos de alto nível.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Cevada e linho para alimentos e equipamentos avançados",
                "Fulings e Lox, criaturas extremamente perigosas",
                "Aldeias Fuling com tesouros valiosos",
                "Tar pits para materiais de construção especiais",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-biome-plains-light mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="https://valheim.fandom.com/pt-br/wiki/Planície" target="_blank" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-biome-plains-light text-black hover:bg-biome-plains-light/80 transition-all duration-300">
                Explorar Planície
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
              <div className="absolute -inset-1 bg-gradient-to-r from-biome-plains-light/30 to-biome-plains-dark/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-biome-plains-light/30">
                <Image
                  src="/images/plains.png"
                  alt="Planícies de Valheim"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
