import React from 'react'
import HomeCarousel from './../components/HomeCarousel'
import HomeProductCarousel from '../components/HomeProductCarousel'
import { mens_kurta } from '../../Data/MensKurta'
const Homepage = () => {
  return (
    <>
    <div>
      
      <div className='space-x-10 '>
        <HomeCarousel  />  
        <HomeProductCarousel data={mens_kurta} SectionName="Men's Kurta"/>
        <HomeProductCarousel data={mens_kurta}SectionName="Men's Shoes" />
        <HomeProductCarousel data={mens_kurta}SectionName="Men's Shirt"/>
        <HomeProductCarousel data={mens_kurta}SectionName="Women's Saree"/>
        <HomeProductCarousel data={mens_kurta}SectionName="Women's Dress"/>
        
      </div>


    </div>
    </>
  )
}

export default Homepage
