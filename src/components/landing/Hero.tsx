import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import Icon from "@/components/ui/icon"

export default function Hero() {
  const stats = [
    { value: 5000, suffix: "+", label: "Обученных специалистов" },
    { value: 200, suffix: "+", label: "Программ обучения" },
    { value: 98, suffix: "%", label: "Довольных слушателей" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-blue-900/40 z-0" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span>Лицензированная образовательная организация</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white"
              >
                Обучение и повышение квалификации
                <span className="block mt-2 text-blue-300">с официальными документами</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto"
              >
                Медицинское образование, рабочие профессии, IT и профессиональная переподготовка.
                Дистанционно по всей России.
              </motion.p>
            </div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <div className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Icon name="MapPin" className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Работаем по всей России</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Icon name="FileCheck" className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white">Документы с внесением в ФРДО</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Icon name="BookOpen" className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-white">Более 200 программ</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <a href="#directions">
                <AnimatedButton variant="slim" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8">
                  <span className="flex items-center">
                    Подобрать обучение
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>
              <a href="#contact">
                <AnimatedButton variant="slim" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8">
                  Получить консультацию
                </AnimatedButton>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
