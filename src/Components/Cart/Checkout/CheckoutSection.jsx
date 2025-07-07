import React, { useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Footer from "../../Home/Footer";
import { CiCreditCard1 } from "react-icons/ci";
import UserForm from "../Form/UserForm";
import PaymentForm from "../Form/PaymentForm";
import CartProduct from "../CartProduct/CartProduct";

const CheckoutSection = () => {
  const [step, setStep] = useState("delivery");

  return (
    <div>
      <Navbar />
      <div className="flex py-10">
        <div className="w-full max-w-3xl py-10 pr-10 border-r border-gray-300">
          <div className="flex bg-[#A51910] text-white font-semibold text-lg rounded-r-full px-8 py-3">
            <div className="w-2/5">PRODUCT</div>
            <div className="w-1/5 text-center">QTY</div>
            <div className="w-1/5 text-center">PRICE</div>
            <div className="w-1/5 text-center">
              <RiDeleteBin5Fill className=" ml-15" />
            </div>
          </div>
          <CartProduct />
        </div>
        <div className="p-5 pt-10 ">
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
              <div className="border-b-2 border-[#A51910]">Delivery</div>
              <div>Payment</div>
            </div>
            {step === "delivery" && (
              <UserForm goToPayment={() => setStep("payment")} />
            )}
            {step === "payment" && <PaymentForm />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutSection;
