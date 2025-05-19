import { Component } from 'react'
import { motion } from 'framer-motion'
import styles from './Mission.module.scss'

class Mission extends Component {
  render() {
    return (
      <motion.section
        className={styles.mission}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>Наша миссия</h2>
          <div className={styles.content}>
            <p>
              Информационно-аналитический центр «РОССИ» — это независимая
              экспертная структура, специализирующаяся на глубоких исследованиях
              в области внешней и внутренней политики, международных
              экономических отношений, безопасности и цифрового противостояния.
            </p>
            <p>
              Мы предоставляем объективную, глубокую и прагматичную аналитику по
              ключевым международным темам. Помогаем нашим клиентам понимать
              процессы — и действовать стратегически.
            </p>
            <p>
              Нашаша миссия — предоставлять объективную, системную и актуальную
              аналитику для тех, кто принимает решения в условиях высокой
              неопределённости и глобальной турбулентности.
            </p>
          </div>
        </div>
      </motion.section>
    )
  }
}

export default Mission
