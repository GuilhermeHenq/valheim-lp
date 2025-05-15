"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CharacterSelection } from "@/components/character-selection"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import Image from "next/image"

export default function StartJourneyPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-valheim-dark/90 via-valheim-dark/70 to-valheim-dark"></div>
        <div className="fog-overlay"></div>
        <div className="light-rays"></div>
        <div className="mist-overlay"></div>

        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-valheim-gold">INICIE SUA</span> <br />
              <span className="text-white">JORNADA VIKING</span>
            </h1>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Bem-vindo a Valheim, guerreiro! Você foi escolhido pelos deuses para explorar este reino misterioso,
              derrotar poderosos inimigos e construir seu legado. Sua jornada começa agora.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-16">
            {!videoPlaying ? (
              <div className="relative aspect-video overflow-hidden rounded-lg border border-valheim-gold/30 group cursor-pointer">
                <Image
                  src="/valheim.jpg"
                  alt="Valheim Gameplay"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setVideoPlaying(true)}
                >
                  <div className="h-20 w-20 rounded-full bg-valheim-gold/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-valheim-gold/40">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video overflow-hidden rounded-lg border border-valheim-gold/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5mHRJ1KFe20?autoplay=1"
                  title="Valheim Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            )}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-valheim-gold">ADQUIRA</span> VALHEIM
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              E Venha se juntar a esse jogo maravilhoso que eu amo! <br />
                        <i className="text-gray-500">Guilherme Henrique</i>
            </p>
            <Button
              size="lg"
              className="bg-[#1b2838] hover:bg-[#2a3f5a] text-white transition-all duration-300"
              onClick={() => window.open("https://store.steampowered.com/app/892970/Valheim/", "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path>
                <path d="M16.83 16.83a4 4 0 1 1-5.66-5.66 4 4 0 0 1 5.66 5.66z"></path>
                <line x1="12" y1="12" x2="12" y2="12.01"></line>
              </svg>
              Compre o jogo
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
