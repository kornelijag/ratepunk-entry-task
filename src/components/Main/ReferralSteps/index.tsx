import styles from './index.module.scss'
import Invite from '../../../assets/invite.svg'
import CollectCoins from '../../../assets/collect-coins.svg'
import Voucher from '../../../assets/voucher.svg'

const ReferralSteps = () => {
    return (
        <div className={styles.container}>
            <ol>
                <li>
                    <Invite />
                    <div>
                        <p className={styles.step}>Step 1</p>
                        <h2>Invite friends</h2>
                        <p>Refer friends with your unique referral link.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p className={styles.step}>Step 2</p>
                        <h2>Collect coins</h2>
                        <p>Get 1 coin for each friend that installs our extension
                            using our referral link.
                        </p>
                    </div>
                    <CollectCoins />
                </li>
                <li>
                    <Voucher />
                    <div>
                        <p className={styles.step}>Step 3</p>
                        <h2>Get voucher</h2>
                        <p>Redeem for a $20 hotel booking voucher once you collect
                            20 coins.
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default ReferralSteps
