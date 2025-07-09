import React, { useContext } from "react";
import { Link } from "react-router-dom";

const FeaturedProductCard = ({
  id,
  img,
  title,
  description,
  price,
  size = "medium",
}) => {

  let cardWidth = "w-62";
  let cardHight = "h-90";

  if (size === "small") {
    cardWidth = "w-60";
    cardHight = "h-90";
  } else if (size === "large") {
    cardWidth = "w-86";
    cardHight = "h-110";
  }

  return (
    <Link to={`/product/${id}`} className="block">
      <div
        className={`shadow-lg shadow-gray-500 ${cardWidth} ${cardHight} rounded-2xl`}
      >
        <div>
          <img src={img} alt="/" />
        </div>
        <div className="px-10">
          <h3 className="text-lg pt-2 font-semibold">{title}</h3>
          <p className="text-xs py-2 text-gray-900">{description}</p>
        </div>
        <div className="pl-10 py-3 flex items-center">
          <span className="text-red-900 font-bold">{price}</span>{" "}
          <span className="font-bold ml-2">MMK</span>
          <div className="rounded-full text-center ml-10 text-3xl bg-red-900 cursor-pointer text-white h-10 w-10">
            +
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProductCard;
