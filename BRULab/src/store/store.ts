import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    reducer as toggleFavouritesReducer,
    reducer as deleteItemReducer,
    reducer as addItemReducer,
    reducer as updateItemReducer,
} from "./items/items.slice";
import {
    reducer as personsReducer,
    reducer as deletePersonReducer,
    reducer as addPersonReducer,
    reducer as updatePersonReducer,
} from "./persons/persons.slice";

const reducers = combineReducers({
    favorites: toggleFavouritesReducer,
    deleteItem: deleteItemReducer,
    addItem: addItemReducer,
    updateItem: updateItemReducer,
    persons: personsReducer,
    deletePerson: deletePersonReducer,
    addPerson: addPersonReducer,
    updatePerson: updatePersonReducer,
});

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
