import styles from "./Paragraph.module.scss";

interface IParagraphParams {
    text: string;
}

export function Paragraph({ text }: IParagraphParams) {
    return <pre className={styles.preContainer}>{text}</pre>;
}
