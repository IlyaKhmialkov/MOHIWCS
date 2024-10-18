import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import { Button } from "@mui/material";
import { TextLinkImgBox } from "../../components/TextLinkImgBox/TextLinkImgBox.tsx";
import styles from "./reactGuide.module.scss";
import { useTranslation } from "react-i18next";

export function ReactGuide() {
    const { t } = useTranslation();

    return (
        <>
            <Header />

            <main className={styles.main}>
                <TextLinkImgBox
                    text={t("p10")}
                    link={"https://nodejs.org/en"}
                    linkText={t("p11")}
                    imgSrc={"nodeJs.png"}
                />
                <TextImgBox text={t("p12")} imgSrc={"console.png"} />
                <Button variant="contained" href="https://www.youtube.com/watch?v=Fbsusu0xfpY&t=5395s">
                    {t("p13")}
                </Button>
            </main>

            <Footer />
        </>
    );
}
