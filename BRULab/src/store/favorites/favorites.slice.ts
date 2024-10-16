import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListItem } from "../../types/listItem.types";

const initialState: IListItem[] = [];

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavourites: (state, { payload: item }: PayloadAction<IListItem>) => {
            if (state.some((i) => i.item.id === item.item.id)) {
                const index = state.findIndex((it) => it.item.id === item.item.id);

                if (index !== -1) {
                    state.splice(index, 1);
                }
            } else {
                state.push(item);
            }
        },
    },
});

export const { actions, reducer } = favoritesSlice;
