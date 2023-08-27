import React from 'react'
import img1 from '../../Assets/Imgaes/Home Banner/mobile.webp'
import img2 from '../../Assets/Imgaes/Home Banner/fashion.webp'
import img3 from '../../Assets/Imgaes/Home Banner/Home-Decor.webp'
import banner1 from '../../Assets/Imgaes/HomePage/mensFashion.webp'
import banner2 from '../../Assets/Imgaes/HomePage/womensFasgion.webp'
import banner3 from '../../Assets/Imgaes/HomePage/TheBiggestCon.webp'
import benifits1 from '../../Assets/Imgaes/icons/benifits1.svg'
import benifits2 from '../../Assets/Imgaes/icons/benifits2.svg'
import benifits3 from '../../Assets/Imgaes/icons/benifits3.svg'
import benifits4 from '../../Assets/Imgaes/icons/benifits4.svg'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import{LiaAngleLeftSolid, LiaAngleRightSolid} from 'react-icons/lia'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Autoplay,EffectFade,Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './homepage.css'
import './productStyle.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Homecaro = () => {

  const {electronics}=useSelector((select)=> select.ReducerSlice)
  const {mens}=useSelector((select)=> select.ReducerSlice)
  const {womens}=useSelector((select)=> select.ReducerSlice)



  // console.log(mens);
  return (
    <>
    <div className="bannerCaro">
    <Swiper
                modules={[ Navigation, A11y,Autoplay,EffectFade]}
                spaceBetween={50}
                loop={true}
                speed={1000}
                effect={'fade'}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next'
                  }}
                
            >
                <SwiperSlide>
                    <img className='img-fluid w-100' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='img-fluid w-100' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='img-fluid w-100' src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="btn-conatiner">
              <div className=" caro-btn custom-prev">
              <LiaAngleLeftSolid className='faArrow'/>
            </div>
      <div className=" caro-btn custom-next">
      
       <LiaAngleRightSolid className='faArrow'/>
      </div>
            </div>
    </div>
    <div className="productList">
     <div className="container">
     <div className="headBox">
       <div className="head">
       Top Electronics Product
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
                                reverseDirection: true,
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
                            electronics.length>0 && electronics.map((item)=>{
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
     <div className='midBanSec'>
            <div className="container">
                <div className="carSliderInner">
                    <Swiper
                        spaceBetween={30}
                        loop={false}
                        
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination , Autoplay]}
                        slidesPerView={1}
                        
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        
                    >
                         <SwiperSlide>
                            <Link>
                            <img src={banner1} className='w-100' alt="image" />
                            </Link>
                         </SwiperSlide>
                         <SwiperSlide>
                            <Link>
                            <img src={banner2} className='w-100' alt="image" />
                            </Link>
                         </SwiperSlide>
                         <SwiperSlide>
                            <Link>
                            <img src={banner3} className='w-100' alt="image" />
                            </Link>
                         </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>
    <div className="productList nd2ProductList">
     <div className="container">
     <div className="headBox">
       <div className="head">
       Top Mens Fashion
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
                            mens.length>0 && mens.slice(0,7).map((item)=>{
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
    <div className="productList nd3ProductList">
     <div className="container">
     <div className="headBox">
       <div className="head">
       Top Womens Fashion
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
                                reverseDirection: true,
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
                            womens.length>0 && womens.slice(0,8).map((item)=>{
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
    <div className='ourBenifits' >
        <div className="container">
            <div className="heading">
            Our Benifits
            </div>
            <div className="elems">
                <div className="elem">
                    <img src={benifits1} className='eImg' alt="icon image" />
                    <div className="text">
                    No Cost EMI
                    </div>
                </div>
                <div className="elem">
                    <img src={benifits2} className='eImg' alt="icon image" />
                    <div className="text">
                    Free Shipping on all orders
                    </div>
                </div>
                <div className="elem">
                    <img src={benifits3} className='eImg' alt="icon image" />
                    <div className="text">
                    100% Secure Payments
                    </div>
                </div>
                <div className="elem">
                    <img src={benifits4} className='eImg' alt="icon image" />
                    <div className="text">
                    24*7 Service Support
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Homecaro