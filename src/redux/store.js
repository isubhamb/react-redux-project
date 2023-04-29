import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";
import flightReducer from "./Slices/flightSlice";

const store = configureStore({
    reducer: {
        storenav:appReducer,
        productlist:productReducer,
        cartactions:cartReducer,
        flights:flightReducer
    },
},
);

export default store;