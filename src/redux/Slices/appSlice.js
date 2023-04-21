import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name:'store-nav-toggle',
    initialState:{value:false},
    reducers: {
        gotoStore(state){
            state.value = true;
        },
        backtoHome(state){
            state.value = false;
        }
    }
});

export const { gotoStore, backtoHome } = appSlice.actions;
export default appSlice.reducer;
