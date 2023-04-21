import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import productReducer from "./Slices/productSlice";

const store = configureStore({
    reducer: {
        storenav:appReducer,
        productlist:productReducer
    },

},
);

export default store;