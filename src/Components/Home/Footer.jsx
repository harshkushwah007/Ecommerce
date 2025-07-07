import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import facebook from '../../assets/FooterImg/facebook.png'
import twitter from '../../assets/FooterImg/twitter.png'
import instagram from '../../assets/FooterImg/instagram.png'
import youtube from '../../assets/FooterImg/youtube.png'

const Footer = () => {
  return (
    <div className="bg-[#2d2b2b] h-94 w-full px-10 text-white font-extralight" >

    <div className="flex py-10">
      <div className="w-1/4 flex flex-col gap-3 mt-20">
        <h3 className="text-[#A51910] font-semibold text-2xl">E-SHOP</h3>
        <p className="font-extralight">
          Specializes in providing high-quality, stylish products for your
          wardrobe
        </p>
      </div>
      <div className="w-1/4 px-10 flex flex-col gap-5">
        <h4 className="font-bold text-xl border-b-4 rounded border-[#A51910]">CONTACT</h4>
        <div className="flex gap-2">
          <CiLocationOn className="text-3xl" />
          <p>No. 164, Changyisu Str, Paung Township, Mon State, Myanmar</p>
        </div>
        <div className="flex gap-2">
          <CiPhone />
          <p>09-450756980, 09-697417662</p>
        </div>
        <div className="flex gap-2">
          <CiMail />
          <p>heinhtetarkarmg@gmail.com</p>
        </div>
      </div>
      <div className="w-1/4 px-10 flex flex-col items-center gap-3">
        <h4 className="font-bold text-xl border-b-4 rounded border-[#A51910]">QUICK LINK</h4>

        <div>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
          <li>Add to Cart</li>
        </div>
      </div>
      <div className="w-1/4 px-10 flex flex-col items-center gap-3">
         <h4 className="font-bold text-xl border-b-4 rounded border-[#A51910]">FOLLOW US</h4>
         <div className="flex mt-5 cursor-pointer">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
         </div>
      </div>
     
    </div>
     <div className="border-t-1 border-white text-center py-10 font-bold">
      <p>
        Copyright ©2023 <span className="text-red-700">E-SHOP</span>. All right reserved
      </p>
      </div>
    </div>
  );
};

export default Footer;
