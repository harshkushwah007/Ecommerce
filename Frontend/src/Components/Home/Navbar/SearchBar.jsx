import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({variant}) => {
  return (
    <div>
        <div className={`flex items-center gap-4 px-10 py-2 rounded-full shadow-lg  ${
            variant === "dark"
            ? "bg-[#BEBEBE]"
            : "bg-[#E6E6E6]"
        } `}>
          <FaSearch className='cursor-pointer' />
          <input className='focus: outline-none' type="text" placeholder="Search Products"></input>
        </div>
    </div>
  )
}

export default SearchBar