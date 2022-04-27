import {createSlice} from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    initialState:{value: {}},
    name:"auth",
    reducers:{
        addUser:(state,action) => {
            state.value=action.payload
        },
        removeUser:(state) => {
            state.value={}
        }
    }
})
export const {addUser, removeUser} = AuthSlice.actions;

export const selectUser = (state:any)=>state.auth.value;

export default AuthSlice.reducer;