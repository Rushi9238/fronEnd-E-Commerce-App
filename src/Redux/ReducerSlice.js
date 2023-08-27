import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'productData',
    initialState: {
        ProductData: [],
        cartData: [],
        WishListData: [],
        electronics: [],
        mens: [],
        womens: [],
        homeD: [],
        assess: [],
    },
    reducers: {
        collectData: (state, action) => {
            state.ProductData = action.payload
        },
        electronicsProducts:(state,action)=>{
          state.electronics=action.payload
        },
        mensProduct:(state,action)=>{
            state.mens=action.payload
        },
        womensProduct:(state,action)=>{
            state.womens=action.payload
        },
        addTocart: (state, action) => {

        },
        wishList: (state, action) => {

        },

    }
})
export const { collectData, addTocart, wishList,electronicsProducts,mensProduct,womensProduct } = productSlice.actions

export default productSlice.reducer


