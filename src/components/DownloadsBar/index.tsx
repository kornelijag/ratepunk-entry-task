import styles from './index.module.scss'

const DownloadsBar = () => {
    return(
        <div className={styles.container}>
          <button>available in the <em>Chrome web store</em></button>
          <button>available in the <em>Apple app store</em></button>
          <p className="rating">Chrome store reviews</p>
        </div>
    )
}

export default DownloadsBar