import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { removeCart, updateCartCount } from '../../Redux/cartSlice';

const Cart = () => {
    const {cartdata}=useSelector((select)=>select.cartSlice)
    const dispatch=useDispatch()
   
    
  return (
    <div className="CartComp">
      
    <div className="pathSec">
      <div className="container">
        <div className="path">
          Home -<span> Cart</span>
        </div>
      </div>
    </div>

    <div className="MainCart">
      <div className="container">
        <div className="ShopCart">
          <div className="row">
            <div className="col-xl-8">
              <div className="MyShop">
                <div className="heading">My Shopping Cart</div>
                {cartdata.map((item, index) => {
                  return (
                    <div key={index} className="cartProduct">
                      <div className="row">
                        <div className="col-md-3 col-4">
                          <div className="posRel">
                            <img src={item.thumbnail} className="img-fluid w-100" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-8">
                          <div className="details">
                            <div className="name">
                              {item.title}
                            </div>
                            <div className="ClrSize">
                              Brand: <span>{item.brand}</span>
                            </div>
                            <div className="ClrSize">
                              Discount: <span>{item.discountPercentage} % off</span>
                            </div>
                            <div className="price">  ₹{((item.price * 82) - (item.price * 82 * item.discountPercentage / 100).toFixed(0))}</div>
                            {/* {item.productDiscountPer > 0 &&
                              <div className="d-flex blueD">
                                <div className="strikeP">  ₹2500</div>
                                <div className="off">30% off</div>
                                <div className="tax">(incl.of all taxes)</div>
                              </div>
                            } */}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="quantity">
                            <div className="qtyCounter">
                              <button className="min" onClick={() => {
                             if(item.count>1){
                              dispatch(updateCartCount({id:item.id,count:item.count-1}))
                             }
                              }} >-</button>
                              <span>{item.count}</span>
                              <button className="plus" onClick={() => {
                                if(item.count<item.stock){
                                  dispatch(updateCartCount({id:item.id,count:item.count+1}))
                                }
                              }} >+</button>
                            </div>
                            <div className="remove">
                              <button onClick={() => {
                               dispatch(removeCart({id:item.id}))
                              }} >
                                Remove <RxCross1 />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-xl-4">
              {cartdata.length > 0 &&
                <div className="CartTotal">
                  <div className="coupon">
                    <div className="couponCode">
                      <input type="text" placeholder="Add Coupon Code" />
                      <button className="apply">Apply</button>
                    </div>
                  </div>
                  <div className="pdetail">
                    <div className="priceD">Price Details</div>
                    <div className="detailDes">
                      <div className="d-flex">
                        <div className="text">Price ({cartdata.length} item)</div>
                        <div className="price">₹{
                          cartdata.map((item)=>item.actual_mrp*item.count).reduce((acc,init)=> acc+init)

                        }</div>
                      </div>
                      <div className="d-flex">
                        <div className="text">Discount</div>
                        <div className="price">₹{
                          (cartdata.map((item)=>item.actual_mrp*item.count).reduce((acc,init)=> acc+init))-(cartdata.map((item)=>item.dis_mrp*item.count).reduce((acc,init)=> acc+init))
                        }</div>
                      </div>
                      <div className="d-flex">
                        <div className="text">Delivery Charges</div>
                        <div className="price">FREE</div>
                      </div>
                    </div>
                    <div className="TotAmount">
                      <div className="d-flex">
                        <div className="tA">Total Amount</div>
                        <div className="TPrice">₹{
                          cartdata.map((item)=>item.dis_mrp*item.count).reduce((acc,init)=> acc+init)
                        }</div>
                      </div>
                    </div>
                    <div className="proceed">
                      <div className="save">You will save ₹{(cartdata.map((item)=>item.actual_mrp*item.count).reduce((acc,init)=> acc+init))-(cartdata.map((item)=>item.dis_mrp*item.count).reduce((acc,init)=> acc+init))} on this order</div>
                      <button onClick={()=>{
                        // goToCheckOutFn()
                      }} >PROCEED TO BUY</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart