import styles from "./ListItem.module.scss";
import { IListItem } from "../../../../types/listItem.types";

import { IconButton } from "@mui/material";
import { Star, StarBorder, Edit, DeleteForever } from "@mui/icons-material";
import { useActions } from "../../../../hooks/useActions";

export function ListItem(item: IListItem) {
    const { toggleFavourites, deleteItem, updateItem } = useActions();

    return (
        <div className={styles.listItem}>
            <p>
                {item.item.id} {item.item.name}
            </p>
            <div>
                <IconButton aria-label="comment" color="info" onClick={() => updateItem({ ...item })}>
                    <Edit />
                </IconButton>
                <IconButton aria-label="comment" color="info" onClick={() => deleteItem({ ...item })}>
                    <DeleteForever />
                </IconButton>
                <IconButton aria-label="comment" color="info" onClick={() => toggleFavourites({ ...item })}>
                    {item.item.isFavorite ? <Star /> : <StarBorder />}
                </IconButton>
            </div>
        </div>
    );
}
