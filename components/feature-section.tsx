"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function FeatureSection() {
  return (
    <section className="py-20 bg-[#0a1015] relative overflow-hidden">
      <div className="fog-overlay opacity-30"></div>
      <div className="mist-overlay opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-valheim-blue">FLORESTA</span> NEGRA
            </h2>
            <p className="text-gray-300 mb-6">
              A Floresta Negra é um dos biomas mais perigosos e misteriosos de Valheim. Coberta por uma densa névoa e
              habitada por criaturas hostis, este local guarda segredos e recursos valiosos para quem for corajoso o
              suficiente para explorá-la.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Minério de cobre e estanho para equipamentos avançados",
                "Trolls e Greydwarfs protegem os recursos mais valiosos",
                "Cogumelos e mel para poções de cura e resistência",
                "Ruínas antigas com conhecimento tecnológico perdido",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="text-valheim-blue mr-2">•</span>
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button  className="bg-valheim-blue text-black hover:bg-valheim-blue/80 transition-all duration-300">
              Explorar Floresta Negra
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-valheim-blue/30 to-valheim-gold/30 rounded-lg blur-lg"></div>
              <div className="relative aspect-video overflow-hidden rounded-lg valheim-blue-border">
                <Image
                  src="/images/valheim-forest-2.png"
                  alt="Floresta Negra de Valheim"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1015]/50 to-transparent"></div>
                <div className="fog-overlay opacity-20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
