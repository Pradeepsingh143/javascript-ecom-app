import React, {useState, useEffect} from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaShopware } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";
import { useCart } from "../context/Product.state";

const Header = () => {
  const {cartItems} = useCart();
  const [isActive, setIsActive] = useState(false)
  
  const toggleCart = () => {
    setIsActive(!isActive)
    if (!isActive) {
        const miniCart = document.getElementById("miniCart");
        miniCart.classList.add("overlay")
    }else{
      const miniCart = document.getElementById("miniCart");
        miniCart.classList.remove("overlay")
    }
  }

  return (
    <header className="py-4 bg-primary">
      <div className="navbar mx-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* website logo */}
          <div className="logo">
            <Link to={'/'}><FaShopware size={"36px"} color={"white"} /></Link>
          </div>

          {/* search input bar */}
          <div className="searchBar hidden sm:flex">
            <input
              type="search"
              placeholder="Search product"
              className="py-1 px-4 rounded focus:outline-double shadow-2xl"
            />
            <button></button>
          </div>

          <div className="flex gap-8 sm:gap-14 items-center relative">
            {/* main menu */}
            <nav className="navMainMenu list-none uppercase gap-1 hidden sm:flex">
              <Link to={'/'} className="bg-black px-10 py-1 rounded text-white text-sm cursor-pointer">
                Home
              </Link>
              <Link to={'/shop'} className="bg-black px-10 py-1 rounded text-white text-sm cursor-pointer">
                Shop
              </Link>
            </nav>

            {/* mobile hamburger menu  */}
            <nav className="mobileMainMenu flex sm:hidden">
              {/* <li className="bg-black px-10 py-1 rounded text-white text-sm cursor-pointer">
                Home
              </li>
              <li className="bg-black px-10 py-1 rounded text-white text-sm cursor-pointer">
                Shop
              </li> */}
                <RxHamburgerMenu size={'1.3em'}/>
            </nav>

            {/* cart icon */}
            <div className="menuIcon relative">
            <button onClick={toggleCart}>
            <h2 className="cursor-pointer">
                <BsFillCartCheckFill size={"24px"}/>
              </h2>
              <p className="bg-white rounded-full text-center text-xs absolute bottom-4 left-3 w-4">
                {cartItems.length}
              </p>
            </button>
            </div>
            <div className="absolute top-8 right-0 z-10" id="miniCart">
              {isActive ? <MiniCart toggleCart={toggleCart}/> : ""}
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
