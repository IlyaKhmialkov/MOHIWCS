import styles from "./Modal.module.scss";
import { Button } from "../../Button/Button";

interface IModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ active, setActive }: IModalProps) {
    return (
        <div
            className={active ? `${styles.modalContainer} ${styles.active}` : `${styles.modalContainer}`}
            onClick={() => setActive(false)}
        >
            <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
                <img src="react.svg" alt="react" />
                <p>React is cool</p>
                <Button text="close" action={() => setActive(false)} />
            </div>
            <div className={styles.modalOverlay}></div>
        </div>
    );
}
