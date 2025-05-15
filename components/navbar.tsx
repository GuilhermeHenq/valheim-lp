"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, Axe, Shield, Compass, Skull } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const navItems = [
    { name: "Prado", href: isHomePage ? "#meadows" : "/prado", icon: <Compass className="w-5 h-5" /> },
    {
      name: "Floresta Negra",
      href: isHomePage ? "#black-forest" : "/floresta-negra",
      icon: <Axe className="w-5 h-5" />,
    },
    { name: "Pântano", href: isHomePage ? "#swamp" : "/pantano", icon: <Shield className="w-5 h-5" /> },
    { name: "Montanhas", href: isHomePage ? "#mountains" : "/montanhas", icon: <Skull className="w-5 h-5" /> },
    { name: "Planície", href: isHomePage ? "#plains" : "/planicie", icon: <Skull className="w-5 h-5" /> },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-valheim-dark/80 backdrop-blur-md border-b border-valheim-gold/20">
      <div className="container mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/valheim-logo.png" alt="Valheim Logo" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-valheim-gold hover:text-white transition-colors duration-300"
                onClick={() => {
                  if (!isHomePage) {
                    window.scrollTo(0, 0)
                  }
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-valheim-gold hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-valheim-dark border-b border-valheim-gold/20"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-valheim-gold hover:text-white py-2 transition-colors duration-300"
                onClick={() => {
                  setIsOpen(false)
                  if (!isHomePage) {
                    window.scrollTo(0, 0)
                  }
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <Button className="bg-transparent border border-valheim-gold text-valheim-gold hover:bg-valheim-gold/10 transition-all duration-300 w-full">
              Explorar
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
