import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiSolidChevronRight } from 'react-icons/bi'
// import ReactImageMagnify from 'react-image-magnify';
// import ReactSlick from 'react-slick';
import './productdetails.css'
const ProductDetails = () => {
    const { id } = useParams()
    // const [varient, setVarient] = useState([])
    const [details, setDetails] = useState({})
    const [productName, setProductName] = useState('')
    const [big_img, setBig_img] = useState('')
    const [currentImgindex, setCurrurentImgIndex] = useState(0)
    const [currentVarIndex, setCurrentVarIndex] = useState(0)


    useEffect(() => {
        fetchDetilsApi()
    }, [])
    const fetchDetilsApi = async () => {
        try {
            const api = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const respo = await api.json()
            console.log(respo);
            setProductName(respo.title)
            // setVarient(respo.data.variants)
            setDetails(respo)
            setBig_img(respo.images[0])
        }
        catch (error) {
            console.log('error');
        }

    }
    // console.log(varient);
    //    console.log(details);
    //    console.log(big_img);
    //    console.log( details.images && details.images[0].path);

    function zoom(e) {
      
        var zoomer = e.currentTarget;
        let x = e.nativeEvent.offsetX / zoomer.offsetWidth * 100
        let y = e.nativeEvent.offsetY / zoomer.offsetHeight * 100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
    return (
        <>
            <div className="productDetilas-div">
                <div className="productDetilas-heading">
                    <div className="container">
                        <div className="page-path">
                            <p>Home <span><BiSolidChevronRight /></span></p>
                            <span>Detils <BiSolidChevronRight /></span>
                            <span>{details && details.category} <BiSolidChevronRight /></span>
                            <div className="pro-path_span"> {details && details.title} ({details && details.brand})</div>
                        </div>
                    </div>
                </div>
                <div className="productDetails">
                    <div className="container">
                        <div className="productsDeatils-Wrapper">
                            <div className="row">
                                <div className="col-lg-5 ">
                                    <div className="imgBox">
                                        <div className="row  gx-2 gy-4">
                                            <div className="col-2 ">
                                                <div className="small-img">
                                                    {details.images && details.images.map((img, index) => {
                                                        return (
                                                            <img key={index} src={img} alt="" className={currentImgindex == index ? 'active' : ''} onClick={() => {
                                                                setBig_img(img)
                                                                setCurrurentImgIndex(index)
                                                            }} />
                                                        )
                                                    })}

                                                </div>

                                            </div>
                                            <div className="col-10">
                                                <div className="big-img">


                                                    <figure className="zoom" onMouseMove={(event) => zoom(event)} style={{ backgroundImage: `url(${big_img})` }}>
                                                        <img src={big_img} />
                                                    </figure>

                                                </div>
                                                <div className="cart-buy-btn">
                                                    <button className='addtocart'>ADD TO CART</button>
                                                    <button className='buyNow'>BUY NOW</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="details-text-containe">
                                        <div className="heading">
                                            {productName} ({details && details.brand})

                                        </div>
                                        <div className="price-details">
                                            <div className="dis-mrp"> ₹{((details && details.price * 82) - (details && details.price * 82 * details.discountPercentage / 100).toFixed(0))}.00</div>
                                            <div className="actual-mrp">₹{details.price * 82}.00
                                            </div>
                                            <div className="discount">{details && details.discountPercentage}% off</div>
                                            <span>(incl.of all taxes)</span>
                                        </div>
                                        <h3>Available offers</h3>
                                        <div className="avab-offers">

                                            <div className="offers-box">
                                                <div className="subhead">
                                                    Bank Offer
                                                </div>
                                                <div className="descp">
                                                    Flat ₹500 Instant Discount on ICICI/HDFC CC&DC Full Swipe & CC EMI Transactions
                                                </div>
                                                <div className="link">
                                                    T&C
                                                </div>
                                            </div>
                                            <div className="offers-box">
                                                <div className="subhead">
                                                    No Cost EMI
                                                </div>
                                                <div className="descp">
                                                    No Cost EMI Available on Bajaj Finance Limited (BAJAJ FINSERV)
                                                </div>
                                                <div className="link">View Plans</div>
                                            </div>
                                            <div className="offers-box">
                                                <div className="subhead">
                                                    No Cost EMI
                                                </div>
                                                <div className="descp">
                                                    No Cost EMI Available on Bajaj Finance Limited (BAJAJ FINSERV)
                                                </div>
                                                <div className="link">View Plans</div>
                                            </div>
                                        </div>
                                        <div className="mobile_color">
                                            <div className="head">
                                                Product
                                            </div>
                                            <div className="colorImgBox">
                                                <div className="imgBox active">
                                                    <img src={details && details.thumbnail} alt="" />
                                                    <p>{details && details.title}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="mobile-ram">
                                            <div className="head">
                                            Description
                                            </div>
                                            <div className="storage">
                                                    <p>
                                                        {details && details.description}
                                                    </p>
                                                {/* {
                                                    varient && varient.map((item, index) => {
                                                        return (
                                                            <div key={item.id} className={` storageBox ${currentVarIndex == index ? 'active' : ''}`} onClick={() => {
                                                                setDetails(item)
                                                                setCurrentVarIndex(index)
                                                            }}>
                                                                {item.options}
                                                            </div>
                                                        )
                                                    })
                                                } */}
                                            </div>
                                        </div>
                                        <div className="qut-counter">
                                            <div className="head">Quantity</div>
                                            <div className="counter">
                                                <div className="decr">-</div>
                                                <span>1</span>
                                                <div className="incr">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails