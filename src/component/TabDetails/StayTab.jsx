import React from 'react'
import StayTabLogo from '../../assets/AccountDetails/StayTabLogo.svg'
import DoorIcon from '../../assets/AccountDetails/DoorIcon.svg'
import AirLineSeat from '../../assets/AccountDetails/AirlineSeat.svg'
import DateIcon from '../../assets/AccountDetails/DateIcon.svg'
import ClockIcon from '../../assets/AccountDetails/ClockIcon.svg'
import { MdNavigateNext } from "react-icons/md";

const StayTab = () => {
  return (
    <div>
        <div className='bg-FFFFFF  shadow mt-4 drop-shadow-112211 rounded-2xl'>
           
           <div className='flex items-center justify-between mx-6 '>
                <div className=' flex items-center gap-6 '>
                    <div className='border-039D9D border rounded-lg my-8'>
                    <img src={StayTabLogo} alt="" className='my-05 mx-05' />
                    </div>
                    <div className='flex items-center py-33'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Check-In</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>Thur, Dec 8</h1>
                                </div>
                                <hr className=' w-5 border border-112211 font-semibold text-sm'/>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Check Out</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>Fri, Dec 9</h1>
                                </div>
                            </div>
                            <hr className='w-12 text-D7E2EE border rotate-90' />
                        </div>
                        <div className='flex items-start gap-6 justify-between'>
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2 '>
                                    <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In time</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12:00pm</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In out</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>11:30am</h1>
                                        </div>
                                    </div>       
                            </div>  
                            <div className=''>     
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Room no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>On arrival</h1>

                                        </div>
                                    </div>
                                        
                            </div>

                        </div>
                    </div>
                
                </div>
                <div className='flex items-end gap-4'>
                <button type='' className='bg-039D9D border rounded py-15.5 px-4 text-sm'>Download Ticket</button>
                <div className='border border-039D9D rounded px-4 py-4'>
                    <MdNavigateNext className='w-4 h-4' />
                </div>  
                </div>

           </div>
       </div>
        <div className='bg-FFFFFF  shadow mt-4 drop-shadow-112211 rounded-2xl'>
           
           <div className='flex items-center justify-between mx-6 '>
                <div className=' flex items-center gap-6 '>
                    <div className='border-039D9D border rounded-lg my-8'>
                    <img src={StayTabLogo} alt="" className='my-05 mx-05' />
                    </div>
                    <div className='flex items-center py-33'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Check-In</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>Thur, Dec 8</h1>
                                </div>
                                <hr className=' w-5 border border-112211 font-semibold text-sm'/>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Check Out</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>Fri, Dec 9</h1>
                                </div>
                            </div>
                            <hr className='w-12 text-D7E2EE border rotate-90' />
                        </div>
                        <div className='flex items-start gap-6 justify-between'>
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2 '>
                                    <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In time</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12:00pm</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In out</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>11:30am</h1>
                                        </div>
                                    </div>       
                            </div>  
                            <div className=''>     
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Room no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>On arrival</h1>

                                        </div>
                                    </div>
                                        
                            </div>

                        </div>
                    </div>
                
                </div>
                <div className='flex items-end gap-4'>
                <button type='' className='bg-039D9D border rounded py-15.5 px-4 text-sm'>Download Ticket</button>
                <div className='border border-039D9D rounded px-4 py-4'>
                    <MdNavigateNext className='w-4 h-4' />
                </div>  
                </div>

           </div>
       </div>
        <div className='bg-FFFFFF  shadow mt-4 drop-shadow-112211 rounded-2xl'>
           
           <div className='flex items-center justify-between mx-6 '>
                <div className=' flex items-center gap-6 '>
                    <div className='border-039D9D border rounded-lg my-8'>
                    <img src={StayTabLogo} alt="" className='my-05 mx-05' />
                    </div>
                    <div className='flex items-center py-33'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Check-In</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>Thur, Dec 8</h1>
                                </div>
                                <hr className=' w-5 border border-112211 font-semibold text-sm'/>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Check Out</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>Fri, Dec 9</h1>
                                </div>
                            </div>
                            <hr className='w-12 text-D7E2EE border rotate-90' />
                        </div>
                        <div className='flex items-start gap-6 justify-between'>
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2 '>
                                    <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In time</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12:00pm</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In out</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>11:30am</h1>
                                        </div>
                                    </div>       
                            </div>  
                            <div className=''>     
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Room no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>On arrival</h1>

                                        </div>
                                    </div>
                                        
                            </div>

                        </div>
                    </div>
                
                </div>
                <div className='flex items-end gap-4'>
                <button type='' className='bg-039D9D border rounded py-15.5 px-4 text-sm'>Download Ticket</button>
                <div className='border border-039D9D rounded px-4 py-4'>
                    <MdNavigateNext className='w-4 h-4' />
                </div>  
                </div>

           </div>
       </div>
       

    </div>
  )
}

export default StayTab