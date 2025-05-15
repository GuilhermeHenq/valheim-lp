"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function BlackForestSection() {
  return (
    <section id="black-forest" className="py-20 bg-[#0a1015] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-biome-forest-dark to-biome-forest-light opacity-30"></div>
      <div className="fog-overlay opacity-30"></div>
      <div className="mist-overlay opacity-10"></div>

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
              <div className="absolute -inset-1 bg-gradient-to-r from-biome-forest-light/30 to-biome-forest-dark/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-biome-forest-light/30">
                <div className="w-full h-full bg-[url('/images/black-forest.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="fog-overlay opacity-20"></div>
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
              <span className="text-biome-forest-light">FLORESTA NEGRA</span>
            </h2>
            <p className="text-gray-300 mb-6">
              A Floresta Negra é um bioma denso e misterioso, coberto por uma névoa constante que filtra a luz do sol. É
              o segundo bioma que os jogadores geralmente exploram, oferecendo recursos cruciais para a progressão.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Minério de cobre e estanho para criar bronze",
                "Trolls e Anões Cinzentos hostis espreitam entre as árvores",
                "Criptas antigas contendo tesouros valiosos",
                "Cogumelos amarelos e mel para hidromel de cura",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-biome-forest-light mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link href="https://valheim.fandom.com/pt-br/wiki/Floresta_Negra" target="_blank" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-biome-forest-light text-white hover:bg-biome-forest-light/80 transition-all duration-300">
                Explorar Floresta Negra
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
