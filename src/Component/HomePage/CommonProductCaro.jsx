import React from 'react'
import{LiaAngleLeftSolid, LiaAngleRightSolid} from 'react-icons/lia'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Autoplay,EffectFade,Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
const CommonProductCaro = ({Product,HeadLine,link,caroDirection,headClass}) => {
    console.log(Product);
  return (
    <>
     <div className="productList">
     <div className="container">
     <div className="headBox">
       <div className="head">
       {HeadLine}
       </div>
       <div className="viewall">
        View All
       </div>
      </div>
      <div className="carProducts">
                        <Swiper
                            spaceBetween={30}
                            loop={false}
                            speed={300}
                            autoplay={{
                                delay: 3000,
                                reverseDirection: {caroDirection},
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.prevProBtn',
                                nextEl: '.nextProBtn',
                            }}
                            modules={[Navigation, Autoplay]}
                            slidesPerView={3}
                            breakpoints={{
                                1200: {
                                  // width: 768,
                                  slidesPerView: 3,
                                  spaceBetween: 30
                                },
                                990: {
                                    // width: 768,
                                    slidesPerView: 3,
                                    spaceBetween: 30

                                  },
                                  0: {
                                    // width: 768,
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                  }
                              }}
                        >
                          {
                            Product && Product.slice(0,8).map((item)=>{
                              return <SwiperSlide>
                              <div className="productDiv">
                                  <div className="imgBox">
                                      <img src={item.thumbnail} alt="product image" className="proImg" />
                                  </div>
                                  <div className="content">
                                      <div className="proName">
                                      {item.title}
                                      </div>
                                      <div className="proDesc">
                                      {item.category}
                                      </div>
                                      <div className="redPrice">
                                          ₹{((item.price*82)-(item.price*82*item.discountPercentage/100).toFixed(0))}.00
                                      </div>
                                      <div className="priceDis">
                                          <div className="price">
                                          ₹{item.price*82}.00
                                          </div>
                                          <div className="dis">
                                              {item.discountPercentage}% off
                                          </div>
                                      </div>
                                  </div>
                                  <div className="offer">
                                      OFFER
                                  </div>
                              </div>
                          </SwiperSlide>
                            })
                          }
                        </Swiper>
                        <LiaAngleLeftSolid className='prevProBtn'/>
                       < LiaAngleRightSolid className='nextProBtn'/>
                    </div>
     </div>
      
    </div>
    </>
  )
}

export default CommonProductCaro