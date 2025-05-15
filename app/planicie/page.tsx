"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { BiomeHeader } from "@/components/biome-header"
import { BiomeContentSection } from "@/components/biome-content-section"
import { BiomeCreaturesSection } from "@/components/biome-creatures-section"
import { BiomeResourcesSection } from "@/components/biome-resources-section"
import { Footer } from "@/components/footer"
import { Sun, Wind, Castle, Wheat } from "lucide-react"
import { PlainsDust } from "@/components/plains-dust"

export default function PlainsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <BiomeHeader
        title="PLANÍCIE"
        subtitle="Vastas áreas abertas cobertas por grama dourada alta, aparentemente pacíficas, mas escondendo os perigos mais mortais de Valheim."
        color="biome-plains-dark"
        textColor="biome-plains-light"
        backgroundImage="/images/plains.png"
      />

      <div className="relative">
        <PlainsDust />

        <BiomeContentSection
          title="CAMPOS DOURADOS"
          description="As Planícies são vastas áreas abertas cobertas por grama dourada alta que ondula ao vento. Apesar da aparência serena e pacífica, este é o bioma mais perigoso de Valheim, habitado por inimigos extremamente poderosos. É também o lar de recursos de alto nível necessários para os equipamentos mais avançados do jogo."
          color="biome-plains-dark"
          textColor="biome-plains-light"
          image="/images/plains.png"
          imageAlt="Planícies de Valheim"
          contentItems={[
            {
              title: "Clima Seco",
              description: "Dias quentes e ensolarados com pouca ou nenhuma chuva caracterizam este bioma árido.",
              icon: <Sun className="h-5 w-5 text-biome-plains-light" />,
            },
            {
              title: "Ventos Constantes",
              description:
                "Brisas constantes fazem a grama alta ondular, criando um visual deslumbrante, mas também escondendo inimigos.",
              icon: <Wind className="h-5 w-5 text-biome-plains-light" />,
            },
            {
              title: "Aldeias Fuling",
              description:
                "Assentamentos dos Fulings com estruturas de madeira, contendo recursos valiosos e inimigos perigosos.",
              icon: <Castle className="h-5 w-5 text-biome-plains-light" />,
            },
            {
              title: "Campos de Cultivo",
              description:
                "Áreas onde cevada e linho crescem naturalmente, recursos essenciais para itens de fim de jogo.",
              icon: <Wheat className="h-5 w-5 text-biome-plains-light" />,
            },
          ]}
        />

        <BiomeCreaturesSection
          title="CRIATURAS DAS PLANÍCIES"
          description="As Planícies abrigam os inimigos mais perigosos de Valheim, capazes de derrotar facilmente jogadores despreparados."
          color="biome-plains-dark"
          textColor="biome-plains-light"
          creatures={[
            {
              name: "Fuling",
              description:
                "Humanoides pequenos e agressivos armados com espadas, lanças ou tochas. Extremamente perigosos em grupos.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Fuling Berserker",
              description:
                "Fulings gigantes armados com grandes maças de estrela. Causam dano massivo e têm muita vida.",
              difficulty: 5,
              type: "hostile",
            },
            {
              name: "Fuling Xamã",
              description: "Fulings com habilidades mágicas que podem curar outros Fulings e lançar projéteis de fogo.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Lox",
              description:
                "Grandes criaturas semelhantes a búfalos. Extremamente fortes, mas podem ser domesticados e montados.",
              difficulty: 5,
              type: "neutral",
            },
            {
              name: "Deathsquito",
              description:
                "Insetos voadores extremamente rápidos que causam dano perfurante elevado. Podem matar jogadores desprevenidos com um único ataque.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Yagluth",
              description: "O quinto e último chefe de Valheim, um gigantesco esqueleto com poderes mágicos de fogo.",
              difficulty: 5,
              type: "boss",
            },
          ]}
        />

        <BiomeResourcesSection
          title="RECURSOS DAS PLANÍCIES"
          description="As Planícies oferecem recursos exclusivos necessários para criar os equipamentos mais avançados do jogo."
          color="biome-plains-dark"
          textColor="biome-plains-light"
          resources={[
            {
              name: "Cevada",
              description: "Cereal que cresce nas planícies, usado para fazer pão e outros alimentos avançados.",
              type: "plant",
              rarity: "uncommon",
            },
            {
              name: "Linho",
              description: "Planta fibrosa usada para criar as armaduras e roupas mais avançadas do jogo.",
              type: "plant",
              rarity: "uncommon",
            },
            {
              name: "Agulhão de Deathsquito",
              description: "Obtido de Deathsquitos, usado para criar flechas de agulhão e outras armas perfurantes.",
              type: "animal",
              rarity: "uncommon",
            },
            {
              name: "Couro de Lox",
              description: "Obtido de Lox, usado para criar a capa de Lox e outros itens de alta qualidade.",
              type: "animal",
              rarity: "rare",
            },
            {
              name: "Moedas",
              description: "Encontradas em aldeias Fuling ou obtidas de Fulings, podem ser usadas para decoração.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Correntes Negras",
              description: "Metal raro encontrado em aldeias Fuling, usado para criar as armas mais poderosas do jogo.",
              type: "mineral",
              rarity: "rare",
            },
            {
              name: "Tar",
              description: "Encontrado em poças de alcatrão nas planícies, usado para construções avançadas.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Tear",
              description:
                "Estação de artesanato avançada que permite trabalhar com linho para criar roupas de alta qualidade.",
              type: "crafting",
              rarity: "rare",
            },
          ]}
        />
      </div>

      <Footer />
    </main>
  )
}
