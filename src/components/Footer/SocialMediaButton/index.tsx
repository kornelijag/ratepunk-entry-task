import styles from "./index.module.scss";

import {FC, ReactNode} from "react";
interface ISocialMediaButton {
    children?: ReactNode;
    onClick: () => void;
}

const SocialMediaButton: FC<ISocialMediaButton> = ({children, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={styles.btn}>
            {children}
        </button>
    )
}

export default SocialMediaButton;
