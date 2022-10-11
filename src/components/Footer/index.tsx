import styles from './index.module.scss'
import Logo from '../../assets/logo.svg'
import EmailFooter from '../../assets/email-footer.svg'
import SocialMediaButton from "./SocialMediaButton";
import {SiInstagram} from 'react-icons/si';
import {ImFacebook} from 'react-icons/im';
import {GrLinkedinOption} from 'react-icons/gr';
import {ImTwitter} from 'react-icons/im';
import {FaTiktok} from 'react-icons/fa';

const Footer = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <Logo/>
                    <p className={styles.description}>Ratepunk compares hotel room prices across the major online
                        travel agencies. When you search for a room, Ratepunk extension
                        scans the top booking sites and runs a price comparison, so you
                        can be confident in knowing you're getting the best deal!
                    </p>
                    <p className={styles.postscript}>
                        © 2021 Ratepunk. All Rights Reserved.
                    </p>
                </div>
                <div className={styles.links}>
                    <h3>Quick links</h3>
                    <ul>
                        <li><a href="#">Price Comparison</a></li>
                        <li><a href="#">Chrome Extension</a></li>
                        <li><a href="#">How It works</a></li>
                        <li><a href="#">Ratepunk Blog</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contacts__email}>
                        <h3>Contact</h3>
                        <div className={styles.items}>
                            <EmailFooter/>
                            <p>hi@ratepunk.com</p>
                        </div>
                    </div>
                    <div className={styles.contacts__social}>
                        <h3>Social</h3>
                        <div className={styles.items}>
                            <SocialMediaButton onClick={()=>{openInNewTab("#");
                            }}><SiInstagram/></SocialMediaButton>
                            <SocialMediaButton onClick={()=>{openInNewTab("#");
                            }}><ImFacebook/></SocialMediaButton>
                            <SocialMediaButton onClick={()=>{openInNewTab("#");
                            }}><GrLinkedinOption/></SocialMediaButton>
                            <SocialMediaButton onClick={()=>{openInNewTab("#");
                            }}><ImTwitter/></SocialMediaButton>
                            <SocialMediaButton onClick={()=>{openInNewTab("#");
                            }}><FaTiktok/></SocialMediaButton>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
