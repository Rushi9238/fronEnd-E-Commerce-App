import React from 'react'

const Cart = () => {
    
  return (
    <div className="CartComp">
        hello
    {/* <div className="pathSec">
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
                {cartstate.map((item, index) => {
                  return (
                    <div key={index} className="cartProduct">
                      <div className="row">
                        <div className="col-md-3 col-4">
                          <div className="posRel">
                            <img src='' className="img-fluid w-100" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-8">
                          <div className="details">
                            <div className="name">
                              Lorem ipsum dolor sit.
                            </div>
                            <div className="ClrSize">
                              Colour: <span>Lorem, ipsum.</span>
                            </div>
                            <div className="ClrSize">
                              Size: <span>Lorem, ipsum dolor.</span>
                            </div>
                            <div className="price">  ₹{item.productDiscountAmt}</div>
                            {item.productDiscountPer > 0 &&
                              <div className="d-flex blueD">
                                <div className="strikeP">  ₹2500</div>
                                <div className="off">30% off</div>
                                <div className="tax">(incl.of all taxes)</div>
                              </div>
                            }
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="quantity">
                            <div className="qtyCounter">
                              <button className="min" onClick={() => {
                               
                              }} >-</button>
                              <span>{item.qty}</span>
                              <button className="plus" onClick={() => {
                                
                              }} >+</button>
                            </div>
                            <div className="remove">
                              <button onClick={() => {
                                dispatch(removeFromCart(index))
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
              {(cartstate.length > 0 || apiCartState.length > 0) &&
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
                        <div className="text">Price ({cartstate.length || apiCartState.length} item)</div>
                        <div className="price">₹{Math.round(mrpStateSum).toFixed(2)}</div>
                      </div>
                      <div className="d-flex">
                        <div className="text">Discount</div>
                        <div className="price">₹{Math.round(mrpStateSum - discountStateSum).toFixed(2)}</div>
                      </div>
                      <div className="d-flex">
                        <div className="text">Delivery Charges</div>
                        <div className="price">FREE</div>
                      </div>
                    </div>
                    <div className="TotAmount">
                      <div className="d-flex">
                        <div className="tA">Total Amount</div>
                        <div className="TPrice">₹{Math.round(discountStateSum).toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="proceed">
                      <div className="save">You will save ₹{Math.round(mrpStateSum - discountStateSum).toFixed(2)} on this order</div>
                      <button onClick={()=>{
                        goToCheckOutFn()
                      }} >PROCEED TO BUY</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default Cart