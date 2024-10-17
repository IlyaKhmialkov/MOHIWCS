import styles from "./Modal.module.scss";
import { Fab, Backdrop, Badge, IconButton } from "@mui/material";
import { Close, Favorite, AddCircleOutline } from "@mui/icons-material";
import { ListItem } from "./ListItem/ListItem";
import { useFavorites } from "../../../hooks/useFavorites";
import { useSelector } from "react-redux";
import { selectAllFavorites } from "../../../store/items/items.selector";
import { IListItem } from "../../../types/listItem.types";
import { useActions } from "../../../hooks/useActions";

interface IModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ open, setOpen }: IModalProps) {
    const handleClose = () => {
        setOpen(false);
    };

    const { favorites } = useFavorites();
    const { addItem } = useActions();

    const items: IListItem[] = useSelector(selectAllFavorites);

    let favoritesCount = 0;
    let maxId = 0;
    favorites.forEach((i) => {
        if (i.item.isFavorite) {
            favoritesCount++;
        }
    });
    favorites.forEach((i) => {
        if (i.item.id >= maxId) {
            maxId = i.item.id + 1;
        }
    });

    return (
        <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
        >
            <div className={styles.modalContainer}>
                <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
                    <Badge
                        badgeContent={`${favoritesCount}/${favorites.length}`}
                        color="success"
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                    >
                        <Favorite color="primary" />
                    </Badge>
                    <IconButton
                        aria-label="comment"
                        color="info"
                        onClick={() => addItem({ item: { id: maxId, name: "new name", isFavorite: false } })}
                    >
                        <AddCircleOutline />
                    </IconButton>
                    <div className={styles.List}>
                        {items.map((i) => {
                            return <ListItem item={i.item} key={i.item.id} />;
                        })}
                    </div>

                    <Fab aria-label="add" onClick={() => handleClose()}>
                        <Close />
                    </Fab>
                </div>
            </div>
        </Backdrop>
    );
}
