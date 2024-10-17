import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectFavorites = (state: RootState) => state.favorites;

export const selectAllFavorites = createSelector(selectFavorites, (favorites) => {
    favorites.forEach(() => {});
    return favorites;
});
