import {configureStore} from '@reduxjs/toolkit'
import ReducerSlice from './ReducerSlice'
import cartSlice from './cartSlice'

export const Store=configureStore({
    reducer:{
        ReducerSlice,
        cartSlice
    }
})