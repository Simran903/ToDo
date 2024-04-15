// Importing the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importing the todo reducer from the todoSlice file
import todoreducer from './todoSlice.js'

// Creating the Redux store using configureStore function
export const store = configureStore({
    // Configuring the store with the todo reducer
    reducer: todoreducer // Here, the reducer is set to the reducer function exported from todoSlice.js
}) 
