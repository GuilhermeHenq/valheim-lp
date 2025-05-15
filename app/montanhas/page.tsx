"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { BiomeHeader } from "@/components/biome-header"
import { BiomeContentSection } from "@/components/biome-content-section"
import { BiomeCreaturesSection } from "@/components/biome-creatures-section"
import { BiomeResourcesSection } from "@/components/biome-resources-section"
import { Footer } from "@/components/footer"
import { Snowflake, Wind, Mountain, Gem } from "lucide-react"
import { MountainSnow } from "@/components/mountain-snow"

export default function MountainsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <BiomeHeader
        title="MONTANHAS"
        subtitle="Picos gelados e nevados que se elevam acima dos outros biomas, oferecendo vistas deslumbrantes e recursos valiosos para quem estiver preparado para o frio extremo."
        color="biome-mountain-dark"
        textColor="biome-mountain-light"
        backgroundImage="/images/mountains.png"
      />

      <div className="relative">
        <MountainSnow />

        <BiomeContentSection
          title="PICOS GELADOS"
          description="As Montanhas são um bioma de altitude elevada, coberto por neve e gelo. O frio extremo é letal para qualquer um que não esteja devidamente preparado, exigindo hidromel de resistência ao frio ou roupas apropriadas. Apesar dos perigos, as Montanhas oferecem vistas deslumbrantes e recursos valiosos como prata e obsidiana."
          color="biome-mountain-dark"
          textColor="biome-mountain-light"
          image="/images/mountains.png"
          imageAlt="Montanhas de Valheim"
          contentItems={[
            {
              title: "Frio Extremo",
              description:
                "Temperaturas congelantes causam dano constante sem proteção adequada como hidromel ou roupas de lobo.",
              icon: <Snowflake className="h-5 w-5 text-biome-mountain-light" />,
            },
            {
              title: "Tempestades de Neve",
              description: "Tempestades frequentes reduzem drasticamente a visibilidade e aumentam o dano do frio.",
              icon: <Wind className="h-5 w-5 text-biome-mountain-light" />,
            },
            {
              title: "Terreno Íngreme",
              description: "Penhascos e encostas íngremes tornam a exploração desafiadora e perigosa devido a quedas.",
              icon: <Mountain className="h-5 w-5 text-biome-mountain-light" />,
            },
            {
              title: "Cavernas Geladas",
              description: "Formações naturais que abrigam recursos valiosos e criaturas perigosas.",
              icon: <Gem className="h-5 w-5 text-biome-mountain-light" />,
            },
          ]}
          reversed={true}
        />

        <BiomeCreaturesSection
          title="CRIATURAS DAS MONTANHAS"
          description="As criaturas que habitam as Montanhas são adaptadas ao frio extremo e representam um grande perigo para exploradores."
          color="biome-mountain-dark"
          textColor="biome-mountain-light"
          creatures={[
            {
              name: "Lobo",
              description:
                "Predadores rápidos e agressivos que caçam em matilhas. Podem ser domesticados se alimentados adequadamente.",
              difficulty: 3,
              type: "hostile",
            },
            {
              name: "Lobo de Gelo",
              description:
                "Variante mais rara e poderosa dos lobos comuns, com resistência ao frio e ataques mais fortes.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Drake",
              description:
                "Dragões menores que voam e lançam projéteis de gelo. Difíceis de acertar devido à sua mobilidade.",
              difficulty: 3,
              type: "hostile",
            },
            {
              name: "Golem de Pedra",
              description:
                "Gigantes de pedra extremamente resistentes e poderosos. Imunes a dano perfurante e altamente resistentes a outros tipos.",
              difficulty: 5,
              type: "hostile",
            },
            {
              name: "Fenring",
              description:
                "Criaturas semelhantes a lobisomens que aparecem principalmente à noite. Rápidos e causam muito dano.",
              difficulty: 4,
              type: "hostile",
            },
            {
              name: "Moder",
              description: "O quarto chefe de Valheim, um dragão gigante que pode voar e lançar projéteis de gelo.",
              difficulty: 5,
              type: "boss",
            },
          ]}
        />

        <BiomeResourcesSection
          title="RECURSOS DAS MONTANHAS"
          description="As Montanhas contêm recursos valiosos que permitem a criação de equipamentos de alto nível."
          color="biome-mountain-dark"
          textColor="biome-mountain-light"
          resources={[
            {
              name: "Minério de Prata",
              description:
                "Encontrado em veios subterrâneos nas montanhas, detectável com o Desejador (item obtido do terceiro chefe).",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Obsidiana",
              description:
                "Encontrada em depósitos na superfície das montanhas, usada para flechas e ferramentas especiais.",
              type: "mineral",
              rarity: "uncommon",
            },
            {
              name: "Cristal",
              description: "Encontrado raramente nas montanhas, usado para criar itens mágicos e decorações.",
              type: "mineral",
              rarity: "rare",
            },
            {
              name: "Pele de Lobo",
              description: "Obtida de lobos, usada para criar armaduras resistentes ao frio e outros equipamentos.",
              type: "animal",
              rarity: "uncommon",
            },
            {
              name: "Ovo de Dragão",
              description: "Encontrado em ninhos nas montanhas, usado para invocar o quarto chefe.",
              type: "animal",
              rarity: "rare",
            },
            {
              name: "Garra de Drake",
              description: "Obtida ao derrotar Drakes, usada para melhorar armas e criar flechas especiais.",
              type: "animal",
              rarity: "uncommon",
            },
            {
              name: "Congelante",
              description: "Obtido raramente de Drakes e Fenrings, usado para criar armas com dano de gelo.",
              type: "animal",
              rarity: "rare",
            },
            {
              name: "Forja de Prata",
              description:
                "Estação de artesanato avançada que permite trabalhar com prata para criar equipamentos poderosos.",
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
