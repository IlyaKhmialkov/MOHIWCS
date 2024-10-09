import styles from "./Footer.module.scss";

export function Footer() {
    return (
        <footer>
            <ul className={styles.contacts}>
                <li>
                    <a href="tel:+1234567890">phone</a>
                </li>
                <li>
                    <a href="mailto: aaa@gmail.com">email</a>
                </li>
                <li>
                    <a href="#">other</a>
                </li>
            </ul>
        </footer>
    );
}
