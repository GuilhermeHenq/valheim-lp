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

export function MountainsSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []

    for (let i = 0; i < 50; i++) {
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
    <section id="mountains" className="py-20 bg-[#0a1015] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-biome-mountain-dark to-biome-mountain-light opacity-30"></div>

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
              backgroundColor: "rgba(173, 216, 230, 0.8)",
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-biome-mountain-light/30 to-biome-mountain-dark/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-biome-mountain-light/30">
                <Image
                  src="/images/mountains.png"
                  alt="Montanhas de Valheim"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1015]/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-biome-mountain-light">MONTANHAS</span>
            </h2>
            <p className="text-gray-300 mb-6">
              As Montanhas são picos gelados e nevados que se elevam acima dos outros biomas. O frio extremo exige
              preparação especial, mas os recursos valiosos compensam os perigos.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Minério de prata para equipamentos avançados",
                "Lobos, dragões e golems de pedra guardam os picos",
                "Obsidiana para flechas e ferramentas especiais",
                "Ovos de dragão podem ser encontrados em ninhos",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-biome-mountain-light mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="/montanhas" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-biome-mountain-light text-black hover:bg-biome-mountain-light/80 transition-all duration-300">
                Explorar Montanhas
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
