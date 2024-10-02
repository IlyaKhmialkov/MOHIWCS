import { getJSONFileData } from "../../utils/getJSONFileData.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { TextImgBox } from "../../components/TextImgBox/TextImgBox.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { TextLinkImgBox } from "../../components/TextLinkImgBox/TextLinkImgBox.tsx";
import styles from "./reactGuide.module.scss";

export function ReactGuide() {
    const reactGuideDataPath: string = "reactGuide.json";

    const reactGuideData = getJSONFileData({ path: reactGuideDataPath });

    return (
        <>
            <Header />

            <main className={styles.main}>
                <TextLinkImgBox
                    text={reactGuideData.text1}
                    link={reactGuideData.nodeLink}
                    linkText={reactGuideData.linkText}
                    imgSrc={reactGuideData.nodeImg}
                />
                <TextImgBox text={reactGuideData.text2} imgSrc={reactGuideData.consoleImg} />
                <Button text="react video guide" link="https://www.youtube.com/watch?v=Fbsusu0xfpY&t=5395s" />
            </main>

            <Footer />
        </>
    );
}
