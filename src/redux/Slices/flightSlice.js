import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const flightSlice = createSlice({
    name:'all-flights',
    initialState:{
        data:[],
        status: "idle"
    },
    reducers: {
        setFlights(state,action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    }
});

export const { setFlights, setStatus } = flightSlice.actions;
export default flightSlice.reducer;

const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/airports/list',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'f1aa3db37bmshaccdc7b52058341p17bce3jsnce5447bb8dd2',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

export function fetchFlights(){
    return function fetchFlightThunk(dispatch){
        dispatch(setStatus("loading"));
        axios.request(options)
        .then((res)=>{
            dispatch(setStatus("idle"));
            dispatch(setFlights(res.data));
        })
        .catch((error)=> {
dispatch(setStatus("error"));
return console.log(error);
});
    };
};

