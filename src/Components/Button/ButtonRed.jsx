import React from 'react'

const ButtonRed = ({children}) => {
  return (
    <div>
        <button className={`bg-red-800 px-8 py-1 shadow-xl border-2 border-red-700 cursor-pointer text-white duration-500 font-semibold rounded-full hover:bg-red-900`}>{children}</button>
    </div>
  )
}

export default ButtonRed