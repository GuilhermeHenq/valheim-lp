"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sword, Shield, BoxIcon as Bow, Hammer, Axe, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const classes = [
  {
    id: "warrior",
    name: "Guerreiro",
    description: "Especialista em combate corpo a corpo com espadas e escudos. Alta resistência e força de ataque.",
    icon: <Sword className="h-8 w-8" />,
    color: "#6f624e",
    stats: {
      força: 8,
      agilidade: 5,
      resistência: 9,
      furtividade: 3,
    },
  },
  {
    id: "archer",
    name: "Arqueiro",
    description: "Mestre em ataques à distância com arcos. Alta precisão e dano, mas baixa resistência.",
    icon: <Bow className="h-8 w-8" />,
    color: "#6f624e",
    stats: {
      força: 5,
      agilidade: 9,
      resistência: 4,
      furtividade: 7,
    },
  },
  {
    id: "builder",
    name: "Construtor",
    description: "Especialista em construção e artesanato. Bônus em construção e mineração.",
    icon: <Hammer className="h-8 w-8" />,
    color: "#6f624e",
    stats: {
      força: 7,
      agilidade: 4,
      resistência: 7,
      furtividade: 3,
    },
  },
  {
    id: "explorer",
    name: "Explorador",
    description: "Mestre em navegação e exploração. Bônus em velocidade de movimento e resistência a elementos.",
    icon: <Shield className="h-8 w-8" />,
    color: "#6f624e",
    stats: {
      força: 5,
      agilidade: 7,
      resistência: 6,
      furtividade: 8,
    },
  },
  {
    id: "berserker",
    name: "Berserker",
    description: "Guerreiro feroz que sacrifica defesa por poder de ataque. Dano massivo, mas baixa resistência.",
    icon: <Axe className="h-8 w-8" />,
    color: "#6f624e",
    stats: {
      força: 10,
      agilidade: 6,
      resistência: 4,
      furtividade: 2,
    },
  },
]

export function CharacterSelection() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null)

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Escolha sua <span className="text-valheim-gold">Classe</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Cada classe viking possui habilidades e características únicas. Escolha a que melhor se adapta ao seu estilo de
        jogo e comece sua jornada em Valheim.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {classes.map((characterClass) => (
          <motion.div key={characterClass.id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Card
              className={cn(
                "cursor-pointer border-2 transition-all duration-300 h-full overflow-hidden",
                selectedClass === characterClass.id
                  ? "border-valheim-gold"
                  : "border-transparent hover:border-valheim-gold/50",
                "bg-gradient-to-br",
                characterClass.color,
              )}
              onClick={() => setSelectedClass(characterClass.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    {characterClass.icon}
                    {characterClass.name}
                  </CardTitle>
                  {selectedClass === characterClass.id && <div className="h-3 w-3 rounded-full bg-valheim-gold"></div>}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 mb-4">{characterClass.description}</CardDescription>
                <div className="space-y-2">
                  {Object.entries(characterClass.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                      <span className="text-white/70 capitalize">{stat}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${i < value ? "bg-white" : "bg-white/20"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          disabled={!selectedClass}
          className={cn(
            "bg-valheim-gold text-black hover:bg-valheim-gold/80 transition-all duration-300",
            !selectedClass && "opacity-50 cursor-not-allowed",
          )}
        >
          Continuar Jornada
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
