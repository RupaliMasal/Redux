import {configureStore} from '@reduxjs/toolkit'
import CartCountSlice from './CartCountSlice';
const store=configureStore({
    reducer:{
        cart:CartCountSlice
    },
      
});
export default store;