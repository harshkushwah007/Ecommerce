import React, { useState } from "react";
import miniPurse from "../../../assets/Checkout/mini purse.png";
import miniShoe from "../../../assets/Checkout/mini shoes.png";
import QuantityButton from "../../Button/QuantityButton";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartProduct = () => {
  const [quantities, setQuantities] = useState([
    { id: 1, qty: 1 },
    { id: 2, qty: 1 },
  ]);

  const handleDecrement = (id) => {
    setQuantities((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };
  const handleIncrement = (id) => {
    setQuantities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const products = [
    {
      id: 1,
      title: "CHANEL Mini Flap bag",
      price: 9900000,
    },
    {
      id: 2,
      title: "Converse Shoes",
      price: 540000,
    },
  ];
  return (
    <div>
      {products.map((product) => {
        const quantity = quantities.find((q) => q.id === product.id)?.qty || 1;

        return (
          <div key={product.id} className="flex items-center px-8 py-4">
            {/* Product Info */}
            <div className="flex items-center gap-4 w-2/5">
              <img
                src={product.id === 1 ? miniPurse : miniShoe}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="font-medium">{product.title}</div>
            </div>

            <div className="w-1/5 flex justify-center">
              <QuantityButton
                quantity={quantity}
                handleDecrement={() => handleDecrement(product.id)}
                handleIncrement={() => handleIncrement(product.id)}
              />
            </div>

            <div className="w-1/5 text-center font-semibold">
              {product.price} MMK
            </div>

            <div className="w-1/5 flex justify-center">
              <RiDeleteBin5Fill className="text-[#A51910] cursor-pointer" />
            </div>
          </div>
        );
      })}
      <div className="flex justify-between border-t-1 border-b-1 font-bold text-lg py-10 m-6 border-[#A51910] ">
        <div>Discount</div>
        <div className="ml-30">0%</div>
        <div className="mr-40">0 MMK</div>
      </div>
      <div className="flex gap-30 ml-80 font-bold text-lg">
        <div>Total</div>
        <div>10440000 MMK</div>
      </div>
    </div>
  );
};

export default CartProduct;
