"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ContentItem {
  title: string
  description: string
  icon?: React.ReactNode
}

interface BiomeContentSectionProps {
  title: string
  description: string
  color: string
  textColor: string
  image: string
  imageAlt: string
  contentItems: ContentItem[]
  reversed?: boolean
}

export function BiomeContentSection({
  title,
  description,
  color,
  textColor,
  image,
  imageAlt,
  contentItems,
  reversed = false,
}: BiomeContentSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b from-${color}/10 to-${color}/5 opacity-30`}></div>
      <div className="mist-overlay opacity-10"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(reversed ? "order-2" : "order-1", "lg:order-1")}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className={`text-${textColor}`}>{title}</span>
            </h2>
            <p className="text-gray-300 mb-10">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card className={`bg-${color}/10 border border-${textColor}/20 h-full`}>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-white flex items-center">
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(reversed ? "order-1" : "order-2", "lg:order-2")}
          >
            <div className="relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-${textColor}/30 to-${color}/30 rounded-lg blur-lg`}
              ></div>
              <div className={`relative aspect-video overflow-hidden rounded-lg border border-${textColor}/30`}>
                <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
