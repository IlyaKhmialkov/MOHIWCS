import styles from "./Button.module.scss";

interface IButtonParams {
    text?: string;
    imageLink?: string;
    link?: string;
    action?: () => void;
}

export function Button({ text, imageLink, link, action }: IButtonParams) {
    const clickHandler = () => {
        if (link) {
            window.location.href = link;
        }
        if (action) {
            action();
        }
    };

    if (text && imageLink) {
        return (
            <button type="button" className={styles.buttonImg} onClick={clickHandler}>
                <img src={imageLink} />
                <p>{text}</p>
            </button>
        );
    } else if (text) {
        return (
            <button type="button" className={styles.buttonText} onClick={clickHandler}>
                {text}
            </button>
        );
    } else if (imageLink) {
        return (
            <button type="button" className={styles.buttonImg} onClick={clickHandler}>
                <img src={imageLink} />
            </button>
        );
    }
}
