import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Main from '../components/Main'
import DownloadsBar from '../components/DownloadsBar'

const Home: NextPage = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <DownloadsBar />
    </div>
  )
}

export default Home
