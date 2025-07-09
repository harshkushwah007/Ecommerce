import React, { useContext, useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import purse from "../../assets/ProductImg/purse.png";
import shoe from "../../assets/ProductImg/shoes.png";
import hoodie from "../../assets/ProductImg/hoodie.png";
import perfume from "../../assets/ProductImg/perfume.png";
import hat from "../../assets/ProductImg/hat.png";
import watch from "../../assets/ProductImg/watch.png";
import FeaturedProductCard from "../Home/FeaturedProduct/FeaturedProductCard";
import Footer from "../Home/Footer";
import { CartContext } from "../Cart/CartContext/CartContext";

const ProductSection = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
const { cartProducts, setCartProducts } = useContext(CartContext);
   const products = [
    {
      id: 1,
      img: purse,
      title: "CHANEL Mini flap bag",
      price: 9900000,
      category: "Bags",
    },
    {
      id: 2,
      img: shoe,
      title: "Converse Shoes",
      price: 540000,
      category: "Footwear",
    },
    {
      id: 3,
      img: hoodie,
      title: "Essential Hoodie",
      price: 370000,
      category: "Clothes",
    },
    {
      id: 4,
      img: perfume,
      title: "Veleno Perfume",
      price: 28000,
      category: "Perfume",
    },
    {
      id: 5,
      img: hat,
      title: "Akubra Snowy River Hat",
      price: 520000,
      category: "Hats",
    },
    {
      id: 6,
      img: watch,
      title: "G-Shock GA-110GB-1A",
      price: 640000,
      category: "Watches",
    },
  ];
  
  const repeatedProducts = [
    ...products,
    ...products,
    ...products,
    ...products,
  ].slice(0, 20);

  const filteredProducts =
    selectedCategory === "All"
      ? repeatedProducts
      : repeatedProducts.filter((product) => product.category === selectedCategory);

  const categories = [
    "All",
    "Hats",
    "Clothes",
    "Watches",
    "Bags",
    "Perfume",
    "Footwear",
  ];

 


  return (
    <div>
      <Navbar />

      <div className="flex">
        <div className="sticky w-[12%] text-[#6D6D6D] flex h-100 mt-15 flex-col gap-4 shadow-lg shadow-gray-500 rounded-r-[4rem] px-4 bg-[#f4f4f4] py-10">
          <h3 className="text-2xl font-bold text-black">Categories</h3>
          <ul className="flex flex-col gap-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 cursor-pointer rounded ${
                    selectedCategory === category
                      ? "bg-[#A51910] text-white"
                      : "bg-gray-100"
                  } `}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <div className="px-4 py-2 bg-[#F4F4F4] rounded-2xl shadow-xl text-sm cursor-pointer">
              Sort by Price ⌄
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <FeaturedProductCard
                key={`${product.id}-${index}`}
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          <div className="flex gap-5 py-8">
            <button className="h-8 w-8 rounded-full cursor-pointer font-semibold border-2 border-[#A51910] text-[#A51910] flex items-center justify-center hover:bg-[#A51910] hover:text-white">
              &lt;
            </button>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className="h-8 w-8 rounded-full font-semibold bg-[#6D6D6D] border-2 cursor-pointer border-[#6D6D6D] text-white flex item-center justify-center hover:bg-gray-700"
              >
                {num}
              </button>
            ))}
            <button className="h-8 w-8 cursor-pointer rounded-full border-2 font-semibold border-[#A51910] text-[#A51910] flex items-center justify-center hover:bg-[#A51910] hover:text-white">
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSection;
