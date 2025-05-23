import { motion } from 'framer-motion'
import styles from './Publications.module.scss'

// Данные для тематик
const topics = [
  'Военно-политика',
  'Экономика',
  'Финансы',
  'Вооружение',
  'Информационные конфликты',
  'Другое',
]

const Publications: React.FC = () => {
  return (
    <section className={styles.publications}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Публикации и материалы
          <span className={styles.titleLine}></span>
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Скоро здесь появятся аналитические статьи и отчёты, открытые для
          чтения и скачивания.
        </motion.p>
        <div className={styles.topics}>
          {topics.map((topic, index) => (
            <motion.span
              key={index}
              className={`${styles.chip} ${styles[`chip${index + 1}`]}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: [1, -1.5, 0.5, -1, 1.5, -0.5][index],
              }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
              }}
            >
              {topic}
            </motion.span>
          ))}
        </div>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#learn-more">Узнать больше</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
