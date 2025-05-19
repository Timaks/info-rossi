import { Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/header/Header'
import { Footer } from './components/layout/footer/Footer'

import styles from './App.module.scss'
import { ScrollToTop } from './components/layout/ScrollToTop'
import Home from './pages/home/Home'

// Заглушки для страниц
const Mission = () => <div className={styles.content}>Миссия</div>
const Topics = () => <div className={styles.content}>Тема</div>
const Materials = () => <div className={styles.content}>Материалы</div>
const Services = () => <div className={styles.content}>Услуги</div>
const Contact = () => <div className={styles.content}>Контакты</div>

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/services" element={<Services />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
