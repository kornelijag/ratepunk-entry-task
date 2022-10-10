import styles from './index.module.scss'

const ReferralBox = () => {
    return (
        <div className={styles.container}>
            <h1>Refer friends and get rewards</h1>
            <p>Refer your friends to us and earn hotel booking vouchers.
                We'll give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
            </p>
            <p className={styles['post-scriptum']}>Limits on max rewards apply.</p>
        </div>
    )
}

export default ReferralBox