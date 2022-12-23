import React from 'react'
import img from '../images/demoimg.jpg'

const RelativeProductCard = ({title, subTitle}) => {
  return (
    <div className='realtiveProductCard flex items-center gap-3 max-w-full sm:max-w-[230px] max-h-[80px] border-2 overflow-hidden rounded-sm'>
        <div className="productImage">
            <img src={img} className="min-w-[80px] h-[80px] object-cover" alt="" />
        </div>
        <div className="productDetails">
            <h4 className='capitalize font-medium text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[145px]'>{title}</h4>
            <h6 className='realtiveProductSubTitle text-sm'>{subTitle}</h6>
        </div>
    </div>
  )
}

export default RelativeProductCard