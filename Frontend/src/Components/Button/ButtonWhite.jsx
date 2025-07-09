import React, { Children } from "react";

const ButtonWhite = ({children}) => {
  return (
    <div>
      <button
        className={`border-2 border-red-700 px-6 py-2 shadow-xl cursor-pointer text-red-700 duration-500 font-semibold rounded-full hover:bg-gray-100`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonWhite;
