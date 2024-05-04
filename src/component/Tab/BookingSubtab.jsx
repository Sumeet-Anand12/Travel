import React, { useState } from 'react'
import flightIcon from '../../assets/Header/flightIcon.svg';
import bedIcon from '../../assets/Header/bedIcon.svg';

const BookingSubtab = ({SetSubTab}) => {

    const[active, SetActive]  =  useState(0)

    const handleSubTabClick=(value)=>{
        // console.log(value)
        SetSubTab(value)
        SetActive(value)
    }
  return (
    <div>
        <div className='grid grid-cols-2 bg-FFFFFF rounded-xl  shadow drop-shadow-sm mt-8 '>
            <div className={`w-full py-30 pl-6  flex items-center justify-between  border-b-2 border-039D9D rounded-t-lg ${active ===0 ? 'active' : 'border-none' }  dark:border-039D9D`} onClick={()=>handleSubTabClick(0)}>
               <div className='flex items-center gap-2 '>
               <img src={flightIcon} alt="" />
               <button className=' text-112211 font-semibold text-base text-Montserrat'>
                   Flight                
               </button>
               </div>
               <div>
                <hr className='w-12 text-D7E2EE border rotate-90 -mr-6 ' />

               </div>
            </div>
            <div className={`py-30 pl-6 border-b-2 border-039D9D rounded-t-lg ${active ===1 ? 'active' : 'border-none' }  dark:border-039D9D`} onClick={()=>handleSubTabClick(1)}>
                <div className='flex items-center gap-2'>
                    <img src={bedIcon} alt="" />
                    <button className=' text-112211 font-semibold text-base text-Montserrat'>
                    Stays                
               </button>
               
                </div>
                
            </div>
            
        </div>


    </div>
  )
}

export default BookingSubtab