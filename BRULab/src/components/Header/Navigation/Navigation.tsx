import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li>
                    <Link to="/" className={styles.link}>
                        about react
                    </Link>
                </li>
                <li>
                    <Link to="/guide" className={styles.link}>
                        react guide
                    </Link>
                </li>
                <li>
                    <Link to="/apps" className={styles.link}>
                        react apps
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
