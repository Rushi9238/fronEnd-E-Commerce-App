import {configureStore} from '@reduxjs/toolkit'
import ReducerSlice from './ReducerSlice'
import cartSlice from './cartSlice'
import LogInModal from './LogInModal'
import UserLogIn from './UserLogIn'

export const Store=configureStore({
    reducer:{
        ReducerSlice,
        cartSlice,
        LogInModal,
        UserLogIn
    }
})