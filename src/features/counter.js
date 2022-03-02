import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increment: (state, action) => {
            state.value ++
        },
        decrement: (state, action) => {
            state.value --
        }
    }
})


export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;