import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    title: "Оставляете заявку",
    description: "Заполняете форму или звоните нам. Менеджер свяжется с вами в течение рабочего дня и поможет выбрать подходящую программу.",
    icon: "ClipboardList",
    gradient: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    number: "02",
    title: "Получаете доступ",
    description: "После оформления договора и оплаты вам открывают доступ в личный кабинет с учебными материалами.",
    icon: "KeyRound",
    gradient: "from-green-500/10 to-green-600/5",
    borderColor: "border-green-200",
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    number: "03",
    title: "Проходите обучение",
    description: "Изучаете материалы в удобном темпе. Куратор всегда на связи и готов ответить на вопросы по программе.",
    icon: "BookOpenCheck",
    gradient: "from-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    number: "04",
    title: "Получаете документы",
    description: "По итогам обучения получаете удостоверение или диплом установленного образца. Данные вносятся в ФРДО.",
    icon: "FileCheck2",
    gradient: "from-orange-500/10 to-orange-600/5",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-700",
  },
]

export default function HowWeWork() {
  return (
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
            Как это работает
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Как проходит обучение</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Всего 4 простых шага от заявки до получения официального документа.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${step.gradient} border ${step.borderColor} rounded-2xl p-7 transition-all duration-300 group relative`}
            >
              <div className="text-5xl font-black text-gray-100 absolute top-4 right-5 select-none">
                {step.number}
              </div>
              <div className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon name={step.icon} className={`w-7 h-7 ${step.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
