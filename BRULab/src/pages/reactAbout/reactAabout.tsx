import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextBox } from "../../components/TextBox/TextBox.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import styles from "./reactAbout.module.scss";
import { ButtonGroup, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export function ReactAbout() {
    const { t } = useTranslation();

    return (
        <>
            <Header />

            <main className={styles.main}>
                <TextImgBox text={t("p00")} imgSrc={"reactCode.jpg"} />
                <TextBox header={t("p01")} text1={t("p02")} text2={t("p03")} />
                <div>
                    <ButtonGroup variant="contained" size="large" aria-label="Large button group">
                        <Button href="https://react.dev/">{t("p04")}</Button>
                        <Button href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">{t("p05")}</Button>
                    </ButtonGroup>
                </div>
            </main>

            <Footer />
        </>
    );
}
