import { motion } from 'framer-motion'
import styles from './ContactUs.module.scss'

// Данные для контактов
const contacts = [
  {
    type: 'email',
    value: 'info@rossi-center.org',
    link: 'mailto:info@rossi-center.org',
  },
  {
    type: 'telegram',
    value: '@rossi_analytics',
    link: 'https://t.me/rossi_analytics',
  },
]

const ContactUs: React.FC = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Связь с нами
          <span className={styles.titleLine}></span>
        </motion.h2>
        <ul className={styles.contacts}>
          {contacts.map((contact, index) => (
            <motion.li
              key={index}
              className={styles[contact.type]}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <a href={contact.link}>{contact.value}</a>
            </motion.li>
          ))}
        </ul>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Оставьте заявку — и мы подготовим индивидуальное предложение.
        </motion.p>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#contact">Оставить заявку</a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
