import styles from './index.module.scss'
import {SyntheticEvent, useState} from "react";

const ReferralForm = () => {
    const [email, setEmail] = useState(null);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setEmail(event.target.email.value);
        console.log(event.target.email.value)
    };

    return (
        <form onSubmit={handleSubmit}>
            {email === "" && (
                <p className={styles.error}>Email is empty</p>
            )}
            <input type="text" name="email" placeholder="Enter your email address"
                   className={styles.textfield}/>
            <input type="submit" value="Get Referral Link" className={styles.button}/>
        </form>
    );
}

export default ReferralForm;
