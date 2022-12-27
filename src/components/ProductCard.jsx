import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import img from "../images/demoimg.jpg";
import { useCart } from "../context/Product.state";
import PopupMessage from "./PopupMessage";

const ProductCard = ({ productId, title, category, price, image }) => {
  const cart = useCart(); // use cart context

  async function addItemToCart(id) {
    try {
      await cart.addCartItem(id); // adding items to cart based on the product id
      cart.setPopupIsActive(true);
    } catch (error) {
      console.log(error.message);
      cart.setPopupIsActive(true);
    }
  }
  

  return (
    <div className="productCard border-2 flex flex-col w-11/12 sm:w-[230px] rounded-md">
      <div className="productImg relative">
        <Link to={`/productPage/${productId}/`}>
          <img
            src={image || img}
            alt=""
            className="w-full object-cover rounded-t-md hover:opacity-90"
          />
        </Link>
        <BsFillCartPlusFill
          fontSize={"24px"}
          className="absolute -bottom-8 right-3 cursor-pointer hover:text-primary"
          onClick={() => addItemToCart(productId)}
        />
      </div>
      <div className="productDetails bg-[#fff] p-3">
        <h4 className="text-sm">{category || "category"}</h4>
        <h3 className="font-semibold text-xl">
          <Link to={`/productPage/${productId}/`}>
            {title || "Product title"}
          </Link>
        </h3>
        <h4 className="text-sm">
          <strong className="font-medium">Price:</strong> ${price || 20}
        </h4>
      </div>
      {cart.message && cart.message.message !== "" ? <PopupMessage /> : ""}
    </div>
  );
};

export default ProductCard;
