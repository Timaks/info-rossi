import { motion } from 'framer-motion'
import styles from './OurServices.module.scss'

// Данные для карточек
const services = [
  {
    title: 'Аналитические отчёты и брифинги',
    description:
      'Мы готовим регулярные и разовые отчёты по вопросам политики, безопасности, экономики и информационной среды.',
    items: [
      'Фактический и событийный анализ',
      'Экспертная интерпретация',
      'Прогнозные оценки и сценарные модели',
      'Графики, таблицы и визуализация',
    ],
    ctaText: 'Заказать отчёт',
    ctaLink: '#contact',
  },
  {
    title: 'Мониторинги и тематические обзоры',
    description:
      'Постоянный мониторинг военных действий, санкций, медиапространства и технологических трендов.',
    items: [
      'Военные действия и политическая активность',
      'Санкции, торговые потоки, рынки',
      'Медиапространство и информационные кампании',
      'Технологические тренды в ВПК и финтехе',
    ],
    ctaText: 'Подписаться',
    ctaLink: '#subscribe',
  },
  {
    title: 'Индивидуальные исследования под запрос',
    description:
      'Специализированные документы для докладов, стратегических решений и оценки рисков.',
    items: [
      'Доклады в закрытом формате',
      'Подготовка для ведомств и корпораций',
      'Интервью с экспертами и картография',
      'Сценарный анализ под задачи заказчика',
    ],
    ctaText: 'Связаться',
    ctaLink: '#contact',
  },
  {
    title: 'White label аналитика',
    description:
      'Профессиональные материалы под вашим брендом для усиления экспертного имиджа.',
    items: [
      'Адаптация под ваш стиль',
      'Публикация от вашего имени',
      'Контент без аналитического отдела',
      'Участие в публичной экспертизе',
    ],
    ctaText: 'Заказать',
    ctaLink: '#contact',
  },
  {
    title: 'Конфиденциальные проекты (NDA)',
    description:
      'Закрытые спецпроекты с максимальной точностью и конфиденциальностью.',
    items: [
      'Работа по индивидуальному ТЗ',
      'Стратегические брифинги',
      'Ситуационные модели и симуляции',
      'Поддержка переговоров и делегаций',
    ],
    ctaText: 'Связаться',
    ctaLink: '#contact',
  },
  {
    title: 'Присутствие в информационном поле',
    description:
      'Создание устойчивого имиджа и экспертного веса в медиа и профессиональных сообществах.',
    items: [
      'Информационные поводы и медиапакеты',
      'Публикации в изданиях',
      'Работа с Telegram и блогами',
      'Подготовка выступлений и интервью',
    ],
    ctaText: 'Подписаться',
    ctaLink: '#subscribe',
  },
  {
    title: 'PR сопровождение',
    description:
      'Стратегическое управление репутацией и профессиональной видимостью.',
    items: [
      'Медиапланирование и спичрайтинг',
      'Репутационные публикации',
      'Кризисный PR и контрнарративы',
      'Организация аналитических мероприятий',
    ],
    ctaText: 'Связаться',
    ctaLink: '#contact',
  },
  {
    title: 'GR сопровождение',
    description:
      'Выстраивание диалога с органами власти и экспертная поддержка инициатив.',
    items: [
      'Аналитическая поддержка законопроектов',
      'Экспертные записки и справки',
      'Институциональный диалог',
      'Консультации по нормативным вопросам',
    ],
    ctaText: 'Связаться',
    ctaLink: '#contact',
  },
]

const OurServices: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Наши услуги
          <span className={styles.titleLine}></span>
        </motion.h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
                rotate: index % 2 === 0 ? 1.5 : -1.5,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: [1, -1.5, 0.5, -1, 1.5, -0.5, 1, -1.2][index],
                y: [10, -5, 5, 0, -10, 15, -5, 10][index],
              }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              whileHover={{
                rotate: 0,
                y: -5,
                boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className={styles.cta}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                <a href={service.ctaLink}>{service.ctaText}</a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
