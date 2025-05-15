"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { BiomeHeader } from "@/components/biome-header"
import { BiomeContentSection } from "@/components/biome-content-section"
import { BiomeCreaturesSection } from "@/components/biome-creatures-section"
import { BiomeResourcesSection } from "@/components/biome-resources-section"
import { Footer } from "@/components/footer"
import { Droplets, Skull, Flame, AlertTriangle } from "lucide-react"
import { SwampParticles } from "@/components/swamp-particles"

export default function SwampPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <BiomeHeader
        title="PÂNTANO"
        subtitle="Um bioma sombrio e perigoso, com águas venenosas e árvores mortas, mas que esconde recursos valiosos como ferro e raízes antigas."
        color="biome-swamp-dark"
        textColor="biome-swamp-light"
        backgroundImage="/images/swamp.png"
      />

      <div className="relative">
        <SwampParticles />

        <BiomeContentSection
          title="TREVAS SUBMERSAS"
          description="O Pântano é um dos biomas mais hostis de Valheim. Caracterizado por águas rasas e venenosas, árvores mortas e uma atmosfera opressiva, este local desafia até os guerreiros mais experientes. A visibilidade é extremamente baixa, especialmente à noite, e o terreno alagado dificulta a movimentação. No entanto, as recompensas para os corajosos são substanciais."
          color="biome-swamp-dark"
          textColor="biome-swamp-light"
          image="/images/swamp.png"
          imageAlt="Pântano de Valheim"
          contentItems={[
            {
              title: "Águas Venenosas",
              description: "As águas rasas do pântano causam dano de veneno constante, exigindo poções de resistência.",
              icon: <Droplets className="h-5 w-5 text-biome-swamp-light" />,
            },
            {
              title: "Criptas Submersas",
              description:
                "Estruturas antigas parcialmente submersas que contêm grandes quantidades de ferro e outros tesouros.",
              icon: <Skull className="h-5 w-5 text-biome-swamp-light" />,
            },
            {
              title: "Fogos-Fátuos",
              description:
                "Pequenas luzes verdes que flutuam pelo pântano, oferecendo iluminação natural na escuridão.",
              icon: <Flame className="h-5 w-5 text-biome-swamp-light" />,
            },
            {
              title: "Clima Hostil",
              description: "Chuva constante e névoa densa tornam a navegação e combate ainda mais desafiadores.",
              icon: <AlertTriangle className="h-5 w-5 text-biome-swamp-light" />,
            },
          ]}
        />

        <BiomeCreaturesSection
          title="CRIATURAS DO PÂNTANO"
          description="O Pântano é habitado por algumas das criaturas mais perigosas de Valheim, muitas delas com habilidades únicas."
          color="biome-swamp-dark"
          textColor="biome-swamp-light"
          creatures={[
            {
              name: "Draugr",
              description:
                "Guerreiros mortos-vivos armados com espadas, arcos ou lanças. São mais fortes e resistentes que esqueletos.",
              difficulty: 3,
              type: "hostile",
            },
            {
              name: "Draugr Elite",
              description:
                "Versões mais poderosas dos Draugrs comuns, geralmente portando armas de duas mãos e causando dano massivo.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Sanguessuga",
              description:
                "Criaturas aquáticas que atacam rapidamente e causam dano de veneno. Geralmente atacam em grupos.",
              difficulty: 2,
              type: "hostile",
            },
            {
              name: "Wraith",
              description:
                "Espíritos flutuantes que aparecem principalmente à noite. São rápidos, difíceis de acertar e causam muito dano.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Abominação",
              description:
                "Monstruosidades feitas de raízes e troncos que emergem do solo pantanoso. Extremamente resistentes e poderosas.",
              difficulty: 5,
              type: "hostile",
            },
            {
              name: "Bonemass",
              description:
                "O terceiro chefe de Valheim, uma massa gigante de ossos e lodo que pode invocar esqueletos e lançar ataques venenosos.",
              difficulty: 5,
              type: "boss",
            },
          ]}
        />

        <BiomeResourcesSection
          title="RECURSOS DO PÂNTANO"
          description="Apesar dos perigos, o Pântano oferece recursos cruciais para a progressão no jogo, principalmente o ferro."
          color="biome-swamp-dark"
          textColor="biome-swamp-light"
          resources={[
            {
              name: "Sucata de Ferro",
              description:
                "Encontrada em criptas submersas, pode ser fundida em barras de ferro para equipamentos avançados.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Correntes",
              description: "Obtidas de Wraiths, usadas para criar itens especiais como o Frostner (martelo).",
              type: "mineral",
              rarity: "rare",
            },
            {
              name: "Glândula de Veneno",
              description: "Coletada de sanguessugas, usada para criar poções de resistência a veneno.",
              type: "animal",
              rarity: "uncommon",
            },
            {
              name: "Raiz Antiga",
              description:
                "Encontrada em criptas ou obtida de Abominações, usada para criar arcos e outros itens especiais.",
              type: "plant",
              rarity: "rare",
            },
            {
              name: "Cogumelo Verde",
              description: "Cresce exclusivamente no Pântano, usado para poções avançadas.",
              type: "plant",
              rarity: "uncommon",
            },
            {
              name: "Turnip (Nabo)",
              description: "Vegetal que pode ser cultivado a partir de sementes encontradas no Pântano.",
              type: "plant",
              rarity: "uncommon",
            },
            {
              name: "Sangue de Draugr",
              description: "Obtido ao derrotar Draugrs, usado para criar poções e melhorar certos equipamentos.",
              type: "animal",
              rarity: "uncommon",
            },
            {
              name: "Ossos Antigos",
              description: "Encontrados em criptas submersas, usados para criar decorações e alguns itens especiais.",
              type: "mineral",
              rarity: "common",
            },
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
