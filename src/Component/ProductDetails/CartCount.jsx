import React from 'react'

const CartCount = ({setCartCount,cartCount,productStock}) => {

    const handelIncreaseCount=()=>{
        cartCount<productStock? setCartCount(cartCount+1) :setCartCount(productStock)
        // setCartCount(cartCount+1)
    }
    const handelDecreaseCount=()=>{
        cartCount >1 ?setCartCount(cartCount-1) : setCartCount(1)
    }

  return (
    <div className="qut-counter">
    <div className="head">Quantity</div>
    <div className="counter">
        <div className="decr" onClick={()=>handelDecreaseCount()} >-</div>
        <span>{cartCount}</span>
        <div className="incr" onClick={()=>handelIncreaseCount()} >+</div>
    </div>
</div>
  )
}

export default CartCount