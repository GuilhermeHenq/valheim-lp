"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BiomeHeaderProps {
  title: string
  subtitle: string
  color: string
  textColor: string
  backgroundImage: string
}

export function BiomeHeader({ title, subtitle, color, textColor, backgroundImage }: BiomeHeaderProps) {
  return (
    <header className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      <div
        className={`absolute inset-0 z-0 bg-gradient-to-b from-valheim-dark/90 via-valheim-dark/70 to-${color}/30`}
      ></div>

      <div className="fog-overlay"></div>
      <div className="light-rays"></div>
      <div className="mist-overlay"></div>

      <div className="container mx-auto px-8 z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className={`inline-flex items-center text-${textColor} hover:text-white transition-colors duration-300`}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para Biomas
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4">
            <Image
              src="/images/valheim-logo.png"
              alt="Valheim Logo"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className={`text-${textColor}`}>{title}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </header>
  )
}
