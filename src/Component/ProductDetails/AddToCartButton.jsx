import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartData, updateCartCount } from '../../Redux/cartSlice'

const AddToCartButton = ({cartCount,product,setCartCount}) => {
    const {cartdata}=useSelector((select)=>select.cartSlice)
    // console.log(cartdata);
const dispatch=useDispatch()
    

const handelAddCart=()=>{
    if(cartdata.length===0){
        dispatch(addCartData({...product,'count':cartCount,'dis_mrp':((product.price * 82) - (product.price * 82 * product.discountPercentage / 100).toFixed(0)),'actual_mrp':(product.price * 82)}))
    }
    if(cartdata.length !==0){
        const repeatProduct=cartdata.filter((item)=>{
            return item.id== product.id
        })
        if(repeatProduct.length===0){
            dispatch(addCartData({...product,'count':cartCount,'dis_mrp':((product.price * 82) - (product.price * 82 * product.discountPercentage / 100).toFixed(0)),'actual_mrp':(product.price * 82)}))
        }
        else{
            dispatch(updateCartCount({'count':repeatProduct[0].count+cartCount,'id':repeatProduct[0].id}))
        }
    }
    setCartCount(1)
}
  return (
    <button className='addtocart' onClick={()=>handelAddCart()}>ADD TO CART</button>
  )
}

export default AddToCartButton