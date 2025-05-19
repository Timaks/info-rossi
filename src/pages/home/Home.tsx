import { Component } from 'react'
import { Helmet } from 'react-helmet'
import Hero from './components/Hero'
import styles from './Home.module.scss'

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
      </div>
    )
  }
}

export default Home
