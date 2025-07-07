import React from 'react'
import UserForm from '../Cart/Form/UserForm'
import ButtonRed from '../Button/ButtonRed'
import ButtonWhite from '../Button/ButtonWhite'
import Profile from '../../assets/Profile/Profile.png'

const ProfileSection = () => {
  return (
    <div className='p-10'>
        <h2 className='text-2xl font-bold'>PROFILE</h2>
        <div className='flex gap-50'>
            <div className="flex flex-col gap-10 pl-30 pt-10">
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
              <div className="flex justify-items-start gap-21 font-semibold text-[#2D2B2B]">
                Email
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="bg-[#EFEFEF] p-2 rounded-full px-10 shadow-lg shadow-gray-300"
                />
              </div>
              <div className="flex justify-items-start gap-16 font-semibold text-[#2D2B2B]">
                Address{" "}
                <textarea
                  rows={3}
                  cols={22}
                  required
                  placeholder="Address"
                  className="bg-[#EFEFEF] p-2 rounded-4xl px-10 shadow-lg shadow-gray-300"
                />
              </div>
            <div className="flex justify-center items-center gap-5 flex-col">
                <ButtonRed children={"Save Profile"} />
                <ButtonWhite children={"Log Out"} />
            </div>
            </div>
    <img src={Profile} alt="#" className='h-100' />
        </div>
    </div>
  )
}

export default ProfileSection