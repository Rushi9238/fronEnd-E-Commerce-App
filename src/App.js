import React, { useEffect } from 'react'
import './App.css';
import Header from './Component/Header/Header';
import Homecaro from './Component/HomePage/Homecaro';
import { useDispatch } from 'react-redux';
import { collectData, electronicsProducts, mensProduct,womensProduct } from './Redux/ReducerSlice';
import Home from './Component/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import ElectronicsProduct from './Component/ProductList/ElectronicsProduct';
import MensFashion from './Component/ProductList/MensFashion';
import WomensFashion from './Component/ProductList/WomensFashion';
import OurStoteProduct from './Component/ProductList/OurStoteProduct';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Footer from './Component/Footer/Footer';
import Cart from './Component/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const dispatch=useDispatch()

useEffect(()=>{
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
},[]) 

useEffect(()=>{
  apiFunc()
},[])
const apiFunc= async()=>{
  const api=await fetch('https://dummyjson.com/products?limit=100')
  const respo=await api.json()
  console.log(respo.products);
  const f1=respo.products.filter((item)=>{
    if(item.category=='smartphones' || item.category=='laptops'){
       return item
    }
   })
   const f2=respo.products.filter((item)=>{
    if(item.category=='mens-shirts' || item.category=='mens-shoes' || item.category=='mens-watches' || item.category=='sunglasses'){
       return item
    }
   })
   const f3=respo.products.filter((item)=>{
    if(item.category=='womens-dresses' || item.category=='womens-shoes' || item.category=='womens-watches' || item.category=='womens-bag' || item.category=='womens-jewellery'){
       return item
    }
   })
   dispatch(womensProduct(f3))
   dispatch(mensProduct(f2))
   dispatch(electronicsProducts(f1))
dispatch(collectData(respo.products))
}


  return (
    <div className="App">
     {/* https://dummyjson.com/products?limit=100
              https://dummyjson.com/products/categories
              https://dummyjson.com/products/category/smartphones
          */}
          <ToastContainer
        position="top-right"
        autoClose={1000}
      />
         <Header/>
        
         {/* <Home/> */}
         <Routes>
          <Route path='/' element={<Homecaro/>}/>
          <Route path='/allProduct' element={<OurStoteProduct/>}/>
          <Route path='/electPro' element={<ElectronicsProduct/>}/>
          <Route path='/mensfashion' element={<MensFashion/>}/>
          <Route path='/womenfashion' element={<WomensFashion/>}/>
          <Route path='/detils/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
         </Routes>
         <Footer/>

    </div>
  );
}

export default App;
