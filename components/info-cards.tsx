"use client"

import { motion } from "framer-motion"
import { Shield, Axe, Mountain, Skull } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const cards = [
  {
    title: "Equipamentos Avançados",
    description: "Forje armas e armaduras com tecnologia nórdica avançada para enfrentar os desafios mais perigosos.",
    icon: <Axe className="h-10 w-10 text-valheim-gold" />,
    color: "valheim-border",
    delay: 0.1,
  },
  {
    title: "Defesas Impenetráveis",
    description:
      "Construa fortificações com materiais resistentes e encantamentos que mantêm as criaturas da escuridão afastadas.",
    icon: <Shield className="h-10 w-10 text-valheim-blue" />,
    color: "valheim-blue-border",
    delay: 0.3,
  },
  {
    title: "Biomas Misteriosos",
    description: "Explore a Floresta Negra e outros biomas repletos de recursos raros e perigos desconhecidos.",
    icon: <Mountain className="h-10 w-10 text-valheim-gold" />,
    color: "valheim-border",
    delay: 0.5,
  },
  {
    title: "Criaturas Temíveis",
    description: "Conheça os inimigos que espreitam nas sombras e aprenda as melhores estratégias para derrotá-los.",
    icon: <Skull className="h-10 w-10 text-valheim-blue" />,
    color: "valheim-blue-border",
    delay: 0.7,
  },
]

export function InfoCards() {
  return (
    <section className="py-20 container mx-auto px-4 relative">
      <div className="mist-overlay opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-valheim-gold">SEGREDOS</span> DA FLORESTA
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Descubra os segredos dos antigos vikings e domine as habilidades que permitirão sua sobrevivência nos reinos
          mais hostis de Valheim.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: card.delay, duration: 0.6 }}
          >
            <Card
              className={cn(
                "bg-valheim-dark/80 backdrop-blur-sm border-0 transition-all duration-300 h-full",
                card.color,
              )}
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-valheim-dark border border-gray-800">{card.icon}</div>
                <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-400">{card.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
