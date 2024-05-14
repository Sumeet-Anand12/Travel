import React from 'react'
import facebookIcon from "../../assets/HotelDetails/facebookIcon.svg";
import googleIcon from "../../assets/HotelDetails/googleIcon.svg";
import appleIcon from "../../assets/HotelDetails/appleIcon.svg";
const LoginWith = ({title}) => {
  return (
    <div>
        <div>
            <button type='' className='bg-039D9D py-3.5 rounded text-112211 font-medium text-base font-Montserrat w-full'>{title}</button>
            <div className='flex items-center mt-4 '>

                    <hr className='w-2/3 border opacity-25' />
                    <span className='px-6 text-112211 text-base font-medium'> Or</span>
                    <hr className=' w-2/3 border opacity-25' />                 
            </div>
            <div className='grid grid-cols-3 gap-3 pt-6'>
               
                <button className='border border-039D9D rounded py-18 flex justify-center'>
                    <img src={facebookIcon} alt="" />
                </button>    
                <button className='border border-039D9D rounded py-18 flex justify-center'>
                    <img src={googleIcon} alt="" />
                </button>
                <button className='border border-039D9D rounded py-18 flex justify-center'>
                    <img src={appleIcon} alt="" />
                </button>
               

            </div>
        </div>
    </div>
  )
}

export default LoginWith