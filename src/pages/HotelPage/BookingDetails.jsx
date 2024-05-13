import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import DatePicker from '../../component/Section/DatePicker';
import PriceDetail from '../../component/Section/PriceDetail';
import PaymentOption from '../../component/Section/PaymentOption';

const BookingDetails = () => {
  return (
    <div className='bg-FAFBFC w-full min-h-screen'>

            <div className='px-104'>
                <div className='flex items-center gap-1 pt-12'>
                    <span className='text-FF8682 font-medium text-sm'>Turkey</span>
                    <MdOutlineNavigateNext />
                    <span className='text-FF8682 font-medium text-sm'>Istanbul</span>
                    <MdOutlineNavigateNext />
                    <span>CVK Park Bosphorus Hotel Istanbul</span>
                </div>
                {/* Date picker Section */}
                <div className='flex items-start gap-10 mt-29'>
                    
                    <div className='flex flex-col gap-10'>
                        <DatePicker />
                        <PaymentOption />
                    </div>

                    <div className='RightSidePart'>
                        <PriceDetail />
                    </div>

                    
                </div> 
            </div> 
    </div>
  )
}

export default BookingDetails