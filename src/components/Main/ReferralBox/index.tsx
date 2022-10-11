import styles from './index.module.scss'
import ReferralForm from './ReferralForm'

const ReferralBox = () => {
    return (
        <div className={styles.container}>
            <h1>Refer friends and get rewards</h1>
            <p className={styles.paragraph}>Refer your friends to us and earn hotel booking vouchers.
                We'll give you 1 coin for each friend that installs our extension.
                Minimum cash-out at 20 coins.
            </p>
            <ReferralForm />
            <p className={styles.postscript}>Limits on max rewards apply.</p>
        </div>
    )
}

export default ReferralBox
