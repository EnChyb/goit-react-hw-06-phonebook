import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setToLocalStorage } from "localstorage/localstorage";

const contactsInitialState = getFromLocalStorage;

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state = [...state, action.payload];
            setToLocalStorage(state);
                return state;            
        },
        deleteContact(state, action) {
            const removeContact = state.filter(contact => contact.id !== action.payload);
            setToLocalStorage(removeContact);
            return removeContact;

        },
        },
    },
);

export const { addContact, deleteContact} = contactsSlice.actions //Generator akcji
export const contactsReducer = contactsSlice.reducer //Reducer slice