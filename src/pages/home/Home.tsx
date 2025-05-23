import { Component } from 'react'
import { Helmet } from 'react-helmet'
import Hero from './components/Hero'
import styles from './Home.module.scss'
import Mission from './components/Mission'
import AnalyticsCategories from './components/AnalyticsCategories'
import OurServices from './components/OurServices'
import Publications from './components/Publications'
import ContactUs from './components/ContactUs'

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet>
          <title>РОССИ - Информационно-аналитический центр</title>
          <meta
            name="description"
            content="Независимая аналитика о безопасности, конфликтах и глобальной политике."
          />
          <meta
            name="keywords"
            content="аналитика, безопасность, глобальная политика, РОССИ, конфликты"
          />
        </Helmet>
        <Hero />
        <Mission />
        <AnalyticsCategories />
        <OurServices />
        <Publications />
        <ContactUs />
      </div>
    )
  }
}

export default Home
