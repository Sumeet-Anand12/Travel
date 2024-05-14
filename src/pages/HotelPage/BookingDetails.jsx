import React, { useRef, useState } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import DatePicker from '../../component/Section/DatePicker';
import PriceDetail from '../../component/Section/PriceDetail';
import PaymentOption from '../../component/Section/PaymentOption';
import LoginWith from '../../component/Section/LoginWith';
import mailIcon from "../../assets/HotelDetails/mailIcon.svg";

const BookingDetails = () => {

const radio1Ref = useRef();
  const radio2Ref = useRef();
  const checkRef = useRef();
  
    const [radioSelect, setRadioSelect] = useState('Pay in full');
  return (
    <div className=' w-full min-h-screen'>

            <div className='px-104'>
                <div className='flex items-center gap-1 pt-12'>
                    <span className='text-FF8682 font-medium text-sm'>Turkey</span>
                    <MdOutlineNavigateNext />
                    <span className='text-FF8682 font-medium text-sm'>Istanbul</span>
                    <MdOutlineNavigateNext />
                    <span>CVK Park Bosphorus Hotel Istanbul</span>
                </div>
               
                <div className='flex items-start gap-10 mt-29'>
                    
                     {/* Date picker Section */}

                    <div className='flex flex-col gap-10'>
                        <DatePicker />
                        <PaymentOption radioSelect={radioSelect} setRadioSelect={setRadioSelect} radio1Ref={radio1Ref} radio2Ref={radio2Ref} />
                            <div>
                               <div className="bg-FFFFFF border rounded-xl">
                                    <div className='mx-6 my-6'>
                                        <div className='flex flex-col gap-4'>
                                            <h1 className='text-112211 font-Poppins font-bold text-xl'>Login or Sign up to book</h1>
                                            <input type="text" placeholder='Phone Number' className='py-18 border border-79747E rounded pl-4 w-full' />
                                            <p className='text-112211 text-sm font-normal font-Montserrat'>We’ll call or text you to confirm your number. Standard message and data rates apply. <span className='text-112211 text-sm font-medium font-Montserrat'>Privacy Policy</span> </p>
                                            <LoginWith title="Continue"  />
                                           
                                           <button type='' className='border border-039D9D rounded flex items-center justify-center gap-2 py-18'>
                                            <img src={mailIcon} alt="" />
                                            <span className='text-112211 font-medium text-base font-Montserrat'>Continue with email</span>
                                           </button>
                                        </div>
                                    </div>   
                                </div>
                            </div>
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