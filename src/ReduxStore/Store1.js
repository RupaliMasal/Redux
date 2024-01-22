import { configureStore } from "@reduxjs/toolkit";
import ButtounSlice from "./ButtounSlice";

const store1=configureStore({
    reducer:{
         button:ButtounSlice
    }
});
export default store1;