"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="mist-overlay opacity-10"></div>
      <div className="light-rays opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            PREPARE-SE PARA A <span className="text-valheim-gold">JORNADA</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de guerreiros e explore o vasto mundo de Valheim. Forje seu destino, construa seu legado
            e conquiste a glória eterna.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/comecar-jornada">
              <Button
                size="lg"
                className="bg-valheim-gold text-black hover:bg-valheim-gold/80 transition-all duration-300"
              >
                Iniciar Aventura
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
