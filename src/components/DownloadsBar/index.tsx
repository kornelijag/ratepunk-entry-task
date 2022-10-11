import styles from './index.module.scss'
import DownloadsButton from "./DownloadsButton";
import {RiStarFill} from 'react-icons/ri';
import Chrome from '../../assets/chrome.svg'
import Apple from '../../assets/apple.svg'

const DownloadsBar = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <DownloadsButton onClick={() => {openInNewTab("#");}}>
                    <Chrome/>
                    <div className={styles.button__text}>
                        <p>available in the</p>
                        <em>Chrome web store</em>
                    </div>
                </DownloadsButton>
                <DownloadsButton onClick={() => {openInNewTab("#");}}>
                    <Apple/>
                    <div className={styles.button__text}>
                        <p>available in the</p>
                        <em>Apple app store</em>
                    </div>
                </DownloadsButton>
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                    </div>
                    <p>Chrome store reviews</p>
                </div>
            </div>
        </div>
    )
}

export default DownloadsBar
