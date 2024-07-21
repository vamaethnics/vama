import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
// import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Pattu"} heading={"Top's Pattu"}/>
      <HorizontalCardProduct category={"Georgette"} heading={"Popular's Georgette"}/>
      <HorizontalCardProduct category={"Warm_Silk"} heading={"Warm Silk"}/>     
      <HorizontalCardProduct category={"Kathan"} heading={"Kathan"}/>
      <HorizontalCardProduct category={"Ikat"} heading={"Ikat"}/>
      <HorizontalCardProduct category={"Chiffon"} heading={"Chiffon"}/>
      <HorizontalCardProduct category={"Fancy_Print"} heading={"Fancy Print"}/>
      <HorizontalCardProduct category={"Viscose"} heading={"Viscose"}/>
      <HorizontalCardProduct category={"Chiniy_Silk"} heading={"Chiniy Silk"}/>
      <HorizontalCardProduct category={"Tissue_Kota"} heading={"Tissue Kota"}/>
    </div>
  )
}

export default Home