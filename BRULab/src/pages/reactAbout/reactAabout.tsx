import { getJSONFileData } from "../../utils/getJSONFileData.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextBox } from "../../components/TextBox/TextBox.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import { Button } from "../../components/Button/Button.tsx";
import styles from "./reactAbout.module.scss";

export function ReactAbout() {
    const reactInfoPath: string = "reactInfo.json";
    const reactTextImgPath: string = "reactTextImg.json";

    const reactInfoData = getJSONFileData({ path: reactInfoPath });
    const reactTextImgData = getJSONFileData({ path: reactTextImgPath });

    return (
        <>
            <Header />

            <main className={styles.main}>
                <TextImgBox text={reactTextImgData.text} imgSrc={reactTextImgData.imgSrc} />
                <TextBox header={reactInfoData.header} text1={reactInfoData.text1} text2={reactInfoData.text2} />
                <div>
                    <Button text="official react site" link="https://react.dev/" />
                    <Button text="react wikipedia" link="https://en.wikipedia.org/wiki/React_(JavaScript_library)" />
                </div>
            </main>

            <Footer />
        </>
    );
}
