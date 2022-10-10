import styles from './index.module.scss'
import Invite from '../../assets/invite.svg'
import CollectCoins from '../../assets/collect-coins.svg'
import Voucher from '../../assets/voucher.svg'
import ReferralBox from './ReferralBox'
import ReferralSteps from './ReferralSteps'

const Main = () => {
    return (
      <main className={styles.container}>
        <ReferralBox />
        <ReferralSteps />
      </main>
    )
}

export default Main