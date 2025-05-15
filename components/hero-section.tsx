"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/valheim-biomes.png')",
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-valheim-dark/90 via-valheim-dark/70 to-valheim-dark"></div>

      <div className="fog-overlay"></div>
      <div className="light-rays"></div>
      <div className="mist-overlay"></div>

      <div className="container mx-auto px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6">
            <Image
              src="/images/valheim-logo.png"
              alt="Valheim Logo"
              width={250}
              height={83}
              className="w-auto h-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-valheim-gold">BIOMAS</span> <br />
            <span className="text-white">DE VALHEIM</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Explore os diversos biomas do mundo de Valheim, cada um com seus próprios desafios, recursos e criaturas
            únicas. Do pacífico Prado às perigosas Planícies, uma jornada épica aguarda os guerreiros mais corajosos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/comecar-jornada">
              <Button
                size="lg"
                className="bg-valheim-gold text-black hover:bg-valheim-gold/80 transition-all duration-300"
              >
                Começar Jornada
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/guia-sobrevivencia">
              <Button
                size="lg"
                variant="outline"
                className="border-valheim-blue text-valheim-blue hover:bg-valheim-blue/10 transition-all duration-300"
              >
                Ver Guia de Sobrevivência
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
