// import { getJSONFileData } from "../../utils/getJSONFileData.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
// import { TextBox } from "../../components/TextBox/TextBox.tsx";
// import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
// import { Button } from "../../components/Button/Button.tsx";
import styles from "./reactApps.module.scss";

export function ReactApps() {
    // const reactInfoPath: string = "reactInfo.json";
    // const reactTextImgPath: string = "reactTextImg.json";

    // const reactInfoData = getJSONFileData({ path: reactInfoPath });
    // const reactTextImgData = getJSONFileData({ path: reactTextImgPath });

    return (
        <>
            <Header />

            <main className={styles.main}></main>

            <Footer />
        </>
    );
}
