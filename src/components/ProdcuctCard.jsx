import React from "react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import img from "../images/demoimg.jpg";

const ProdcuctCard = () => {
  return (
    <div className="productCard border-2 flex flex-col w-11/12 sm:w-[230px] rounded-md">
      <div className="productImg relative">
        <img src={img} alt="" className="w-full object-cover rounded-t-md hover:opacity-90" />
        <BsFillCartPlusFill fontSize={'24px'} className="absolute -bottom-8 right-3 cursor-pointer"/>
      </div>
      <div className="productDetails bg-[#fff] p-3">
        <h4 className="text-sm">Category</h4>
        <h3 className="font-semibold text-xl">Card Title</h3>
        <h4 className="text-sm"><strong className="font-medium">Price:</strong> 20$</h4>
      </div>
    </div>
  );
};

export default ProdcuctCard;
