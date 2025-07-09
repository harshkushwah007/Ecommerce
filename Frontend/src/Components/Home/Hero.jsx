import React from "react";
import Navbar from "./Navbar/Navbar";
import Button from "../Button/ButtonRed";
import Girls from "../../assets/Hero/Hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-white via-gray-300 to-gray-400 h-screen w-full">
      <Navbar noShadow={true} />
      <div className="flex">
        <div className="p-40 flex flex-col gap-6">
          <h3 className="text-4xl font-bold">Shop Smarter , Not Harder!</h3>
          <p className="text-lg text-gray-600">
            Success isn’t always about greatness. It’s about
            consistency.Consistent <br /> hard work gains success. Greatness
            will come.
          </p>
          <Link to="/products">
          <Button>Explore More ⟶ </Button></Link>
        </div>
        <div>
          <img
            src={Girls}
            alt="girls"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
