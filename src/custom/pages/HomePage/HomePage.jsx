import React from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import  HomeSmallerCarousel from "../../components/HomeSmallerCarousel/HomeSmallerCarousel"
import { mens_kurta } from "../../../Data/mens_kurta.js";

function HomePage() {
  return (
    <div>
       <HomeCarousel/>
       <div>
       <HomeSmallerCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
       <HomeSmallerCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
       <HomeSmallerCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
       <HomeSmallerCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
       <HomeSmallerCarousel data={mens_kurta} sectionName={"Women's Jeans"}/>

       </div>
    </div>
  )
}

export default HomePage