import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import CartReducer from "./Slice/CartSlice";
export const store = configureStore({
    reducer: {
        cart: CartSlice,
    },
});
