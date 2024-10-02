import styles from "./TextBox.module.scss";
import { Paragraph } from "./Paragraph/Paragraph.tsx";

interface IReactInfo {
    header: string;
    text1: string;
    text2: string;
}

export function TextBox({ header, text1, text2 }: IReactInfo) {
    return (
        <div className={styles.textBox}>
            <h2>{header}</h2>
            <Paragraph text={text1} />
            <Paragraph text={text2} />
        </div>
    );
}
