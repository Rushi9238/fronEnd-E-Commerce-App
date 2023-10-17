import React, { useState } from 'react'
import './header.css'
import './header1.css'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'

import { CgMenu } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { checkLogInModal } from '../../Redux/LogInModal'
import { checkUserLogIn } from '../../Redux/UserLogIn'
import { toast } from 'react-toastify'

const Header = () => {
    const { cartdata } = useSelector((select) => select.cartSlice)
    const {loginModal}=useSelector((select)=>select.LogInModal)
    const {userLogIn}=useSelector((select)=>select.UserLogIn)
    // console.log(userLogIn);
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const [menuOpen, setmenuOpen] = useState(false)
 
    const googleAuthfun=(details)=>{
        // console.log(details);
        const userData={
            'email':details.email,
            'name':details.name,
            'sub':details.sub
        }

        localStorage.setItem('clientData',JSON.stringify(userData))
        toast.success('Logined Succssfully')
        dispatch(checkLogInModal(false))
        dispatch(checkUserLogIn(true))
    }
    
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
                                <div className="logo" onClick={() => navigate('/')}>
                                    shoplify
                                </div>
                                <div className="inputBox">
                                    <input type="text" placeholder='Search you want.....' />
                                    <FiSearch className='searchIcon' />
                                </div>

                            </div>
                            <div className="rightSide">
                                <div className="account">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <AiOutlineUser className='accountIcon' />
                                        </Dropdown.Toggle>
                                     
                                          <Dropdown.Menu>
                                            {
                                                !userLogIn ? <>
                                                    <Dropdown.Item onClick={() => {
                                                     
                                                        dispatch(checkLogInModal(true))
                                                    }} >LogIn</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => {}}>Create Account</Dropdown.Item>
                                                </>
                                                    :
                                                    <>
                                                        <Dropdown.Item onClick={() => {
                                                            
                                                            // setUserLogIn(false)
                                                            dispatch(checkUserLogIn(false))
                                                            localStorage.removeItem('clientData')
                                                            toast.success('Log out successfully')
                                                        }} >Logout</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => {}}>DashBoard</Dropdown.Item>
                                                    </>
                                            }

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="wishList" onClick={()=>{
                                   
                                }}>
                                    <AiOutlineHeart />
                                    {/* <span className='wishCount'>0</span> */}
                                </div>
                                <div className="cart" onClick={() => navigate('/cart')}>
                                    <FiShoppingCart />
                                    {cartdata.length > 0 ? <span className="cartCount">{cartdata.length}</span> : ''}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="middel-head">
                        <div className="container">
                            <div className="allProduct" onClick={() => navigate('/allProduct')}>
                                <img src="" alt="" />
                                <p>Our-Store</p>

                            </div>
                            <div className="mobile" onClick={() => navigate('/electPro')}>
                                <img src="" alt="" />
                                <p>Electronics</p>

                            </div>
                            <div className="men-fashion" onClick={() => navigate('/mensfashion')}>
                                <img src="" alt="" />
                                <p>Men's Fashion</p>
                            </div>
                            <div className="women-fashion" onClick={() => navigate('/womenfashion')}>
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
                        <div onClick={() => setmenuOpen(!menuOpen)} className="close-menu">
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

                     {/* Modal */}
                     <Modal
                        show={loginModal}
                        onHide={() => {
                            // setLogInModal(!logInModal)
                            dispatch(checkLogInModal(false))
                        }}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                    >
                        <div className="modalWrapper">
                            <Modal.Header closeButton >
                            </Modal.Header>
                            <Modal.Body>
                                <div className="modalLogIn">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto text-center">
                                            <div className="logHead">
                                                Log In
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-9 mx-auto text-center">
                                            <div className="googleAuth-div">
                                                <div className="loginUsing"></div>
                                                <div className="googleAuth">
                                                    {/* 41123671961-hs01iqo43igs2qa54tk6pk65uf0efama.apps.googleusercontent.com */}
                                                    <GoogleOAuthProvider clientId="41123671961-ooe2pj74fsf9ps2g4939aca1etonm388.apps.googleusercontent.com">
                                                        <GoogleLogin
                                                            onSuccess={credentialResponse => {
                                                                const clientDetails = jwt_decode(credentialResponse.credential)
                                                                // console.log(clientDetails);
                                                                googleAuthfun(clientDetails)
                                                            }}
                                                            onError={() => {
                                                                // console.log('Login Failed');
                                                            }}
                                                        />
                                                    </GoogleOAuthProvider>
                                                </div>
                                                <div className="newuser">
                                                    New User ? <span>Create an Account</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </div>
                    </Modal>
                </header>

            </section>
        </>
    )
}

export default Header