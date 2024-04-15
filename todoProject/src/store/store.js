import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './todoSlice.js'

export const store = configureStore({
    reducer: todoreducer
})