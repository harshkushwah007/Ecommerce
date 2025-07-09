import React from "react";
import ButtonRed from "../Button/ButtonRed";

const SignUpForm = () => {
  return (
      <div className="text-[#423F3F] py-10 text-sm">
        <div className="border-b-2 mb-10 border-[#423F3F]">
          <input type="number" className="py-2 focus:outline-none" placeholder="Phone Number" />
        </div>
        <div className="border-b-2 mb-10 border-[#423F3F]">
          <input type="Password" className="py-2 focus:outline-none" placeholder="Password" />
        </div>
        <div className="border-b-2 border-[#423F3F]">
          <input type="password" className="py-2 focus:outline-none" placeholder="Confirm Password" />
        </div>
        <div className="flex items-center justify-center py-10 opacity-80">
          <ButtonRed children={"SIGN UP"} />
        </div>
      </div>
  );
};

export default SignUpForm;
