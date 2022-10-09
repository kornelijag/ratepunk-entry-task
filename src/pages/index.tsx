import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Main from '../components/Main'
import Logo from '../assets/logo.svg'

const Home: NextPage = () => {
  return (
    <div className="body">
      <Header />
      <Main />

      <footer className="footer">
        <section className="footer__downloads">
          <button>available in the <em>Chrome web store</em></button>
          <button>available in the <em>Apple app store</em></button>
          <p className="rating">Chrome store reviews</p>
        </section>
        <section className="footer__info">
          <div className="info__about">
            <Logo />
            <p>Ratepunk compares hotel room prices across the major online
              travel agencies. When you search for a room, Ratepunk extension
              scans the top booking sites and runs a price comparison, so you
              can be confident in knowing you're getting the best deal!
            </p>
            <p>
              © 2021 Ratepunk. All Rights Reserved.
            </p>
          </div>
          <div className="info__links">
            <h3>Quick links</h3>
            <ul>
              <li><a href="#">Price Comparison</a></li>
              <li><a href="#">Chrome Extension</a></li>
              <li><a href="#">How It works</a></li>
              <li><a href="#">Ratepunk Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="info__contacts">
            <div>
              <h3>Contact</h3>
              <p>hi@ratepunk.com</p>
            </div>
            <div>
              <h3>Social</h3>
              <ul>
                <li><a href="#">img</a></li>
                <li><a href="#">img</a></li>
                <li><a href="#">img</a></li>
                <li><a href="#">img</a></li>
                <li><a href="#">img</a></li>
              </ul>
            </div>
          </div>
        </section>
      </footer> 
    </div>
  )
}

export default Home
