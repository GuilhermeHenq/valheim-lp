"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookAnimation } from "@/components/book-animation"
import { SurvivalTip } from "@/components/survival-tip"
import { motion } from "framer-motion"
import { Axe, Shield, Home, Utensils, Moon, Compass, Anchor, Flame, Tent, Mountain } from "lucide-react"

const survivalTips = [
  {
    title: "Primeiros Passos",
    description:
      "Comece coletando pedras e galhos para criar seu primeiro machado. Isso permitirá cortar árvores para construir um abrigo básico.",
    icon: <Axe className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Abrigo é Essencial",
    description:
      "Construa um abrigo simples o mais rápido possível. Um teto, paredes e uma fogueira garantirão o bônus de descanso e proteção contra inimigos noturnos.",
    icon: <Home className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Alimentação Variada",
    description:
      "Consuma três tipos diferentes de alimentos para maximizar sua saúde e stamina. Framboesas, carne e cogumelos são uma boa combinação inicial.",
    icon: <Utensils className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Perigos Noturnos",
    description:
      "A noite é perigosa para exploradores despreparados. Fique perto de sua base ou tenha equipamento adequado antes de aventurar-se na escuridão.",
    icon: <Moon className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Navegação",
    description:
      "Use o minimap para marcar locais importantes como sua base, recursos e pontos de interesse. Isso facilitará sua orientação no mundo.",
    icon: <Compass className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Transporte Marítimo",
    description:
      "Construa uma jangada assim que possível para explorar a costa. Posteriormente, barcos melhores permitirão viagens mais longas e seguras.",
    icon: <Anchor className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Fogueiras Estratégicas",
    description:
      "Posicione fogueiras em locais estratégicos durante explorações longas. Elas servem como pontos de descanso e afastam criaturas hostis.",
    icon: <Flame className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Descanso Restaurador",
    description:
      "Dormir em uma cama proporciona o efeito 'Descansado', que aumenta a regeneração de stamina. Certifique-se que sua cama esteja protegida por um teto e paredes.",
    icon: <Tent className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Progressão de Biomas",
    description:
      "Explore os biomas na ordem correta: Prado → Floresta Negra → Pântano → Montanha → Planície. Cada bioma requer equipamento do anterior para ser enfrentado com segurança.",
    icon: <Mountain className="h-5 w-5 text-amber-200" />,
  },
  {
    title: "Bloqueio Eficiente",
    description:
      "Aprenda a bloquear ataques com seu escudo. Um bloqueio perfeito (no momento exato) atordoa o inimigo, abrindo uma janela para contra-ataques.",
    icon: <Shield className="h-5 w-5 text-amber-200" />,
  },
]

export default function SurvivalGuidePage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[url('/images/pergaminho-bg.png')] bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-24 pb-12">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-amber-200">GUIA DE</span> <br />
                <span className="text-white">SOBREVIVÊNCIA</span>
              </h1>
              <p className="text-lg text-amber-100/80 mb-8 max-w-2xl mx-auto">
                Os segredos ancestrais para sobreviver e prosperar nos perigosos reinos de Valheim. Conhecimento passado
                de geração em geração entre os mais bravos guerreiros vikings.
              </p>
            </motion.div>

            {!showContent ? (
              <BookAnimation onAnimationComplete={() => setShowContent(true)} />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {survivalTips.map((tip, index) => (
                    <SurvivalTip
                      key={index}
                      title={tip.title}
                      description={tip.description}
                      icon={tip.icon}
                      index={index}
                    />
                  ))}
                </div>

                <div className="bg-[#2a1a0a]/80 backdrop-blur-sm border border-amber-900/50 rounded-lg p-6 mb-12">
                  <h3 className="text-2xl font-bold text-amber-200 mb-4">Palavras do Sábio</h3>
                  <p className="text-amber-100/80 italic">
                    "Lembre-se, guerreiro: a morte em Valheim não é o fim, mas uma oportunidade de aprender e retornar
                    mais forte. Os deuses observam sua jornada e recompensam aqueles que enfrentam os desafios com
                    coragem e sabedoria. Que Odin guie seus passos e Thor fortaleça seu braço nas batalhas que virão."
                  </p>
                  <p className="text-right text-amber-200 mt-2">— Ancião de Midgard</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
