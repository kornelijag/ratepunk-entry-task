import styles from "./index.module.scss";

import {FC, ReactNode} from "react";
interface IDownloadsButton {
    children?: ReactNode;
    onClick: () => void;
}

const DownloadsButton: FC<IDownloadsButton> = ({children, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={styles.btn}>
            {children}
        </button>
    )
}

export default DownloadsButton;
