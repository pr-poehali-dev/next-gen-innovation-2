import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function AnimatedFooter() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Ф</span>
              </div>
              <span className="text-lg font-bold text-white">
                Кадровый центр <span className="text-blue-400">«Филин»</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Лицензированный образовательный центр. Повышение квалификации,
              профессиональная переподготовка и аккредитация специалистов по всей России.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">8 800 000-00-00</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">info@filin-edu.ru</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">г. Москва, Россия</span>
              </div>
            </div>
          </motion.div>

          {/* Обучение */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold text-white mb-5">Обучение</h4>
            <ul className="space-y-3">
              {[
                "Медицинское образование",
                "Рабочие профессии",
                "IT курсы",
                "Бухгалтерия",
                "Кадровое делопроизводство",
                "Первая помощь",
              ].map((link) => (
                <li key={link}>
                  <a href="#directions" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-2 flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Аккредитация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold text-white mb-5">Аккредитация</h4>
            <ul className="space-y-3">
              {[
                "Периодическая аккредитация",
                "Аккредитация врачей",
                "Аккредитация медсестёр",
                "Аккредитация фармацевтов",
                "НМО баллы",
              ].map((link) => (
                <li key={link}>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-2 flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* О центре / Документы */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-semibold text-white mb-5">О центре</h4>
            <ul className="space-y-3 mb-8">
              {[
                "О нас",
                "Контакты",
                "Лицензия",
                "Документы",
                "Политика конфиденциальности",
              ].map((link) => (
                <li key={link}>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-2 flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Кадровый центр «Филин». Все права защищены.
            </p>
            <p className="text-gray-600 text-sm">
              Лицензированная образовательная организация · Документы с внесением в ФРДО
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
