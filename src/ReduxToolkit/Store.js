import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CountSlice";

export const store=configureStore({
    reducer:{
        counter:CountSlice
    }
})