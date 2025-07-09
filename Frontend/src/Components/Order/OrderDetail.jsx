import React from 'react'
import Order from "../../assets/Order/Order.png";
import Button from "../Button/ButtonRed";
import SearchBar from "../Home/Navbar/SearchBar";

const OrderDetail = () => {
  return (
    <div>
        <div className="flex flex-col p-10 w-full">
          <div className="flex justify-between ">
            <h2 className="text-2xl font-bold ">ORDER</h2>
            <div className="flex items-center gap-8 pt-20">
              <SearchBar />
              <Button children={"SEARCH"} />
            </div>
            <div>
              <button className="text-[#A51910] border-2 font-semibold border-[#A51910] rounded-full px-4 py-1 shadow-xl">
                DELETE ALL
              </button>
            </div>
          </div>
        </div>
          <div className='flex gap-10'>
            <div className="flex ml-20 items-start justify-center px-20 ">
            <table className="px-20 text-left w-2/4 h-40 ">
          <thead className="border-b border-[#A51910]">
            <tr>
              <th className="py-2 pr-10">No.</th>
              <th className="py-2 pr-50">Order ID</th>
              <th className="py-2 pr-30">Status</th>
              <th className="py-2 pr-30">Date</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            <tr className="border-b border-red-800">
              <td className="py-4">1</td>
              <td>1234567890</td>
              <td>
                <span className="rounded-xl text-white px-4 py-2 text-sx bg-[#A51910]">
                    ORDERED
                </span>
              </td>
              <td>4/7/2025 <br /><span className="text-sm text-gray-500">updated 23 hrs ago</span></td>
            </tr>
          </tbody>
          <tbody className="font-semibold">
            <tr className="border-b border-red-800">
              <td>2</td>
              <td>9999999999</td>
              <td>
                <span className="rounded-xl text-white px-4 py-2 text-sx bg-[#A51910]">
                    ORDERED
                </span>
              </td>
              <td>2/7/2025 <br /><span className="text-sm text-gray-500">updated 3 days ago</span></td>
            </tr>
          </tbody>
        </table>
       
        </div>
        <div>
         <img src={Order} alt="#" className="h-80"/>
       </div>
          </div>
    </div>
  )
}

export default OrderDetail