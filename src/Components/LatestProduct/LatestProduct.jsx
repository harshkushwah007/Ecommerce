import React from 'react'
import purse from "../../assets/ProductImg/purse.png";
import shoe from "../../assets/ProductImg/shoes.png";
import hoodie from "../../assets/ProductImg/hoodie.png";
import perfume from "../../assets/ProductImg/perfume.png";
import FeaturedProductCard from '../Home/FeaturedProduct/FeaturedProductCard';

const LatestProduct = () => {
    const products = [
        {
          img: purse,
          title: "CHANEL   Mini flap bag",
          description: "Lambskin & gold-tone metal, black",
          price: 9900000,
        },
        {
          img: shoe,
          title: "Converse Shoes",
          description:
            "Chuck Taylor All Star Trek Chuck 70 Platform Shoes Ecru US 9al",
          price: 540000,
        },
        {
          img: hoodie,
          title: "Essential Hoodie",
          description: "Buttercream Essential Hoodie",
          price: 370000,
        },
        {
          img: perfume,
          title: "Veleno Perfume",
          description: "Veleno Perfume, 100ml",
          price: 28000,
        },
      ];
  return (
    <div>
        <div>
        <h2 className="text-3xl font-bold p-10">Latest Products</h2>
      </div>
      <div className="rounded flex flex-row-reverse gap-10 py-10">
        {products.map((product, index) => (
          <FeaturedProductCard
            key={index}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
            size='large'
          />
        ))}
        ;
      </div>
    </div>
  )
}

export default LatestProduct