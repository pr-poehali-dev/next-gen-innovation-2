import { motion } from "framer-motion"
import { useState } from "react"
import AnimatedButton from "./AnimatedButton"
import Icon from "@/components/ui/icon"

const directions = [
  "Медицинское образование / НМО",
  "Аккредитация медработников",
  "Рабочие профессии",
  "Бухгалтерия и финансы",
  "Кадровое делопроизводство",
  "IT курсы",
  "Первая помощь",
  "Другое",
]

export default function ROICalculatorHome() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    direction: "",
    comment: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: "", phone: "", direction: "", comment: "" })
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-6">
              Связаться с нами
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Оставьте заявку — <span className="text-blue-700">мы поможем</span> выбрать программу
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Менеджер свяжется с вами в течение рабочего дня, ответит на вопросы и подберёт подходящее обучение.
            </p>

            {/* Contacts */}
            <div className="space-y-4 mb-10">
              {[
                { icon: "Phone", label: "Телефон", value: "8 800 000-00-00", href: "tel:+78000000000" },
                { icon: "MessageCircle", label: "WhatsApp", value: "Написать в WhatsApp", href: "https://wa.me/79000000000" },
                { icon: "Send", label: "Telegram", value: "@filin_edu", href: "https://t.me/filin_edu" },
                { icon: "Mail", label: "Email", value: "info@filin-edu.ru", href: "mailto:info@filin-edu.ru" },
                { icon: "MapPin", label: "Адрес", value: "г. Москва, Россия", href: "#" },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    <Icon name={contact.icon} className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{contact.label}</div>
                    <div className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "5 000+", label: "специалистов обучено" },
                { num: "200+", label: "программ" },
                { num: "Вся Россия", label: "дистанционно" },
              ].map((stat) => (
                <div key={stat.num} className="text-center bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <div className="text-xl font-bold text-blue-700">{stat.num}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Подать заявку</h3>
              <p className="text-gray-500 mb-8 text-sm">Заполните форму — мы перезвоним вам в течение рабочего дня.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h4>
                  <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Направление обучения</label>
                    <select
                      value={formData.direction}
                      onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none"
                    >
                      <option value="">Выберите направление</option>
                      {directions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Уточните программу или задайте вопрос..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                  <AnimatedButton
                    type="submit"
                    className="w-full bg-blue-700 text-white hover:bg-blue-800 font-semibold py-4 text-base"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Отправить заявку
                      <Icon name="ArrowRight" className="w-4 h-4" />
                    </span>
                  </AnimatedButton>
                  <p className="text-xs text-gray-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
