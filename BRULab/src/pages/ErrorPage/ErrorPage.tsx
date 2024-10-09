import styles from "./ErrorPage.module.scss";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className={styles.errorPage}>
            <h1>Error</h1>
            <p>the path you want to access doesnt exist</p>
        </div>
    );
}
