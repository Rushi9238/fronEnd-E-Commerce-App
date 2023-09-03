import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { AiFillYoutube } from 'react-icons/ai'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topF">
                    <div className="row gy-4 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="row gy-4">
                                <div className="col-md-4 col-6">
                                    <div className="fooElem">
                                        <div className="head">
                                            Popular Links
                                        </div>
                                        <ul className="ful">
                                            <li>
                                                <Link to={''}>
                                                    Our Store
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Electronics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Men's Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Women's Fashion
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Watches
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Home Decoration
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Accessories
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="fooElem">
                                        <div className="head">
                                            Support
                                        </div>
                                        <ul className="ful">

                                            <li>
                                                <a href='#'>
                                                    Service Center
                                                </a>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Warranty Terms
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fooElem">
                                        <div className="head">
                                            Important Links
                                        </div>
                                        <ul className="ful">
                                            <li>
                                                <Link to={''}>
                                                    Terms and Conditions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''} >
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Cookie Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Warranty Terms
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Shipping Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={''}>
                                                    Return & Refund Policy
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-xl-6">

                                </div>
                                <div className="col-xl-6">
                                    <div className="frightSec">
                                        <div className="logo">
                                            Shoplify
                                        </div>
                                        <div className="subHead">
                                            Corporate Office
                                        </div>
                                        <p className="add">
                                            Shoplify Internet Private Limited,

                                            Buildings Alyssa, Begonia &

                                            Clove Embassy Tech Village,

                                            Outer Ring Road, Devarabeesanahalli Village,

                                            Mumbai, 560103,

                                            Maharashtra, India
                                        </p>
                                        <div className="subHead">
                                            Email Us (Reply in 24h)
                                        </div>
                                        <a href="mailto:info@vivopune.com" className="link">
                                            info@shoplify.com
                                        </a>
                                       
                                        <div className="subHead">
                                            Follow us
                                        </div>
                                        <div className="socials">
                                            <a href="#">
                                                <BiLogoFacebook />
                                            </a>
                                            <a href="#">
                                                <BiLogoInstagram />
                                            </a>
                                            <a href="#">
                                                <AiFillYoutube />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <div className="txt">
                        © 2023 HISOA Electronic Pvt Ltd (A division of vivo). All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer