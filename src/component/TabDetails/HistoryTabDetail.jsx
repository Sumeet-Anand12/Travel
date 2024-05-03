import React from 'react'
import AirLineLogo from '../../assets/AccountDetails/AirlineLogo.svg'
import DoorIcon from '../../assets/AccountDetails/DoorIcon.svg'
import AirLineSeat from '../../assets/AccountDetails/AirlineSeat.svg'
import DateIcon from '../../assets/AccountDetails/DateIcon.svg'
import ClockIcon from '../../assets/AccountDetails/ClockIcon.svg'
import { MdNavigateNext } from "react-icons/md";

const HistoryTabDetail = () => {
  return (
    <div>
        <div className='bg-FFFFFF  shadow mt-4 drop-shadow-112211 rounded-2xl'>
           
           <div className='flex items-center justify-between mx-6 '>
                <div className=' flex items-center gap-6 '>
                    <div className='border-039D9D border rounded-lg w-20 my-8'>
                    <img src={AirLineLogo} alt="" className='px-2 py-17.76' />
                    </div>
                    <div className='flex items-center py-33'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Newark(EWR)</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>12:00 pm</h1>
                                </div>
                                <hr className=' w-5 border border-112211 font-semibold text-sm'/>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Newark(EWR)</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>6:00 pm</h1>
                                </div>
                            </div>
                            <hr className='w-12 text-D7E2EE border rotate-90' />
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2 '>
                                        <img src={DateIcon} alt="" className=''/>
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Date</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12-11-22</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Flight time</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>Newark(EWR)</h1>
                                        </div>
                                    </div>       
                            </div>
                            
                        
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Gate</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>A12</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={AirLineSeat} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Seat no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>128</h1>
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
                    <div className='border-039D9D border rounded-lg w-20  my-8'>
                    <img src={AirLineLogo} alt="" className='px-2 py-17.76' />
                    </div>
                    <div className='flex items-center py-33'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Newark(EWR)</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>12:00 pm</h1>
                                </div>
                                <hr className=' w-5 border border-112211 font-semibold text-sm'/>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Newark(EWR)</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>6:00 pm</h1>
                                </div>
                            </div>
                            <hr className='w-12 text-D7E2EE border rotate-90' />
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2 '>
                                        <img src={DateIcon} alt="" className=''/>
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Date</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12-11-22</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Flight time</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>Newark(EWR)</h1>
                                        </div>
                                    </div>       
                            </div>
                            
                        
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Gate</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>A12</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={AirLineSeat} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Seat no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>128</h1>
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
                    <div className='border-039D9D border rounded-lg w-20  my-8'>
                    <img src={AirLineLogo} alt="" className='px-2 py-17.76' />
                    </div>
                    <div className='flex items-center py-33'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Newark(EWR)</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>12:00 pm</h1>
                                </div>
                                <hr className=' w-5 border border-112211 font-semibold text-sm'/>
                                <div>
                                    <span className='text-112211 font-normal text-Montserrat text-base opacity-75'>Newark(EWR)</span>
                                    <h1 className='text-112211 font-semibold text-xl leading-6'>6:00 pm</h1>
                                </div>
                            </div>
                            <hr className='w-12 text-D7E2EE border rotate-90' />
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2 '>
                                        <img src={DateIcon} alt="" className=''/>
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Date</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12-11-22</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Flight time</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>Newark(EWR)</h1>
                                        </div>
                                    </div>       
                            </div>
                            
                        
                            <div className='flex flex-col gap-2'>     
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Gate</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>A12</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={AirLineSeat} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Seat no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>128</h1>
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

export default HistoryTabDetail