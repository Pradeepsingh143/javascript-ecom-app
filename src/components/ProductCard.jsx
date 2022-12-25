import React from "react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import img from "../images/demoimg.jpg";

const ProductCard = ({title, category, price, image}) => {
  return (
    <div className="productCard border-2 flex flex-col w-11/12 sm:w-[230px] rounded-md">
      <div className="productImg relative">
        <img src={image || img} alt="" className="w-full object-cover rounded-t-md hover:opacity-90" />
        <BsFillCartPlusFill fontSize={'24px'} className="absolute -bottom-8 right-3 cursor-pointer"/>
      </div>
      <div className="productDetails bg-[#fff] p-3">
        <h4 className="text-sm">{category || 'category'}</h4>
        <h3 className="font-semibold text-xl">{title || 'Product title'}</h3>
        <h4 className="text-sm"><strong className="font-medium">Price:</strong> ${price || 20}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
