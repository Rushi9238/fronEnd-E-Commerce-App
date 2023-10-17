import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartData, updateCartCount } from '../../Redux/cartSlice'
import { checkLogInModal } from '../../Redux/LogInModal'
import { toast } from 'react-toastify'

const AddToCartButton = ({ cartCount, product, setCartCount }) => {

    const { cartdata } = useSelector((select) => select.cartSlice)
    const { userLogIn } = useSelector((select) => select.UserLogIn)
    const dispatch = useDispatch()

    const handelAddCart = () => {
        // console.log('product details',userLogIn);
        if (userLogIn) {
            if (cartdata.length === 0) {
                dispatch(addCartData({ ...product, 'count': cartCount, 'dis_mrp': ((product.price * 82) - (product.price * 82 * product.discountPercentage / 100).toFixed(0)), 'actual_mrp': (product.price * 82) }))
                toast.success('Product Add to cart Succssfully')
            }
            if (cartdata.length !== 0) {
                const repeatProduct = cartdata.filter((item) => {
                    return item.id == product.id
                })
                if (repeatProduct.length === 0) {
                    dispatch(addCartData({ ...product, 'count': cartCount, 'dis_mrp': ((product.price * 82) - (product.price * 82 * product.discountPercentage / 100).toFixed(0)), 'actual_mrp': (product.price * 82) }))
                    toast.success('Product Add to cart Succssfully')
                }
                else {
                    dispatch(updateCartCount({ 'count': repeatProduct[0].count + cartCount, 'id': repeatProduct[0].id }))
                    toast.success('Product Add to cart Succssfully')
                }
            }
            setCartCount(1)
        }
        else {
            dispatch(checkLogInModal(true))
        }
    }
    
    return (
        <button className='addtocart' onClick={() => handelAddCart()}>ADD TO CART</button>
    )
}

export default AddToCartButton