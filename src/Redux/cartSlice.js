import {createSlice} from '@reduxjs/toolkit'

const cartListSlice=createSlice({
    name:'cart',
    initialState:{
        cartdata:[],
    },
    reducers:{
        addCartData:(state,action)=>{
            // 
            state.cartdata.push(action.payload)
            // console.log(action.payload);
        },
        updateCartCount:(state,action)=>{
            // 
            const repeatIndex=state.cartdata.findIndex((item)=>{
               return item.id==action.payload.id
            })
            state.cartdata[repeatIndex].count=action.payload.count
        },
        removeCart:(state,action)=>{
            // 
        }
    }
})
export const{addCartData,updateCartCount,removeCart}=cartListSlice.actions
export default cartListSlice.reducer