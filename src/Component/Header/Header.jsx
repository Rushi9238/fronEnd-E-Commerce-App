import React, { useState } from 'react'
import './header.css'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

import { CgMenu } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const {cartdata}=useSelector((select)=>select.cartSlice)
    console.log(cartdata);
    const navigate=useNavigate()
    const [menuOpen, setmenuOpen] = useState(false)
    // console.log(menuOpen);
    return (
        <>
            <section className='header-section sticky-top'>
                <header className={menuOpen ? 'header active' : 'header'}>
                    <div className="top-head">
                        <div className="container">
                            <div className="leftSide">
                                <div className="mobile-menu" onClick={() => setmenuOpen(!menuOpen)}>
                                    <CgMenu className='menu-btn' />
                                </div>
                                <div className="logo" onClick={()=>navigate('/')}>
                                    shoplify
                                </div>
                                <div className="inputBox">
                                    <input type="text" placeholder='Search you want.....' />
                                    <FiSearch className='searchIcon' />
                                </div>

                            </div>
                            <div className="rightSide">
                                <div className="account">
                                    <AiOutlineUser />
                                </div>
                                <div className="wishList">
                                    <AiOutlineHeart />
                                    <span className='wishCount'>0</span>
                                </div>
                                <div className="cart" onClick={()=>navigate('/cart')}>
                                    <FiShoppingCart />
                                    {cartdata.length>0?<span className="cartCount">{cartdata.length}</span>:''}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="middel-head">
                        <div className="container">
                        <div className="allProduct" onClick={()=>navigate('/allProduct')}>
                                <img src="" alt="" />
                                <p>Our-Store</p>

                            </div>
                            <div className="mobile" onClick={()=>navigate('/electPro')}>
                                <img src="" alt="" />
                                <p>Electronics</p>

                            </div>
                            <div className="men-fashion" onClick={()=>navigate('/mensfashion')}>
                                <img src="" alt="" />
                                <p>Men's Fashion</p>
                            </div>
                            <div className="women-fashion" onClick={()=>navigate('/womenfashion')}>
                                <img src="" alt="" />
                                <p>Women's Fashion</p>
                            </div>
                            <div className="home">
                                <img src="" alt="" />
                                <p>Home Decoration</p>
                            </div>
                            <div className="accessories">
                                <img src="" alt="" />
                                <p>Accessories</p>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-head">
                        <div className="container">
                            <div className="inputBox">
                                <input type="text" placeholder='Search you want.....' />
                                <FiSearch className='searchIcon' />
                            </div>
                        </div>
                    </div>
                    <div className="mobileMenuDiv">
                    <div onClick={()=>setmenuOpen(!menuOpen)} className="close-menu">
                            <RxCross2
                            className='close-tgl'
                            />
                        </div>
                        <ul className='cat-menuList'>
                            <li>Electronics</li>
                            <li>Men's Fashion</li>
                            <li>Women's Fashion</li>
                            <li>Home Decoration</li>
                            <li>Accessories</li>
                        </ul>

                    </div>
                </header>

            </section>
        </>
    )
}

export default Header