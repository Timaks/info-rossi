import { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGlobe, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import styles from './Mission.module.scss'

class Mission extends Component {
  render() {
    const paragraphs = [
      {
        text: 'Информационно-аналитический центр «РОССИ» — это независимая экспертная структура, специализирующаяся на глубоких исследованиях в области внешней и внутренней политики, международных экономических отношений, безопасности и цифрового противостояния.',
        icon: <FaGlobe />,
      },
      {
        text: 'Мы предоставляем объективную, глубокую и прагматичную аналитику по ключевым международным темам. Помогаем нашим клиентам понимать процессы — и действовать стратегически.',
        icon: <FaChartLine />,
      },
      {
        text: 'Наша миссия — предоставлять объективную, системную и актуальную аналитику для тех, кто принимает решения в условиях высокой неопределённости и глобальной турбулентности.',
        icon: <FaShieldAlt />,
      },
    ]

    return (
      <motion.section
        className={styles.mission}
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
            Наша миссия
          </motion.h2>
          <div className={styles.content}>
            {paragraphs.map((para, index) => (
              <motion.div
                key={index}
                className={styles.paragraph}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <span className={styles.icon}>{para.icon}</span>
                <p>{para.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Link to="/contact" className={styles.ctaButton}>
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </motion.section>
    )
  }
}

export default Mission
