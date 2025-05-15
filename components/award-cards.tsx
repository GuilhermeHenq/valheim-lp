"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Music, Palette } from "lucide-react"

const awards = [
  {
    title: "Melhor Jogo de 2021",
    description: "Premiado como o melhor jogo de sobrevivência e construção de 2021 por sua jogabilidade inovadora.",
    icon: <Trophy className="h-10 w-10 text-[#7CFC00]" />,
    delay: 0.1,
  },
  {
    title: "Melhor Ambientação",
    description: "Reconhecido pela incrível ambientação nórdica e sistema de biomas dinâmicos e imersivos.",
    icon: <Palette className="h-10 w-10 text-[#7CFC00]" />,
    delay: 0.3,
  },
  {
    title: "Melhor Trilha Sonora",
    description: "Premiado pela trilha sonora atmosférica que complementa perfeitamente a experiência de jogo.",
    icon: <Music className="h-10 w-10 text-[#7CFC00]" />,
    delay: 0.5,
  },
]

export function AwardCards() {
  return (
    <section className="py-20 container mx-auto px-8 relative">
      <div className="mist-overlay opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-valheim-gold">PREMIAÇÕES</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Valheim conquistou diversos prêmios e reconhecimentos por sua excelência em design, jogabilidade e atmosfera.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: award.delay, duration: 0.6 }}
          >
            <Card className="bg-valheim-dark/80 backdrop-blur-sm border border-[#7CFC00]/30 h-full relative group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border border-[#7CFC00] shadow-[0_0_15px_2px_rgba(124,252,0,0.5)] rounded-lg"></div>
              </div>
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-valheim-dark border border-[#7CFC00]/30">{award.icon}</div>
                <CardTitle className="text-xl font-bold text-white">{award.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-400">{award.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
