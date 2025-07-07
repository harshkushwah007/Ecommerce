import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import signUpBg from "../../assets/LoginBg/LoginBg.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Footer from "../Home/Footer";

const SignupSection = () => {
  return (
    <div>
      <div
        className="h-screen bg-center"
        style={{ backgroundImage: `url(${signUpBg})` }}
      >
        <Navbar noShadow={true} searchVariant="dark" />
        <div className="flex items-center justify-center">
          <div className="flex flex-col p-10 font-bold text-lg text-gray-600 rounded-4xl shadow-2xl backdrop-blur-lg bg-white/20 h-100 w-100">
            <div className="flex gap-15">
              <h2>LOG IN</h2>
              <h2>SIGN UP</h2>
            </div>
            <div>
              <SignUpForm />
              {/* <LoginForm /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupSection;
