import { motion } from "framer-motion"
import { useState } from "react"
import AnimatedButton from "./AnimatedButton"
import Icon from "@/components/ui/icon"

const directions = [
  {
    id: "medical",
    title: "Медицинское образование",
    description: "НМО, повышение квалификации, аккредитация медицинских работников. Официальные удостоверения установленного образца.",
    icon: "Stethoscope",
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
    bgIcon: "bg-red-500/20",
    image: "🏥",
  },
  {
    id: "accreditation",
    title: "Периодическая аккредитация",
    description: "Аккредитация специалистов здравоохранения согласно требованиям Минздрава РФ. Помогаем пройти процедуру дистанционно.",
    icon: "Award",
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    bgIcon: "bg-purple-500/20",
    image: "🎖️",
  },
  {
    id: "professions",
    title: "Рабочие профессии",
    description: "Обучение рабочим специальностям: электрики, сварщики, операторы, водители и другие. Удостоверения с внесением в ФРДО.",
    icon: "Wrench",
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    bgIcon: "bg-orange-500/20",
    image: "🔧",
  },
  {
    id: "accounting",
    title: "Бухгалтерия",
    description: "Курсы бухгалтерского учёта для начинающих и опытных специалистов. 1С, зарплата, налогообложение, отчётность.",
    icon: "Calculator",
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    bgIcon: "bg-green-500/20",
    image: "📊",
  },
  {
    id: "hr",
    title: "Кадровое делопроизводство",
    description: "Оформление трудовых отношений, кадровый документооборот, трудовое законодательство. Для HR-специалистов и руководителей.",
    icon: "Users",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    bgIcon: "bg-blue-500/20",
    image: "👥",
  },
  {
    id: "it",
    title: "IT курсы",
    description: "Программирование, системное администрирование, работа с 1С, веб-разработка и другие IT-профессии с нуля и для специалистов.",
    icon: "Monitor",
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    bgIcon: "bg-cyan-500/20",
    image: "💻",
  },
  {
    id: "firstaid",
    title: "Первая помощь",
    description: "Обучение оказанию первой помощи пострадавшим. Программы для работодателей и организаций согласно требованиям ТК РФ.",
    icon: "HeartPulse",
    color: "from-pink-500/20 to-pink-600/10",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
    bgIcon: "bg-pink-500/20",
    image: "❤️",
  },
]

const popularPrograms = [
  { title: "Бухгалтер по зарплате", hours: "144 ч.", category: "Бухгалтерия" },
  { title: "Специалист по закупкам (44-ФЗ)", hours: "256 ч.", category: "Кадры" },
  { title: "Системный администратор", hours: "256 ч.", category: "IT" },
  { title: "Оператор 1С: Бухгалтерия", hours: "72 ч.", category: "IT" },
  { title: "Сказкотерапия", hours: "144 ч.", category: "Психология" },
  { title: "Семейное консультирование", hours: "256 ч.", category: "Психология" },
]

const services = [
  {
    icon: "TrendingUp",
    title: "Повышение квалификации",
    description: "Актуализация знаний и навыков по профилю. Удостоверение государственного образца.",
  },
  {
    icon: "GraduationCap",
    title: "Профессиональная переподготовка",
    description: "Получение новой специальности или квалификации. Диплом о профессиональной переподготовке.",
  },
  {
    icon: "ShieldCheck",
    title: "Аккредитация медработников",
    description: "Прохождение периодической аккредитации медицинских и фармацевтических работников.",
  },
  {
    icon: "Building2",
    title: "Корпоративное обучение",
    description: "Обучение сотрудников организаций под требования работодателя. Гибкий график и программы.",
  },
]

const whyUs = [
  { icon: "BadgeCheck", text: "Лицензированная образовательная организация" },
  { icon: "FileText", text: "Официальные документы установленного образца" },
  { icon: "Database", text: "Внесение в ФРДО" },
  { icon: "Wifi", text: "Обучение дистанционно, без отрыва от работы" },
  { icon: "MapPin", text: "Работаем по всей России" },
  { icon: "HeadphonesIcon", text: "Поддержка и сопровождение слушателей" },
]

const whoIsItFor = [
  { icon: "Stethoscope", title: "Врачи", desc: "НМО, аккредитация, ПК" },
  { icon: "Heart", title: "Медсёстры", desc: "Повышение квалификации" },
  { icon: "Pill", title: "Фармацевты", desc: "Аккредитация, НМО" },
  { icon: "HardHat", title: "Рабочие профессии", desc: "Обучение и переподготовка" },
  { icon: "Calculator", title: "Бухгалтеры", desc: "1С, зарплата, учёт" },
  { icon: "Monitor", title: "IT-специалисты", desc: "Курсы и сертификация" },
]

const reviews = [
  {
    name: "Елена Сергеевна К.",
    position: "Медицинская сестра",
    text: "Прошла периодическую аккредитацию через центр. Всё чётко, быстро, документы получила в срок. Буду рекомендовать коллегам!",
    rating: 5,
  },
  {
    name: "Андрей Васильев",
    position: "Системный администратор",
    text: "Отличный курс по системному администрированию. Материал понятный, куратор всегда на связи. Диплом выдали через 2 недели после окончания.",
    rating: 5,
  },
  {
    name: "Наталья Романова",
    position: "Главный бухгалтер",
    text: "Проходила курс повышения квалификации по бухучёту. Очень удобно — дистанционно, без отрыва от работы. Документы официальные, всё по закону.",
    rating: 5,
  },
]

