import styles from "./Footer.module.scss";

export function Footer() {
    return (
        <footer>
            <ul className={styles.contacts}>
                <li>phone</li>
                <li>email</li>
                <li>other</li>
            </ul>
        </footer>
    );
}
