import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"
import Icon from "@/components/ui/icon"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-white/90 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(30, 64, 175, 0.3)",
            "rgba(30, 64, 175, 0.5)",
            "rgba(30, 64, 175, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Ф</span>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  Кадровый центр <span className="text-blue-700">«Филин»</span>
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#directions" className="text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  Направления
                </a>
                <a href="#programs" className="text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  Программы
                </a>
                <a href="#about" className="text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  О центре
                </a>
                <a href="#contact" className="text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  Контакты
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:+78001234567">
                <Button variant="ghost" className="text-sm text-gray-700 hover:text-blue-700">
                  8 800 000-00-00
                </Button>
              </a>
              <a href="#contact">
                <AnimatedButton size="sm" className="bg-blue-700 text-white hover:bg-blue-800">
                  Получить консультацию
                </AnimatedButton>
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen
                  ? <Icon name="X" className="h-5 w-5 text-gray-700" />
                  : <Icon name="Menu" className="h-5 w-5 text-gray-700" />
                }
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#directions" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Направления
              </a>
              <a href="#programs" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Программы
              </a>
              <a href="#about" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                О центре
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Контакты
              </a>
              <div className="pt-3 border-t border-gray-200">
                <a href="#contact" className="block">
                  <AnimatedButton className="w-full bg-blue-700 text-white hover:bg-blue-800">
                    Получить консультацию
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
