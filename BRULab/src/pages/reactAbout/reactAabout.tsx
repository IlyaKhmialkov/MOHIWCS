import { getJSONFileData } from "../../utils/getJSONFileData.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextBox } from "../../components/TextBox/TextBox.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import styles from "./reactAbout.module.scss";
import { ButtonGroup, Button } from "@mui/material";

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
                    <ButtonGroup variant="contained" size="large" aria-label="Large button group">
                        <Button href="https://react.dev/">official react site</Button>
                        <Button href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">react wikipedia</Button>
                    </ButtonGroup>
                </div>
            </main>

            <Footer />
        </>
    );
}
