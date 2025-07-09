import React from 'react'

const QuantityButton = ({ quantity , onDecrement, onIncrement }) => {
  return (
    <div className='flex gap-4 items-center bg-[#F4F4F4] px-4 py-2 rounded-full shadow-md w-fit'>
        <button 
        onClick={onDecrement}
        className='text-xl font-bold text-gray-800 hover:text-red-600'
        >
            -
        </button>
        <span className='text-lg font-semibold'>{quantity}</span>
        <button
        onClick={onIncrement}
        className='text-xl font-bold text-gray-800 hover:text-green-600'
        >
            +
        </button>

    </div>
  )
}

export default QuantityButton