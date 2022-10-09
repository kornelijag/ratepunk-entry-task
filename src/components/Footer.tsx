import Logo from '../assets/logo.svg'

const Footer = () => {
    return(
        <footer>
        <div className="about">
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
        <div className="links">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Price Comparison</a></li>
            <li><a href="#">Chrome Extension</a></li>
            <li><a href="#">How It works</a></li>
            <li><a href="#">Ratepunk Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="contacts">
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
      </footer>
    )
}

export default Footer