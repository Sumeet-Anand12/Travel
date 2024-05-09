import React from 'react'
import User from '../../assets/Header/User.svg';
import flag from '../../assets/HotelDetails/flag.svg'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Review = () => {
  return (
    <div>
         <div className='pt-16'>
            <div>
              <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-112211 text-xl font-bold font-Poppins'>Review</h1>
                       
                    </div> 
                    <button className='bg-039D9D px-4 py-2 rounded'>Give your review</button>          
              </div>

                <div className='flex items-center gap-4'>
                    <div className='inline-flex items-center justify-cente'>
                        <span className=' text-112211 text-50 font-bold font-Montserrat'>4.2</span>  
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <span className='text-112211 font-bold text-xs px-1'>Very Good</span>
                        <p className='text-112211 text-xs'>371 reviews</p>
                    </div>
                </div>
            </div>
                <hr  className='bg-112211 h-px opacity-25 border-0 mt-6'/>
                <div>
                    <div className='flex items-start gap-4 py-6 '>
                        <img src={User} alt="" />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-112211 font-medium text-sm font-Montserrat'>5.0 Amazing</h1>
                                <hr className='border-112211 w-4 auto rotate-90' />
                                <span className='text-112211 text-sm font-normal'>Omar Siphron</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={flag} alt="" />
                    </div>
                    <hr  className='bg-112211 h-px opacity-25 border-0'/>
                    <div className='flex items-start gap-4 py-6 '>
                        <img src={User} alt="" />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-112211 font-medium text-sm font-Montserrat'>5.0 Amazing</h1>
                                <hr className='border-112211 w-4 auto rotate-90' />
                                <span className='text-112211 text-sm font-normal'>Omar Siphron</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={flag} alt="" />
                    </div>
                    <hr  className='bg-112211 h-px opacity-25 border-0'/>
                    <div className='flex items-start gap-4 py-6 '>
                        <img src={User} alt="" />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-112211 font-medium text-sm font-Montserrat'>5.0 Amazing</h1>
                                <hr className='border-112211 w-4 auto rotate-90' />
                                <span className='text-112211 text-sm font-normal'>Omar Siphron</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={flag} alt="" />
                    </div>
                    <hr  className='bg-112211 h-px opacity-25 border-0'/>
                    <div className='flex items-start gap-4 py-6 '>
                        <img src={User} alt="" />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <h1 className='text-112211 font-medium text-sm font-Montserrat'>5.0 Amazing</h1>
                                <hr className='border-112211 w-4 auto rotate-90' />
                                <span className='text-112211 text-sm font-normal'>Omar Siphron</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <img src={flag} alt="" />
                    </div>
                    <hr  className='bg-112211 h-px opacity-25 border-0'/>
                </div>

                  <div className='flex items-center justify-center gap-6 pt-6'>
                    <GrFormPrevious className='w-6 h-auto' />
                    <span>1 of 40</span>
                    <GrFormNext className='w-6 h-auto' />
                  </div>

        </div>
    
    </div>
  )
}

export default Review