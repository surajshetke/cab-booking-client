import {createSlice} from '@reduxjs/toolkit'

const BookingSlice = createSlice({
    name:'booking',
    initialState:{},
    reducers:{
        addBooking:(state,{payload})=>({...payload}),
        updateBooking:(state,{payload})=>({...state,...payload}),
        removeBooking:(state)=>({}),
    }
})

export const {addBooking,updateBooking,removeBooking}=BookingSlice.actions;

export const selectBooking = (state:any)=>state.booking

export default BookingSlice.reducer;
