import styles from "./TextImgBox.module.scss";

interface ITextImgProps {
    text: string;
    imgSrc: string;
}

export function TextImgBox({ text, imgSrc }: ITextImgProps) {
    return (
        <div className={styles.textImgBox}>
            <p>{text}</p>
            <img src={imgSrc} alt="image" />
        </div>
    );
}
