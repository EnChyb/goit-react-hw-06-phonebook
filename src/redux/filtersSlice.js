import  { createSlice } from "@reduxjs/toolkit"

const filtersInitialState = "";

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setFilter(state, action) {
            state = action.payload;
            console.log(state)
            return state;
        }
    }
})

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer; 