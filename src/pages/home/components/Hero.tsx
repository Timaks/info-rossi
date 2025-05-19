import { Component } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

class Hero extends Component {
  render() {
    return (
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          {/* Intro Section */}
          <motion.div
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.column}>
              <div className={styles.subheader}>
                <div className={styles.line}></div>
                <span>
                  Независимая аналитика о безопасности, конфликтах и глобальной
                  политике
                </span>
              </div>
              <h2 className={styles.title}>
                Информационно-аналитический центр «РОССИ»
              </h2>
            </div>
            <div className={styles.emptyColumn}></div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            className={styles.imageBlock}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="https://hartpartners.com.au/wp-content/uploads/2022/09/register-your-.au-domain-1.jpg"
              alt="Background Image"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <p className={styles.overlayText}>
                Мы предоставляем объективную, глубокую и прагматичную аналитику
                по ключевым международным темам. Помогаем нашим клиентам
                понимать процессы — и действовать стратегически.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    )
  }
}

export default Hero
