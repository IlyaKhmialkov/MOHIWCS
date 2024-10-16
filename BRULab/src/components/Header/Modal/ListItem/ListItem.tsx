import styles from "./ListItem.module.scss";
import { IListItem } from "../../../../types/listItem.types";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { IconButton } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { actions } from "../../../../store/favorites/favorites.slice";

export function ListItem({ item }: IListItem) {
    const favorites = useTypedSelector((state) => state.favorites);

    console.log(favorites);

    const dispatch = useDispatch();

    return (
        <div className={styles.listItem}>
            <p>
                {item.id} {item.name}
            </p>
            <IconButton aria-label="comment" color="info" onClick={() => dispatch(actions.toggleFavourites({ item }))}>
                {true ? <Star /> : <StarBorder />}
            </IconButton>
        </div>
    );
}