const faqItems = [
  {
    q: "Можно ли учиться дистанционно?",
    a: "Да, все наши программы доступны в дистанционном формате. Вы получаете доступ к личному кабинету и проходите обучение в удобное для вас время.",
  },
  {
    q: "Какие документы выдаются после обучения?",
    a: "По итогам обучения вы получаете удостоверение о повышении квалификации или диплом о профессиональной переподготовке установленного образца с внесением в ФРДО.",
  },
  {
    q: "Сколько длится обучение?",
    a: "Продолжительность зависит от программы: от 16 часов (краткосрочные курсы) до 520 часов (профессиональная переподготовка). Уточняйте при выборе программы.",
  },
  {
    q: "Подходят ли курсы для аккредитации медработников?",
    a: "Да, наши программы для медицинских работников разработаны с учётом требований Минздрава РФ и засчитываются для периодической аккредитации.",
  },
]

export default function InnovativeServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* НАПРАВЛЕНИЯ */}
      <section id="directions" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-4">
              Основные направления
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Чему мы обучаем</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Более 200 программ для специалистов разных сфер. Выбирайте направление и начинайте обучение сегодня.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {directions.map((dir, index) => (
              <motion.div
                key={dir.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br ${dir.color} border ${dir.borderColor} rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group flex flex-col`}
              >
                <div className={`w-14 h-14 ${dir.bgIcon} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
                  {dir.image}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {dir.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{dir.description}</p>
                <a href="#contact">
                  <button className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors">
                    Подробнее
                    <Icon name="ChevronRight" className="w-4 h-4" />
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* О НАС */}
      <section id="about" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-6">
                О нас
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Кадровый центр <span className="text-blue-700">«Филин»</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Образовательный центр, который помогает специалистам получить новые знания, повысить квалификацию
                и соответствовать требованиям законодательства.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Работаем с физическими лицами и организациями по всей России. Все документы установленного образца
                с обязательным внесением в ФРДО.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5 000+", label: "обученных специалистов" },
                  { num: "200+", label: "программ обучения" },
                  { num: "По всей России", label: "дистанционный формат" },
                  { num: "От 1 700 ₽", label: "стоимость курсов" },
                ].map((stat) => (
                  <div key={stat.num} className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-700 mb-1">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
                <div className="space-y-3">
                  {whyUs.map((item) => (
                    <div key={item.text} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={item.icon} className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-700 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Phone" className="w-5 h-5 text-blue-200" />
                  <span className="font-semibold">Бесплатная консультация</span>
                </div>
                <p className="text-blue-100 text-sm mb-4">Помогём подобрать программу под ваши задачи и требования.</p>
                <a href="#contact">
                  <AnimatedButton className="w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                    Записаться на консультацию
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ПОПУЛЯРНЫЕ ПРОГРАММЫ */}
      <section id="programs" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-4">
              Популярные программы
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Выбирают чаще всего</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Начните обучение уже сегодня — доступ открывается сразу после оплаты.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularPrograms.map((prog, index) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-xs text-blue-700 font-medium mb-3">
                  {prog.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {prog.title}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Clock" className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{prog.hours}</span>
                </div>
                <a href="#contact">
                  <button className="w-full py-2.5 border-2 border-blue-700 text-blue-700 rounded-xl text-sm font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200">
                    Подробнее
                  </button>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="#contact">
              <AnimatedButton className="bg-blue-700 text-white hover:bg-blue-800 px-10">
                <span className="flex items-center gap-2">
                  Смотреть все программы
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </span>
              </AnimatedButton>
            </a>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-4">
              Услуги
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Что мы предлагаем</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, index) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={svc.icon} className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* КОМУ ПОДОЙДЁТ */}
      <section className="py-24 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Кому подойдёт</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Наши программы разработаны для специалистов разных профессий и уровней подготовки.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {whoIsItFor.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={item.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                <div className="text-xs text-blue-200">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* АКЦИИ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-sm text-orange-700 font-medium mb-4">
                  <Icon name="Tag" className="w-4 h-4 mr-2" />
                  Актуальные акции
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Курсы от <span className="text-blue-700">1 700 ₽</span>
                </h2>
                <div className="space-y-3">
                  {[
                    "Скидки на обучение для физических лиц",
                    "Специальные цены на аккредитацию медработников",
                    "Корпоративные скидки при обучении от 5 человек",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <a href="#contact">
                  <AnimatedButton className="bg-blue-700 text-white hover:bg-blue-800 px-10 py-4 text-lg font-semibold">
                    Узнать стоимость
                  </AnimatedButton>
                </a>
                <p className="text-sm text-gray-500 mt-3">Бесплатная консультация</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-4">
              Отзывы
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Что говорят наши выпускники</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <Icon
                    name={openFaq === index ? "ChevronUp" : "ChevronDown"}
                    className="w-5 h-5 text-gray-400 flex-shrink-0"
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
