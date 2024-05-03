import React from 'react'
import flightIcon from '../../assets/Header/flightIcon.svg';
import bedIcon from '../../assets/Header/bedIcon.svg';

const BookingSubtab = () => {
  return (
    <div>
        <div className='grid grid-cols-2 items-center bg-FFFFFF rounded-xl  shadow drop-shadow-sm mt-8 '>
            <div className='py-30 pl-6 flex items-center justify-between '>
               <div className='flex items-center gap-2'>
               <img src={flightIcon} alt="" />
               <h1 className='text-112211 font-semibold text-base text-Montserrat'>Flight</h1>                
               </div>
                <hr className='w-12 text-D7E2EE border rotate-90' />
            </div>
            <div className='py-30 pl-6 flex items-center justify-between '>
                <div className='flex items-center gap-2'>
                    <img src={bedIcon} alt="" />
                    <h1 className='text-112211 font-semibold text-base text-Montserrat'>
                          Stays
                    </h1>                
                </div>
                
            </div>
            


        </div>


    </div>
  )
}

export default BookingSubtab