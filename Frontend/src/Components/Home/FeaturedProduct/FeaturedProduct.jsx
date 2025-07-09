import React from "react";
import purse from "../../../assets/ProductImg/purse.png";
import shoe from "../../../assets/ProductImg/shoes.png";
import hoodie from "../../../assets/ProductImg/hoodie.png";
import perfume from "../../../assets/ProductImg/perfume.png";
import discount from "../../../assets/Discount/Discount.png";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      img: purse,
      title: "CHANEL   Mini flap bag",
      description: "Lambskin & gold-tone metal, black",
      price: 9900000,
    },
    {
      id: 2,
      img: shoe,
      title: "Converse Shoes",
      description:
        "Chuck Taylor All Star Trek Chuck 70 Platform Shoes Ecru US 9al",
      price: 540000,
    },
    {
      id: 3,
      img: hoodie,
      title: "Essential Hoodie",
      description: "Buttercream Essential Hoodie",
      price: 370000,
    },
    {
      id: 4,
      img: perfume,
      title: "Veleno Perfume",
      description: "Veleno Perfume, 100ml",
      price: 28000,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold p-10">Featured Products</h2>
      </div>
      <div className="rounded flex gap-10 p-10">
        {products.map((product) => (
          <FeaturedProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
            size="large"
          />
        ))}

      </div>
      <div className="cursor-pointer">
        <img src={discount} alt="" />
      </div>
    </div>
  );
};

export default FeaturedProduct;
