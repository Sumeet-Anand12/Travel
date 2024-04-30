import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import calender from '../../assets/Tour/calendar.svg';
import UserIcon from '../../assets/Tour/UserIcon.svg';
import Filter from '../../component/Section/Filter';
import FilterProduct from './FilterProduct';

const Tour = () => {
  return (
    <div className='w-full'>
        <div>
            <div className='bg-039D9D w-full h-200'>

            </div>
            <div className='bg-FFFFFF border-2 mx-205 rounded-lg -mt-8 '>
                <div className='flex items-center gap-3 px-3 py-010  '>
                    <div className='bg-F2F2F2 w-260 gap-2  rounded flex items-center pl-3 pt-11.5 pb-3'>
                    <CiLocationOn className='pl-2 w-6 h-6' />
                    <h1>Melbourne</h1> 
                    </div>
                    <div className='bg-F2F2F2 w-170 pt-11.5 pb-3 gap-2  rounded flex items-center'>
                        <img src={calender} alt="" className='pl-3' />
                    <h1>Mar 18, 2022</h1>
                    </div>
                    <div className='bg-F2F2F2 w-170 pt-11.5 pb-3   rounded gap-2 flex items-center'>
                    <img src={calender} alt="" className='pl-3' />
                        <h1>March 20, 2022</h1>
                    </div>
                    <div className='bg-F2F2F2 w-210 pt-11.5 pb-3 rounded flex items-center gap-2'>
                    <img src={UserIcon} alt="" className='pl-3' />
                    <h1>2 adult, 1 room</h1>
                    </div>
                    <div className='bg-2F80ED  rounded flex items-center w-148 '>
                        <button type='' className='text-FFFFFF py-3 px-50.5 '>Search</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='px-100 my-70'>
           
           <div className='flex items-start gap-30'>
                <div>
                    <Filter />
                </div>
                <div >
                    <FilterProduct />
                </div>

           </div>
        </div>
    </div>
  )
}

export default Tour