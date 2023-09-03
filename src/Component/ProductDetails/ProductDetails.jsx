import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiSolidChevronRight } from 'react-icons/bi'
// import ReactImageMagnify from 'react-image-magnify';
// import ReactSlick from 'react-slick';
import benifits1 from '../../Assets/Imgaes/icons/benifits1.svg'
import benifits2 from '../../Assets/Imgaes/icons/benifits2.svg'
import benifits3 from '../../Assets/Imgaes/icons/benifits3.svg'
import benifits4 from '../../Assets/Imgaes/icons/benifits4.svg'
import './productdetails.css'
import CartCount from './CartCount'
import AddToCartButton from './AddToCartButton'
const ProductDetails = () => {
    const { id } = useParams()
    // const [varient, setVarient] = useState([])
    const [details, setDetails] = useState({})
    const [productName, setProductName] = useState('')
    const [big_img, setBig_img] = useState('')
    const [currentImgindex, setCurrurentImgIndex] = useState(0)
    const [currentVarIndex, setCurrentVarIndex] = useState(0)
    const [cartCount,setCartCount]=useState(1)
    const [productStock,setProductStock]=useState(0)

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
      },[])

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
            // console.log(respo);
            setProductName(respo.title)
            // setVarient(respo.data.variants)
            setDetails(respo)
            setBig_img(respo.images[0])
            setProductStock(respo.stock)
        }
        catch (error) {
            console.log('error');
        }

    }
 
    function zoom(e) {
      
        var zoomer = e.currentTarget;
        let x = e.nativeEvent.offsetX / zoomer.offsetWidth * 100
        let y = e.nativeEvent.offsetY / zoomer.offsetHeight * 100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
    // console.log(cartCount);
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
                                    <div className="imgBoxsec">
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
                                                   <AddToCartButton
                                                   cartCount={cartCount}
                                                   setCartCount={setCartCount}
                                                   product={details}
                                                   />
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
                                              
                                            </div>
                                        </div>
                                        <CartCount
                                        setCartCount={setCartCount}
                                        cartCount={cartCount}
                                        productStock={productStock}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default ProductDetails