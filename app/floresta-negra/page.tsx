"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { BiomeHeader } from "@/components/biome-header"
import { BiomeContentSection } from "@/components/biome-content-section"
import { BiomeCreaturesSection } from "@/components/biome-creatures-section"
import { BiomeResourcesSection } from "@/components/biome-resources-section"
import { Footer } from "@/components/footer"
import { Droplets, Moon, Mountain, Skull } from "lucide-react"
import { ForestFog } from "@/components/forest-fog"

export default function BlackForestPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <BiomeHeader
        title="FLORESTA NEGRA"
        subtitle="Um bioma denso e misterioso, coberto por névoa constante e habitado por criaturas perigosas, mas rico em recursos valiosos."
        color="biome-forest-dark"
        textColor="biome-forest-light"
        backgroundImage="/images/black-forest.jpg"
      />

      <div className="relative">
        <ForestFog />

        <BiomeContentSection
          title="MISTÉRIO NAS SOMBRAS"
          description="A Floresta Negra é o segundo bioma que os jogadores geralmente exploram em Valheim. Caracterizada por densas florestas de pinheiros, névoa constante e terreno acidentado, este bioma esconde perigos e tesouros. É aqui que você encontrará os primeiros minérios e enfrentará inimigos mais desafiadores."
          color="biome-forest-dark"
          textColor="biome-forest-light"
          image="/images/black-forest.jpg"
          imageAlt="Floresta Negra de Valheim"
          contentItems={[
            {
              title: "Névoa Constante",
              description:
                "Uma névoa densa permeia a floresta, reduzindo a visibilidade e criando uma atmosfera misteriosa.",
              icon: <Droplets className="h-5 w-5 text-biome-forest-light" />,
            },
            {
              title: "Noites Perigosas",
              description:
                "Durante a noite, a floresta se torna significativamente mais perigosa, com maior atividade de criaturas hostis.",
              icon: <Moon className="h-5 w-5 text-biome-forest-light" />,
            },
            {
              title: "Terreno Acidentado",
              description: "Colinas íngremes e vales profundos tornam a navegação mais desafiadora que no Prado.",
              icon: <Mountain className="h-5 w-5 text-biome-forest-light" />,
            },
            {
              title: "Ruínas Antigas",
              description:
                "Estruturas de pedra e câmaras funerárias contêm segredos e tesouros dos antigos habitantes.",
              icon: <Skull className="h-5 w-5 text-biome-forest-light" />,
            },
          ]}
          reversed={true}
        />

        <BiomeCreaturesSection
          title="CRIATURAS DA FLORESTA"
          description="A Floresta Negra abriga criaturas mais perigosas que o Prado, exigindo melhor equipamento e cautela."
          color="biome-forest-dark"
          textColor="biome-forest-light"
          creatures={[
            {
              name: "Greydwarf",
              description:
                "Criaturas humanoides mais fortes que os Greylings. Atacam em grupos e podem lançar pedras à distância.",
              difficulty: 2,
              type: "hostile",
            },
            {
              name: "Greydwarf Bruto",
              description:
                "Versões maiores e mais fortes dos Greydwarfs comuns. Causam dano significativo com seus ataques corpo a corpo.",
              difficulty: 3,
              type: "hostile",
            },
            {
              name: "Greydwarf Xamã",
              description:
                "Greydwarfs com habilidades mágicas que podem curar outros Greydwarfs e lançar projéteis venenosos.",
              difficulty: 3,
              type: "hostile",
            },
            {
              name: "Troll",
              description:
                "Gigantes azuis extremamente fortes que podem esmagar jogadores com um único golpe. Alguns usam troncos ou pedras como armas.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Esqueleto",
              description:
                "Encontrados principalmente em câmaras funerárias, são mais resistentes que os Greydwarfs e podem usar armas.",
              difficulty: 2,
              type: "hostile",
            },
            {
              name: "O Ancião",
              description:
                "O segundo chefe de Valheim, uma criatura arbórea gigante que pode invocar raízes e lançar projéteis.",
              difficulty: 4,
              type: "boss",
            },
          ]}
        />

        <BiomeResourcesSection
          title="RECURSOS DA FLORESTA NEGRA"
          description="A Floresta Negra contém recursos essenciais para a progressão no jogo, incluindo os primeiros minérios."
          color="biome-forest-dark"
          textColor="biome-forest-light"
          resources={[
            {
              name: "Minério de Cobre",
              description:
                "Encontrado em depósitos na superfície, é o primeiro metal que você pode minerar em Valheim.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Minério de Estanho",
              description: "Encontrado próximo a corpos d'água, é combinado com cobre para criar bronze.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Núcleo Surtur",
              description: "Encontrado em câmaras funerárias, usado para criar fornalhas e outros itens avançados.",
              type: "mineral",
              rarity: "rare",
            },
            {
              name: "Olho de Troll",
              description: "Obtido ao derrotar trolls, usado para criar equipamentos especiais.",
              type: "animal",
              rarity: "rare",
            },
            {
              name: "Cogumelo Amarelo",
              description: "Encontrado exclusivamente na Floresta Negra, usado para poções de cura mais potentes.",
              type: "plant",
              rarity: "uncommon",
            },
            {
              name: "Mel",
              description: "Coletado de colmeias selvagens, usado para alimentação e fermentação de hidromel.",
              type: "animal",
              rarity: "uncommon",
            },
            {
              name: "Carvão",
              description:
                "Encontrado em câmaras funerárias ou produzido em fornos, essencial para fundição de metais.",
              type: "mineral",
              rarity: "common",
            },
            {
              name: "Fornalha",
              description: "Estação de artesanato avançada que permite a fundição de minérios em metais utilizáveis.",
              type: "crafting",
              rarity: "uncommon",
            },
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
