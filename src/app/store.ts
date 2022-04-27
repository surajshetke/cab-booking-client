import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice';
import BookingReducer from './BookingSlice'

const store  = configureStore({
    reducer:{
        auth:AuthReducer,
        booking:BookingReducer
    }
})

export default store;