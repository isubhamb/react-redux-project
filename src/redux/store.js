import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
    reducer: {
        storenav:appReducer,
        productlist:productReducer,
        cartactions:cartReducer
    },

},
);

export default store;