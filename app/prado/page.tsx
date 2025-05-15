"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { BiomeHeader } from "@/components/biome-header"
import { BiomeContentSection } from "@/components/biome-content-section"
import { BiomeCreaturesSection } from "@/components/biome-creatures-section"
import { BiomeResourcesSection } from "@/components/biome-resources-section"
import { Footer } from "@/components/footer"
import { TreesIcon as Tree, Cloud, Sun, Home } from "lucide-react"
import { MeadowsParticles } from "@/components/meadows-particles"

export default function MeadowsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <BiomeHeader
        title="PRADO"
        subtitle="O bioma inicial de Valheim, pacífico e verdejante, perfeito para os primeiros passos de sua jornada viking."
        color="biome-meadows-dark"
        textColor="biome-meadows-light"
        backgroundImage="/images/meadows.jpg"
      />

      <div className="relative">
        <MeadowsParticles />

        <BiomeContentSection
          title="O INÍCIO DA JORNADA"
          description="O Prado é o primeiro bioma que você encontrará em Valheim. Com seus campos abertos, colinas suaves e florestas esparsas, é o local perfeito para estabelecer sua primeira base e aprender os fundamentos da sobrevivência. O clima é geralmente ameno, com chuvas ocasionais que nutrem a vegetação abundante."
          color="biome-meadows-dark"
          textColor="biome-meadows-light"
          image="/images/meadows.jpg"
          imageAlt="Prado de Valheim"
          contentItems={[
            {
              title: "Clima Ameno",
              description: "Dias ensolarados e noites estreladas tornam este bioma acolhedor para novos jogadores.",
              icon: <Sun className="h-5 w-5 text-biome-meadows-light" />,
            },
            {
              title: "Terreno Aberto",
              description: "Colinas suaves e campos abertos facilitam a navegação e construção de bases.",
              icon: <Cloud className="h-5 w-5 text-biome-meadows-light" />,
            },
            {
              title: "Florestas Leves",
              description: "Pequenos bosques fornecem madeira e abrigo, sem os perigos das florestas densas.",
              icon: <Tree className="h-5 w-5 text-biome-meadows-light" />,
            },
            {
              title: "Local Ideal para Base",
              description: "Terreno plano e recursos abundantes tornam o Prado perfeito para sua primeira casa.",
              icon: <Home className="h-5 w-5 text-biome-meadows-light" />,
            },
          ]}
        />

        <BiomeCreaturesSection
          title="CRIATURAS DO PRADO"
          description="As criaturas que habitam o Prado são geralmente menos perigosas que as de outros biomas, tornando este local ideal para jogadores iniciantes."
          color="biome-meadows-dark"
          textColor="biome-meadows-light"
          creatures={[
            {
              name: "Greyling",
              description:
                "Pequenas criaturas humanoides que vagam pelo Prado. São hostis, mas relativamente fracas e fáceis de derrotar.",
              difficulty: 1,
              type: "hostile",
            },
            {
              name: "Neck",
              description:
                "Pequenos répteis semelhantes a lagartos que habitam próximo à água. Atacam em grupo, mas são fracos individualmente.",
              difficulty: 1,
              type: "hostile",
            },
            {
              name: "Javali",
              description:
                "Animais selvagens que podem ser domesticados. Atacam quando provocados, mas também são uma boa fonte de carne e couro.",
              difficulty: 2,
              type: "neutral",
            },
            {
              name: "Veado",
              description:
                "Criaturas pacíficas que fogem quando se aproximam. São uma excelente fonte de carne e couro para equipamentos iniciais.",
              difficulty: 1,
              type: "neutral",
            },
            {
              name: "Eikthyr",
              description:
                "O primeiro chefe de Valheim, um grande cervo com chifres elétricos. Invocado no altar de sacrifício usando Troféus de Veado.",
              difficulty: 3,
              type: "boss",
            },
          ]}
        />

        <BiomeResourcesSection
          title="RECURSOS DO PRADO"
          description="O Prado oferece todos os recursos básicos necessários para começar sua jornada em Valheim."
          color="biome-meadows-dark"
          textColor="biome-meadows-light"
          resources={[
            {
              name: "Madeira",
              description: "Obtida de árvores e arbustos, é o material de construção mais básico e essencial.",
              type: "plant",
              rarity: "common",
            },
            {
              name: "Pedra",
              description:
                "Encontrada no chão ou extraída de formações rochosas, usada para ferramentas e construções.",
              type: "mineral",
              rarity: "common",
            },
            {
              name: "Couro",
              description: "Obtido de javalis e veados, usado para criar armaduras e itens básicos.",
              type: "animal",
              rarity: "common",
            },
            {
              name: "Framboesas",
              description: "Frutas silvestres que podem ser colhidas para alimentação e criação de poções.",
              type: "plant",
              rarity: "common",
            },
            {
              name: "Cogumelos",
              description:
                "Encontrados próximos a árvores e em áreas sombreadas, são uma fonte importante de alimento.",
              type: "plant",
              rarity: "common",
            },
            {
              name: "Sílex",
              description:
                "Encontrado principalmente perto de corpos d'água, usado para criar ferramentas melhores que as de madeira.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Âmbar",
              description: "Raramente encontrado em árvores antigas, pode ser usado para criar itens especiais.",
              type: "plant",
              rarity: "rare",
            },
            {
              name: "Banco de Trabalho",
              description: "Estação de artesanato essencial que permite a criação de itens básicos e construções.",
              type: "crafting",
              rarity: "common",
            },
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
