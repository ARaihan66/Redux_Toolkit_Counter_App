import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1
        },
        decrement: (state) => {
            state.counter = state.counter - 1
        },
        reset: (state) => {
            state.counter = 0
        }
    }

})

export const { increment, decrement, reset } = CounterSlice.actions;

export default CounterSlice.reducer;