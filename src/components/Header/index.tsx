import styles from './index.module.scss'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header className={styles.container}>
            <Logo />
            <nav>
                <ul>
                    <li><a href="#">Chrome Extension</a></li>
                    <li><a href="#">Price Comparison</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header