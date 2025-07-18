import React, { useContext, useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import Footer from "../../Home/Footer";
import { CiCreditCard1 } from "react-icons/ci";
import UserForm from "../Form/UserForm";
import PaymentForm from "../Form/PaymentForm";
import CartProduct from "../CartProduct/CartProduct"; 
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const CheckoutSection = () => {
  const [step, setStep] = useState("delivery");
  const { cartProducts, setCartProducts } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <div className="flex py-10">
        <div className="w-full max-w-3xl py-10 pr-10 border-r border-gray-300">
          {cartProducts.length > 0 ? (
            <>
              <div className="flex bg-[#A51910] text-white font-semibold text-lg rounded-r-full px-8 py-3">
                <div className="w-2/5">PRODUCT</div>
                <div className="w-1/5 text-center">QTY</div>
                <div className="w-1/5 text-center">PRICE</div>
                <div className="w-1/5 text-center">
                  <RiDeleteBin5Fill className="ml-15" />
                </div>
              </div>
              <CartProduct
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            </>
          ) : (
            <div className="flex justify-center items-center h-40 text-xl font-bold text-gray-500">
              No Items in Cart
            </div>
          )}
        </div>

        {cartProducts.length > 0 ? (
          <div className="p-5 pt-10">
            <div className="flex gap-2 py-2">
              <CiCreditCard1 className="text-4xl" />
              <h3 className="text-xl font-bold">CHECK OUT</h3>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="font-semibold text-[#A51910]">Account:</div>
              <div className="font-medium">09450756980</div>
            </div>
            <div className="flex gap-40">
              <div className="flex gap-2 mb-2">
                <div className="font-semibold text-[#A51910]">ID:</div>
                <div className="font-medium">1234567890</div>
              </div>
              <div className="flex gap-2">
                <div className="font-semibold text-[#A51910]">DATE:</div>
                <div className="font-medium">7/7/2025</div>
              </div>
            </div>
            <div className="p-5 pb-20">
              <div className="flex font-bold border-b-1 gap-10 border-[#6D6D6D] text-xl">
                <div
                  onClick={() => setStep("delivery")}
                  className={`cursor-pointer pb-2 ${
                    step === "delivery"
                      ? "border-b-2 border-[#A51910]"
                      : "border-none"
                  }`}
                >
                  Delivery
                </div>
                <div
                  className={`cursor-pointer pb-2 ${
                    step === "payment"
                      ? "border-b-2 border-[#A51910]"
                      : "border-none"
                  }`}
                >
                  Payment
                </div>
              </div>
              {step === "delivery" && (
                <UserForm goToPayment={() => setStep("payment")} />
              )}
              {step === "payment" && <PaymentForm />}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 ml-10">LET'S Buy</h2>
            <div className="flex flex-col py-10 flex-1 px-40">
              <Link to={"/products"}>
                <button className="flex gap-3 shadow-xl px-6 py-2 mb-4 bg-[#A51910] text-white rounded-full cursor-pointer">
                  <FaShoppingCart />
                  GO TO SHOPPING
                </button>
              </Link>
              <Link to={"/"}>
                <button className="flex gap-3 shadow-xl px-6 py-2 bg-[#EFEFEF] border border-[#A51910] text-[#A51910] rounded-full cursor-pointer">
                  <FaHome />
                  BACK TO HOME
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutSection;
