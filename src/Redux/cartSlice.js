import {createSlice} from '@reduxjs/toolkit'

const cartListSlice=createSlice({
    name:'cart',
    initialState:{
        cartdata:[],
    },
    reducers:{
        addCartData:(state,action)=>{
            // 
        },
        updateCartCount:(state,action)=>{
            // 
        },
        removeCart:(state,action)=>{
            // 
        }
    }
})
export const{addCartData,updateCartCount,removeCart}=cartListSlice.actions
export default cartListSlice.reducer