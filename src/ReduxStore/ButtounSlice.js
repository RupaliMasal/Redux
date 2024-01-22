import { createSlice } from "@reduxjs/toolkit";

const ButtounSlice=createSlice({
    name:"button",
    initialState:{
        value:1
    },
    reducers:{
        increaseValue:(state)=>{
            state.value += 2
        },
        decreaseValue:(initialState)=>{
            initialState.value -= 2
        },
    }

    
});
export default ButtounSlice.reducer;
export const {increaseValue,decreaseValue}=ButtounSlice.actions;