"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skull, Shield } from "lucide-react"

interface Creature {
  name: string
  description: string
  difficulty: 1 | 2 | 3 | 4 | 5
  type: "hostile" | "neutral" | "boss"
}

interface BiomeCreaturesSectionProps {
  title: string
  description: string
  color: string
  textColor: string
  creatures: Creature[]
}

export function BiomeCreaturesSection({ title, description, color, textColor, creatures }: BiomeCreaturesSectionProps) {
  const renderDifficulty = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className={`w-2 h-2 rounded-full ${star <= level ? `bg-${textColor}` : "bg-gray-600"}`}></div>
        ))}
      </div>
    )
  }

  return (
    <section className={`py-20 bg-${color}/20 relative overflow-hidden`}>
      <div className="fog-overlay opacity-20"></div>
      <div className="mist-overlay opacity-10"></div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`text-${textColor}`}>{title}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatures.map((creature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card
                className={`bg-valheim-dark/80 backdrop-blur-sm border border-${textColor}/30 h-full transition-all duration-300 hover:border-${textColor}/60`}
              >
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-white">{creature.name}</CardTitle>
                    <CardDescription className="text-gray-400 flex items-center mt-1">
                      {creature.type === "hostile" ? (
                        <Skull className={`h-4 w-4 text-${textColor} mr-2`} />
                      ) : (
                        <Shield className={`h-4 w-4 text-${textColor} mr-2`} />
                      )}
                      {creature.type === "hostile" ? "Hostil" : creature.type === "neutral" ? "Neutro" : "Chefe"}
                    </CardDescription>
                  </div>
                  <div>{renderDifficulty(creature.difficulty)}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{creature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
