import React, { useEffect, useState } from 'react'
import {BiSolidChevronRight} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

import './productList.css'
const MensFashion = () => {
    const {mens}=useSelector((select)=> select.ReducerSlice)
    const [totalPage,setTotalPage]=useState(1)
    const [currentPage,setCurrentPage]=useState(10)
const navigate=useNavigate()
useEffect(()=>{
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
},[totalPage, ])

  useEffect(()=>{
    if(mens){
      setTotalPage(mens.length/10)
    }
  },[currentPage])
  return (
    <>
    <div className="product-container">
        
        <div className="product-page_heading">
              <div className="container">
                <div className="row">
                <div className="col-12">
                  <div className="page-path">
                    <p>Home <span><BiSolidChevronRight/></span></p>
                    <span>Mens Fashion</span>
                  </div>
                  {/* <div className="filterBox">
                    <p>Filters</p>
                  </div> */}
                </div>
                <div className="col-10">
                  <div className="head-line">
                  Shop Sholify Top Selling Products
                  </div>
                </div>
                </div>
              </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10">
            <div className="productDiv">
                <div className="row gy-4">
                  {
                    mens && mens.slice(currentPage-10,currentPage).map((item)=>{
                      return (
                        <div className="col-lg-4 col-md-6" key={item.id} onClick={()=>navigate(`/detils/${item.id}`)}>
                        <div className="product-card">
                          <div className="imgDiv">
                            <img className='img-fluid' src={item.thumbnail} alt="" />
                          </div>
                          <div className="product-textConatine">
                            <div className="product_name">
                              {item.title}
                            </div>
                            <div className="product_var">
                         
                           {item.category}
                            </div>
                            <div className="product_SP">
                          
                            ₹{((item.price*82)-(item.price*82*item.discountPercentage/100).toFixed(0))}.00
                            </div>
                            <div className="product_MRP">
                           <div className="p">
                           ₹{item.price*82}.00
                             </div> 
                             <span>-
                             {item.discountPercentage}% off
                              </span>
                            </div>
                          </div>
  
                        </div>
                      </div>
                      )
                    })
                  }
                   <div className="pagination">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={(e) => {
                      console.log('e.selected',e.selected);
                      console.log('pageCount',e.selected*10+10);
                      setCurrentPage(e.selected*10+10)
                    }}
                    pageRangeDisplayed={3}
                    pageCount={totalPage}
                    previousLabel="prev"
                    // forcePage={currentPage - 1}
                    renderOnZeroPageCount={null}
                  />
                  </div>
                </div>

                {/* <div className="paginationDiv">
                  <button className='pBtn'>Prev</button>
                  <span>1 of 10</span>
                  <button className='nBtn'>Next</button>
                </div> */}
                </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MensFashion