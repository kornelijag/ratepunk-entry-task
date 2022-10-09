import styles from '../styles/Main.module.scss'

const Main = () => {
    return (
        <main className={styles.container}>
        <div className="refferal-box">
          <h1>Refer friends and get rewards</h1>
          <p>Refer your friends to us and earn hotel booking vouchers.
            We'll give you 1 coin for each friend that installs our extension.
            Minimum cash-out at 20 coins.
          </p>
          <p className="post-scriptum">Limits on max rewards apply.</p>
        </div>
        <div className="refferal-steps">
          <ol>
            <li>
              <p>Step 1</p>
              <h2>Invite friends</h2>
              <p>Refer friends with your unique referral link.</p>
            </li>
            <li>
              <p>Step 2</p>
              <h2>Collect coins</h2>
              <p>Get 1 coin for each friend that installs our extension
                using our referral link.
              </p>
            </li>
            <li>
              <p>Step 3</p>
              <h2>Get voucher</h2>
              <p>Redeem for a $20 hotel booking voucher once you collect
                20 coins.
              </p>
            </li>
          </ol>
        </div>
      </main>
    )
}

export default Main