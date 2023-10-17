import {createSlice} from '@reduxjs/toolkit'

const loginModal=createSlice({
    name:'logIn_Modal',
    initialState:{
       loginModal:false,
    },
    reducers:{
        checkLogInModal:(state,action)=>{
            state.loginModal=action.payload
        }
    }
})
export const {checkLogInModal}=loginModal.actions
export default loginModal.reducer