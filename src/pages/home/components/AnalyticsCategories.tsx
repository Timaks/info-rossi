import { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaGlobe,
  FaChartLine,
  FaShieldAlt,
  FaMoneyBillWave,
  FaRocket,
  FaNetworkWired,
} from 'react-icons/fa'
import styles from './AnalyticsCategories.module.scss'

class AnalyticsCategories extends Component {
  render() {
    const categories = [
      {
        title: 'Военно-политическая аналитика',
        description:
          'Современные конфликты выходят за рамки военных операций, включая политическое давление, санкции и информационное влияние.',
        points: [
          'Динамика конфликта Россия – Украина',
          'Роль США, НАТО и ЕС',
          'Эволюция военно-стратегических доктрин',
          'Новые альянсы и угрозы безопасности',
        ],
        icon: <FaShieldAlt />,
        ctaText: 'Подписаться',
        ctaLink: '/subscribe',
      },
      {
        title: 'Межгосударственные экономические отношения',
        description:
          'Торговля, санкции и энергетическая безопасность как инструменты влияния на мировой арене.',
        points: [
          'Экономические связи России с державами',
          'Последствия санкций',
          'Глобальные цепочки поставок',
          'Роль энергетических ресурсов',
        ],
        icon: <FaChartLine />,
        ctaText: 'Связаться',
        ctaLink: '/contact',
      },
      {
        title: 'Экономика',
        description:
          'Макроэкономические тренды и сценарный анализ в условиях геополитической нестабильности.',
        points: [
          'Динамика российской и мировой экономики',
          'Инфляция, ВВП, безработица',
          'Санкции и валютная турбулентность',
          'Сравнительный анализ экономик',
        ],
        icon: <FaMoneyBillWave />,
        ctaText: 'Подписаться',
        ctaLink: '/subscribe',
      },
      {
        title: 'Финансы',
        description:
          'Валютные расчёты, санкционные риски и развитие альтернативных платёжных систем.',
        points: [
          'Эволюция международных расчётов',
          'Альтернативные платёжные системы',
          'Геополитика валют и финтех',
          'Устойчивость банковского сектора',
        ],
        icon: <FaNetworkWired />,
        ctaText: 'Связаться',
        ctaLink: '/contact',
      },
      {
        title: 'Вооружение и технологии',
        description:
          'Анализ военных разработок, ВПК и технологического баланса сил.',
        points: [
          'Тенденции развития вооружённых сил',
          'Поставки вооружений',
          'Инновации: ИИ, беспилотники, РЭБ',
          'Сравнение военных потенциалов',
        ],
        icon: <FaRocket />,
        ctaText: 'Подписаться',
        ctaLink: '/subscribe',
      },
      {
        title: 'Информационная среда',
        description:
          'Пропаганда, медиавлияние и киберугрозы в современных конфликтах.',
        points: [
          'Информационное влияние и пропаганда',
          'Роль СМИ и соцсетей',
          'Кибератаки и утечки данных',
          'Анализ медианарративов',
        ],
        icon: <FaGlobe />,
        ctaText: 'Связаться',
        ctaLink: '/contact',
      },
    ]

    return (
      <motion.section
        className={styles.analytics}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.titleLine}></span>
            Темы аналитики
          </motion.h2>
          <div className={styles.grid}>
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <motion.div
                  className={styles.cta}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  <Link to={category.ctaLink} className={styles.ctaButton}>
                    {category.ctaText}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    )
  }
}

export default AnalyticsCategories
