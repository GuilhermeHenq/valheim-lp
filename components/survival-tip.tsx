"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SurvivalTipProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

export function SurvivalTip({ title, description, icon, index }: SurvivalTipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <Card className="bg-[#2a1a0a]/80 backdrop-blur-sm border border-amber-900/50 h-full transition-all duration-300 hover:border-amber-800">
        <CardHeader className="flex flex-row items-start space-x-4 pb-2">
          <div className="mt-1 bg-amber-900/30 p-2 rounded-full">{icon}</div>
          <div>
            <CardTitle className={cn("text-xl font-bold text-amber-200")}>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-amber-100/80">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
