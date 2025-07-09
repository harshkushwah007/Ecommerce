import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer";
import OrderDetail from "./OrderDetail";
import ProfileSection from "../Profile/ProfileSection";

const OrderSection = () => {
  const [activeTab, setActiveTab] = useState("order");

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex flex-col py-25 ">
          <button
            onClick={() => {
              setActiveTab("order");
            }}
            className={`text-white px-5 py-6 cursor-pointer rounded-r-4xl ${
              activeTab === "order" ? "bg-[#560A05]" : "bg-[#A51910]"
            } `}
          >
            ORDER
          </button>
          <button
            onClick={() => {
              setActiveTab("profile");
            }}
            className={`text-white px-5 py-6 cursor-pointer rounded-br-4xl ${
              activeTab === "profile" ? "bg-[#560A05]" : "bg-[#A51910]"
            }  `}
          >
            PROFILE
          </button>
        </div>
        <div className="flex-1">
          {activeTab === "order" && <OrderDetail />}
          {activeTab === "profile" && <ProfileSection />}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default OrderSection;
