import styles from './Footer.module.css'

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <h3>{currentYear} Информационно-аналитический центр «РОССИ»</h3>
      <p>
        Мы работаем с фактами, думаем на шаг вперёд и помогаем действовать
        уверенно.
      </p>
    </footer>
  )
}
