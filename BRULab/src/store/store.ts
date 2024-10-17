import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    reducer as toggleFavouritesReducer,
    reducer as deleteItemReducer,
    reducer as addItemReducer,
    reducer as updateItemReducer,
} from "./items/items.slice";

const reducers = combineReducers({
    favorites: toggleFavouritesReducer,
    deleteItem: deleteItemReducer,
    addItem: addItemReducer,
    updateItem: updateItemReducer,
});

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
