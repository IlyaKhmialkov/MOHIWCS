import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPerson } from "../../types/persons.types";

const initialState: IPerson[] = [
    { person: { id: 0, name: "Mike", isBusy: false } },
    { person: { id: 1, name: "James", isBusy: true } },
];

export const personsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        deletePerson: (state, { payload: { person } }: PayloadAction<IPerson>) => {
            return state.filter((i) => i.person.id !== person.id);
        },
        addPerson: (state, { payload: { person } }: PayloadAction<IPerson>) => {
            if (state.some((i) => i.person.id !== person.id)) {
                state.push({ person });
            } else if (state.length === 0) {
                state.push({ person });
            }
        },
        updatePerson: (state, { payload: { person } }: PayloadAction<IPerson>) => {
            const index = state.findIndex((i) => i.person.id === person.id);
            if (index !== -1) {
                state[index] = { person };
            }
        },
    },
});

export const { actions, reducer } = personsSlice;
