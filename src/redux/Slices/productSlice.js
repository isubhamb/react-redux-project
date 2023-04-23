import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
    name:'all-products',
    initialState:{
        data:[],
        status: "idle"
    },
    reducers: {
        getProducts(state,action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    }
});

export const { getProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(){
    return function fetchProductThunk(dispatch){
        dispatch(setStatus("loading"));
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            dispatch(setStatus("idle"));
            dispatch(getProducts(res.data));
        })
        .catch(()=> dispatch(setStatus("error")));
    };
};

export function fetchFromCategory(getCategory){
    return function fetchProductThunk(dispatch){
        dispatch(setStatus("loading"));
        axios.get(`https://fakestoreapi.com/products/category/${getCategory}`)
        .then((res)=>{
            dispatch(setStatus("idle"));
            dispatch(getProducts(res.data));
        })
        .catch(()=> dispatch(setStatus("error")));
    };
};