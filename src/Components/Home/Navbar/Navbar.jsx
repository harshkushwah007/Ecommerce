import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({noShadow, searchVariant}) => {
  return (
    <div className={`flex justify-between py-10 px-15 ${!noShadow ? "shadow-md shadow-gray-400 rounded-br-[4rem]": ""}`}>
      <div>
        <h1 className="text-[#A51910] text-3xl font-bold">E-SHOP</h1>
      </div>
      <div className="flex gap-10 items-center">
       <SearchBar variant={searchVariant} />
        <nav className="flex gap-5 font-normal text-sm">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
        <div className="flex gap-5 text-2xl">
          <Link to="/checkout">
          <TbShoppingBagPlus />
          </Link>
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
