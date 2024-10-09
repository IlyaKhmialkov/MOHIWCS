import { getJSONFileData } from "../../utils/getJSONFileData.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextBox } from "../../components/TextBox/TextBox.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import { Button } from "../../components/Button/Button.tsx";
import styles from "./reactApps.module.scss";

export function ReactApps() {
    const reactAppsPath: string = "reactApps.json";
    const reactAppsData = getJSONFileData({ path: reactAppsPath });

    return (
        <>
            <Header />

            <main className={styles.main}>
                <TextImgBox text={reactAppsData.text1} imgSrc={reactAppsData.imgSrc} />
                <TextBox header={reactAppsData.header1} text1={reactAppsData.text2} text2={reactAppsData.text3} />
                <TextBox header={reactAppsData.header2} text1={reactAppsData.text4} text2={reactAppsData.text5} />
                <Button text={reactAppsData.buttonText} link={reactAppsData.buttonLink} />
            </main>

            <Footer />
        </>
    );
}
