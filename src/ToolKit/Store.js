import { configureStore } from "@reduxjs/toolkit";
import CountSlice1 from "./CountSlice1";

export const store=configureStore({
    reducer:{
        counter:CountSlice1
    }
})