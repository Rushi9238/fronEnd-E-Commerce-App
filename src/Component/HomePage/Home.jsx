import React from 'react'
// HOOK
import { useSelector } from 'react-redux'

// Componets 
import Homecaro from './Homecaro'
import CommonProductCaro from './CommonProductCaro'
import MidBannerSec from './MidBannerSec'
import OurBenifits from './OurBenifits'


const Home = () => {
    // Products get in Redux-store
    const {electronics}=useSelector((select)=> select.ReducerSlice)
    const {mens}=useSelector((select)=> select.ReducerSlice)
    const {womens}=useSelector((select)=> select.ReducerSlice)
  return (
    <>
    <Homecaro/>
    <CommonProductCaro
    Product={electronics}
    HeadLine={'Top Electronics Product'}
    link={''}
    caroDirection={false}
    headClass={''}
    />
    <MidBannerSec/>
    <CommonProductCaro/>
    <CommonProductCaro/>
    <OurBenifits/>
    </>
  )
}

export default Home