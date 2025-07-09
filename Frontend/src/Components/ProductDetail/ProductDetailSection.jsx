import React, { useContext } from "react";
import Navbar from "../Home/Navbar/Navbar";
import purse from "../../assets/ProductImg/purse.png";
import shoe from "../../assets/ProductImg/shoes.png";
import hoodie from "../../assets/ProductImg/hoodie.png";
import perfume from "../../assets/ProductImg/perfume.png";
import hat from "../../assets/ProductImg/hat.png";
import watch from "../../assets/ProductImg/watch.png";
import bigBag from "../../assets/ProductDetails/bigBag.png";
import bag1 from "../../assets/ProductDetails/bag1.png";
import bag2 from "../../assets/ProductDetails/bag2.png";
import bag3 from "../../assets/ProductDetails/bag3.png";
import bag4 from "../../assets/ProductDetails/bag4.png";
import FeaturedProductCard from "../Home/FeaturedProduct/FeaturedProductCard";
import Footer from "../Home/Footer";
import { useParams } from "react-router-dom";
import { CartContext } from "../Cart/CartContext/CartContext";

const ProductDetailSection = () => {
   const products = [
      {
        id:1,
        img: purse,
        title: "CHANEL Mini flap bag",
        price: 9900000,
      },
      {
        id:2,
        img: shoe,
        title: "Converse Shoes",
        price: 540000,
      },
      {
        id:3,
        img: hoodie,
        title: "Essential Hoodie",
        price: 370000,
      },
      {
        id:4,
        img: perfume,
        title: "Veleno Perfume",
        price: 28000,
      },
      {
        id:5,
        img: hat,
        title: "Akubra Snowy River Hat",
        price: 520000,
      },
      {
        id:6,
        img: watch,
        title: "G-Shock GA-110GB-1A",
        price: 640000,
      },
    ];

    const {id} = useParams();

    const product = products.find((p) => p.id === Number(id))
    const {cartProducts, setCartProducts } = useContext(CartContext);

const addToCart = () => {
  console.log("Clicked Add To Cart");
  setCartProducts(prev => {
    console.log("Before:", prev);

    const exists = prev.find((p) => p.id === product.id);
    if (exists) {
      const updated = prev.map((p) =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
      );
      console.log("Updated Cart:", updated);
      return updated;
    } else {
      const newCart = [...prev, { ...product, qty: 1 }];
      console.log("New Cart:", newCart);
      return newCart;
    }
  });
};

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center gap-10">
        <div className="py-10 px-20">
          <img src={bigBag} alt="/" className="h-80" />
          <div className="flex gap-3 mt-4 justify-center h-15">
            <img src={bag1} alt="/" />
            <img src={bag2} alt="/" />
            <img src={bag3} alt="/" />
            <img src={bag4} alt="/" />
          </div>
        </div>
        <div className="py-10 flex flex-col gap-2 w-1/4">
          <span className="text-xs text-[#2D2B2B]">Home/Bags</span>
          <h3 className="text-2xl font-bold">{product.title}</h3>
          <h5 className="text-xl text-[#6D6D6D] font-semibold">{product.price} MMK</h5>
          <div className="px-4 py-1 my-5 bg-[#F4F4F4] rounded-2xl shadow-xl text-sm cursor-pointer w-28">
            Select Size ⌄
          </div>
          <h4 className="text-lg font-bold">PRODUCT DETAILS</h4>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            sint reiciendis voluptas illum eos nemo deleniti quia esse
            inventore, id error accusamus aspernatur ducimus!
          </p>
          <div className="flex gap-20">
            <div className="px-4 py-1 my-5 bg-[#F4F4F4] rounded-2xl shadow-xl text-sm cursor-pointer w-18">
              - 1 +
            </div>
            <button onClick={()=> addToCart()} className="px-4 py-1 my-5 bg-[#A51910] text-white rounded-2xl shadow-xl text-sm cursor-pointer">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold p-10">Relative Products</h3>
        <div className="flex gap-8 p-10">
            {products.map((product, index) => (
              <FeaturedProductCard
                key={index}
                img={product.img}
                title={product.title}
                price={product.price}
                size="small"
              />
            ))}
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailSection;
