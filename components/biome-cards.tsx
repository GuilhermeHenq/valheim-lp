"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const biomes = [
  {
    id: "meadows",
    title: "Prado",
    description:
      "O bioma inicial, pacífico e verdejante, com recursos básicos e inimigos fracos. Perfeito para estabelecer sua primeira base.",
    color: "from-biome-meadows-light to-biome-meadows-dark",
    delay: 0.1,
  },
  {
    id: "black-forest",
    title: "Floresta Negra",
    description:
      "Uma floresta densa e misteriosa, com névoa constante e recursos valiosos como cobre e estanho. Lar de trolls e greydwarfs.",
    color: "from-biome-forest-light to-biome-forest-dark",
    delay: 0.3,
  },
  {
    id: "swamp",
    title: "Pântano",
    description:
      "Um bioma escuro e perigoso, com água envenenada e árvores mortas. Contém ferro e é habitado por draugrs e sanguessugas.",
    color: "from-biome-swamp-light to-biome-swamp-dark",
    delay: 0.5,
  },
  {
    id: "mountains",
    title: "Montanhas",
    description:
      "Picos nevados e gelados, com lobos, dragões e golems de pedra. Fonte de prata e obsidiana para equipamentos avançados.",
    color: "from-biome-mountain-light to-biome-mountain-dark",
    delay: 0.7,
  },
  {
    id: "plains",
    title: "Planície",
    description:
      "Vastas pradarias douradas com grama alta e ruínas antigas. O bioma mais perigoso, com fulings e lox. Fonte de cevada e linho.",
    color: "from-biome-plains-light to-biome-plains-dark",
    delay: 0.9,
  },
]

export function BiomeCards() {
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
          <span className="text-valheim-gold">BIOMAS</span> DE VALHEIM
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Conheça os diferentes biomas que compõem o mundo de Valheim, cada um com seus próprios desafios e recompensas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {biomes.map((biome) => (
          <motion.div
            key={biome.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: biome.delay, duration: 0.6 }}
          >
            <Card className={cn("h-full border-0 overflow-hidden relative", "bg-gradient-to-br", biome.color)}>
              <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=400&width=600')]"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold text-white">{biome.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-white/80">{biome.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
