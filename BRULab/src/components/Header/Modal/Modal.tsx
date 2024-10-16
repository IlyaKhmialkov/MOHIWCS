import styles from "./Modal.module.scss";
import { Fab, Backdrop } from "@mui/material";
import { Close } from "@mui/icons-material";
import { ListItem } from "./ListItem/ListItem";

interface IModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ open, setOpen }: IModalProps) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
        >
            <div className={styles.modalContainer}>
                <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
                    <img src="react.svg" alt="react" />

                    <div className={styles.List}>
                        <ListItem item={{ id: 0, name: "arbuz" }}></ListItem>
                        <ListItem item={{ id: 1, name: "banan" }}></ListItem>
                        <ListItem item={{ id: 2, name: "pomidor" }}></ListItem>
                        <ListItem item={{ id: 3, name: "kabachok" }}></ListItem>
                    </div>

                    <Fab aria-label="add" onClick={() => handleClose()}>
                        <Close />
                    </Fab>
                </div>
            </div>
        </Backdrop>
    );
}
