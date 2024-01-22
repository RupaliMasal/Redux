import { createSlice } from "@reduxjs/toolkit";

const CartCountSlice=createSlice({
    name:"cart",
    initialState:{
        count:0
    },
    reducers:{
        incCartCount:(state)=>{
            state.count += 1
        },
         decCartCount:(initialState)=>{
            initialState.count -= 1
        }
    }
});
export default CartCountSlice.reducer;
export const { incCartCount, decCartCount } = CartCountSlice.actions;