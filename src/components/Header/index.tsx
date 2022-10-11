import styles from './index.module.scss'
import Logo from '../../assets/logo.svg'
import {FaBars} from 'react-icons/fa';
import {useState} from 'react';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className={styles.container}>
            <div className={styles.header__desktop}>
                <Logo/>
                <nav>
                    <ul>
                        <li><a href="#">Chrome Extension</a></li>
                        <li><a href="#">Price Comparison</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.header__mobile}>
                <div className={styles.menuBar}>
                    <Logo/>
                    <FaBars onClick={() => {
                        setOpenMenu(!openMenu)
                    }}/>
                </div>
                {openMenu && (
                    <nav>
                        <ul className={styles.dropdownNavMenu}>
                            <li><a href="#">Chrome Extension</a></li>
                            <li><a href="#">Price Comparison</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                )}

            </div>
        </header>
    )
}

export default Header
