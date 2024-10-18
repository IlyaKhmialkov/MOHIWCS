import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListItem } from "../../types/listItem.types";

const initialState: IListItem[] = [
    { item: { id: 0, name: "arbuz", isFavorite: false } },
    { item: { id: 1, name: "banan", isFavorite: false } },
    { item: { id: 2, name: "pomidor", isFavorite: false } },
    { item: { id: 3, name: "kabachok", isFavorite: false } },
];

export const favoritesSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        toggleFavourites: (state, { payload: { item } }: PayloadAction<IListItem>) => {
            return state.map((i) => {
                if (i.item.id === item.id) {
                    return {
                        ...i,
                        item: {
                            ...i.item,
                            isFavorite: !i.item.isFavorite,
                        },
                    };
                }
                return i;
            });
        },
        deleteItem: (state, { payload: { item } }: PayloadAction<IListItem>) => {
            return state.filter((i) => i.item.id !== item.id);
        },
        addItem: (state, { payload: { item } }: PayloadAction<IListItem>) => {
            if (state.some((i) => i.item.id !== item.id)) {
                state.push({ item });
            } else if (state.length === 0) {
                state.push({ item });
            }
        },
        updateItem: (state, { payload: { item } }: PayloadAction<IListItem>) => {
            const index = state.findIndex((i) => i.item.id === item.id);
            if (index !== -1) {
                state[index] = { item };
            }
        },
    },
});

export const { actions, reducer } = favoritesSlice;
