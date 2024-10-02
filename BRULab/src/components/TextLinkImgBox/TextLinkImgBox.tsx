import styles from "./TextLinkImgBox.module.scss";

interface ITextLinkImgProps {
    text: string;
    link: string;
    linkText: string;
    imgSrc: string;
}

export function TextLinkImgBox({ text, link, linkText, imgSrc }: ITextLinkImgProps) {
    return (
        <div className={styles.box}>
            <p>{text}</p>
            <a href={link}>
                <p>{linkText}</p>
                <img src={imgSrc} alt="node.js logo" />
            </a>
        </div>
    );
}
