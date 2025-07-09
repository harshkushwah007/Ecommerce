import React from 'react'
import Button from '../../Button/ButtonRed'

const UserForm = ({ goToPayment }) => {
  return (
    <div>
        <div className="flex flex-col gap-10 py-10">
              <div className="flex justify-items-start gap-20 font-semibold text-[#2D2B2B]">
                Name{" "}
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="bg-[#EFEFEF] p-2 rounded-full px-10 shadow-lg shadow-gray-300"
                />
              </div>
              <div className="flex justify-items-start gap-12 font-semibold text-[#2D2B2B]">
                Phone No.{" "}
                <input
                  type="number"
                  required
                  placeholder="Phone Number"
                  className="bg-[#EFEFEF] p-2 rounded-full px-10 shadow-lg shadow-gray-300"
                />
              </div>
              <div className="flex justify-items-start gap-16 font-semibold text-[#2D2B2B]">
                Address{" "}
                <textarea
                  rows={3}
                  cols={20}
                  required
                  placeholder="Address"
                  className="bg-[#EFEFEF] p-2 rounded-4xl px-10 shadow-lg shadow-gray-300"
                />
              </div>
            <div className="ml-32" onClick={goToPayment}>
                <Button children={"Continue To Payment"} />
            </div>
            </div>
    </div>
  )
}

export default UserForm