import React from 'react'
import ImageSlider from '../components/ImageSlider'
import ProdcuctCard from '../components/ProductCard'
import { SubHeading } from '../utils/styledComponents/components'

const Shop = () => {
    const slides = [
        {url: "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png", title: "img title 1"},
        {url: "https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg", title: "sparrow in snowfall"},
        {url: "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_1280.jpg", title: "butterfly"},
        {url: "https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_1280.jpg", title: "man in forest"},
    ]
    
  return (
    <>
    <div className='mx-auto w-full h-[220px] sm:h-[280px] lg:h-[340px] xl:h-[400px]'>
    <ImageSlider slides={slides}/>
    </div>
    <div className="products container mx-auto my-12">
        <SubHeading className='capitalize mb-4'>Our Products</SubHeading>
        <ProdcuctCard></ProdcuctCard>
    </div>
    </>
  )
}

export default Shop