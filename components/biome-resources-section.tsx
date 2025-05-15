"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pickaxe, Axe, Hammer, Leaf } from "lucide-react"

interface Resource {
  name: string
  description: string
  type: "mineral" | "plant" | "animal" | "crafting"
  rarity: "common" | "uncommon" | "rare"
}

interface BiomeResourcesSectionProps {
  title: string
  description: string
  color: string
  textColor: string
  resources: Resource[]
}

export function BiomeResourcesSection({ title, description, color, textColor, resources }: BiomeResourcesSectionProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "mineral":
        return <Pickaxe className={`h-5 w-5 text-${textColor}`} />
      case "plant":
        return <Leaf className={`h-5 w-5 text-${textColor}`} />
      case "animal":
        return <Axe className={`h-5 w-5 text-${textColor}`} />
      case "crafting":
        return <Hammer className={`h-5 w-5 text-${textColor}`} />
      default:
        return null
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-400"
      case "uncommon":
        return "text-blue-400"
      case "rare":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b from-${color}/5 to-${color}/10 opacity-30`}></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
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
                <CardHeader className="flex flex-row items-center">
                  <div className={`mr-3 p-2 rounded-full bg-${color}/20`}>{getIcon(resource.type)}</div>
                  <CardTitle className="text-lg font-bold text-white">
                    {resource.name}{" "}
                    <span className={`text-xs font-normal ${getRarityColor(resource.rarity)}`}>
                      {resource.rarity.charAt(0).toUpperCase() + resource.rarity.slice(1)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{resource.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
