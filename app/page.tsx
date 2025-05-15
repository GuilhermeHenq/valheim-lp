import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AwardCards } from "@/components/award-cards"
import { MeadowsSection } from "@/components/meadows-section"
import { BlackForestSection } from "@/components/black-forest-section"
import { SwampSection } from "@/components/swamp-section"
import { MountainsSection } from "@/components/mountains-section"
import { PlainsSection } from "@/components/plains-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AwardCards />
      <MeadowsSection />
      <BlackForestSection />
      <SwampSection />
      <MountainsSection />
      <PlainsSection />
      <Footer />
    </main>
  )
}
