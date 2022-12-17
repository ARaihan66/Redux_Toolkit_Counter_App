import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Services/CounterSlice'


const store = configureStore({
    reducer: {
        CounterReducer
    }
})

export default store;