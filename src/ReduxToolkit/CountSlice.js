import { createSlice } from "@reduxjs/toolkit";

const CountSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        IncNum:(state)=>{
           state.count+=1
        },
        DecNum:(state)=>{
            state.count-=1
         }
    }
})
export default CountSlice.reducer;
export const {IncNum, DecNum} =CountSlice.actions;