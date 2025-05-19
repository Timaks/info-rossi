import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

type NavItem = {
  label: string
  to: string
}
const navItems: NavItem[] = [
  {
    label: 'Миссия',
    to: '/mission',
  },
  { label: 'Темы', to: '/topics' },
  { label: 'Услуги', to: '/services' },
  { label: 'Материалы', to: '/materials' },
  { label: 'Контакты', to: '/contacts' },
]

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>РОССИ</h1>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
