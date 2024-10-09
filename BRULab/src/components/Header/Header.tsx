import styles from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";
import { Button } from "../Button/Button";
import { Modal } from "./Modal/Modal";
import { useState } from "react";

export function Header() {
    const [modalActive, modalSetActive] = useState(false);

    return (
        <>
            <Modal active={modalActive} setActive={modalSetActive} />
            <header className={styles.header}>
                <Button text="react" imageLink="react.svg" action={() => modalSetActive(true)} />
                <Navigation />
            </header>
        </>
    );
}
