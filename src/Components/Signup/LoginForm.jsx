import React from 'react'
import ButtonRed from '../Button/ButtonRed'

const LoginForm = () => {
  return (
    <div className='text-[#423F3F] py-10 text-sm'>
        <div className='border-b-2 py-2 mb-15 border-[#423F3F]'>
            <input type="number" placeholder='Phone Number' />
        </div>
        <div className='border-b-2 mb-15 py-2 border-[#423F3F]'>
            <input type="Password" placeholder='Password' />
        </div>
        <div className='flex items-center justify-center py-10 opacity-80'>
          <ButtonRed children={"LOG IN"} />
        </div>
    </div>
  )
}

export default LoginForm