import {createSlice} from '@reduxjs/toolkit'

const userLogInCheck=createSlice({
    name:'user_logIn',
    initialState:{
        userLogIn:false,

    },
    reducers:{
        checkUserLogIn:(state,action)=>{
            // console.log(action.payload);
            state.userLogIn=action.payload
        },
    }

})
export const {checkUserLogIn}=userLogInCheck.actions
export default userLogInCheck.reducer