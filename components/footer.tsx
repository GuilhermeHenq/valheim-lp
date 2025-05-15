import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a1015] border-t border-valheim-gold/20 py-12 relative">
      <div className="mist-overlay opacity-10"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/valheim-logo.png"
                alt="Valheim Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Explore os diversos biomas de Valheim, cada um com seus próprios desafios, recursos e criaturas únicas.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Youtube className="h-5 w-5" />, href: "#" },
                { icon: <Mail className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-valheim-gold transition-colors duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Biomas</h3>
            <ul className="space-y-2">
              {["Prado", "Floresta Negra", "Pântano", "Montanhas", "Planície"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-valheim-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {["Guia de Sobrevivência", "Mapa Interativo", "Crafting", "Bestiário", "Atualizações"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-valheim-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Valheim. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
