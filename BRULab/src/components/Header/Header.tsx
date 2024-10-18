import styles from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";
import { Button } from "../Button/Button";
import { Button as ButtonMUI } from "@mui/material";
import { Modal } from "./Modal/Modal";
import { useState } from "react";
import { ChangeCircle } from "@mui/icons-material";
import i18n from "../../assets/i18n";

function changeLanguage() {
    if (i18n.language === "en") {
        i18n.changeLanguage("ru");
    } else {
        i18n.changeLanguage("en");
    }
}

export function Header() {
    const [modalActive, modalSetActive] = useState(false);

    return (
        <>
            <Modal open={modalActive} setOpen={modalSetActive} />
            <header className={styles.header}>
                <Button text="react" imageLink="react.svg" action={() => modalSetActive(true)} />
                <div className={styles.div}>
                    <ButtonMUI variant="outlined" onClick={() => changeLanguage()}>
                        <ChangeCircle />
                    </ButtonMUI>
                    <Navigation />
                </div>
            </header>
        </>
    );
}
