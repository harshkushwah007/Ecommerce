import React from "react";
import miniPurse from "../../../assets/Checkout/mini purse.png";
import miniShoe from "../../../assets/Checkout/mini shoes.png";
import QuantityButton from "../../Button/QuantityButton";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartProduct = ({ cartProducts, setCartProducts }) => {
  const handleDelete = (id) => {
    setCartProducts(prev => prev.filter((product) => product.id !== id));
  };

  const handleDecrement = (id) => {
    setCartProducts(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const handleIncrement = (id) => {
    setCartProducts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  return (
    <div>
      {cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product) => (
            <div key={product.id} className="flex items-center px-8 py-4">
              <div className="flex items-center gap-4 w-2/5">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="font-medium">{product.title}</div>
              </div>
              <div className="w-1/5 flex justify-center">
                <QuantityButton
                  quantity={product.qty}
                  handleDecrement={() => handleDecrement(product.id)}
                  handleIncrement={() => handleIncrement(product.id)}
                />
              </div>
              <div className="w-1/5 text-center font-semibold">
                {product.price} MMK
              </div>
              <div className="w-1/5 flex justify-center">
                <RiDeleteBin5Fill
                  className="text-[#A51910] cursor-pointer"
                  onClick={() => handleDelete(product.id)}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-40 border-b-1 border-[#A51910]">
          <h2 className="text-2xl font-bold text-[#6D6D6D]">No Items in Cart</h2>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
