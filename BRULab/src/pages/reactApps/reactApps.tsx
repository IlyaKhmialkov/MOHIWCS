import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextBox } from "../../components/TextBox/TextBox.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import { Button } from "@mui/material";
import styles from "./reactApps.module.scss";
import { useTranslation } from "react-i18next";

export function ReactApps() {
    const { t } = useTranslation();

    return (
        <>
            <Header />

            <main className={styles.main}>
                <TextImgBox text={t("p20")} imgSrc={"ReactApps.png"} />
                <TextBox header={t("p21")} text1={t("p22")} text2={t("p23")} />
                <TextBox header={t("p24")} text1={t("p25")} text2={t("p26")} />
                <Button variant="contained" href="https://brainhub.eu/library/famous-apps-using-reactjs" size="large">
                    {t("p27")}
                </Button>
            </main>

            <Footer />
        </>
    );
}
