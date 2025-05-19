import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import Header from './Header'
import { Footer } from './Footer'

const Layout = () => {
  const location = useLocation()

  // Скролл вверх при смене страницы
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {/* <Header /> */}
      <main style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
