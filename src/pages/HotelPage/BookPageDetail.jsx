import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import smallDateIcon from "../../assets/HotelDetails/smallDateIcon.svg";
import barCode from "../../assets/HotelDetails/barCode.svg";
import User from '../../assets/Header/User.svg';
import cvkLogo from '../../assets/HotelDetails/cvkLogo.svg';
import DoorIcon from '../../assets/AccountDetails/DoorIcon.svg'
import ClockIcon from '../../assets/AccountDetails/ClockIcon.svg'
import HotelTermCondition from '../../component/Section/HotelTermCondition';

const BookPageDetail = () => {
  return (
    <div>
        <div className='mx-104'>

                <div className="flex items-center gap-1 pt-12">
                  <span className="text-112211 font-bold text-sm">Turkey</span>
                  <MdOutlineNavigateNext />
                  <span className="text-112211 font-bold text-sm">Istanbul</span>
                  <MdOutlineNavigateNext />
                  <span className='text-sm font-medium opacity-40'>CVK Park Bosphorus Hotel Istanbul</span>
                </div>

                {/* Hero section */}

                <div className="flex items-start justify-between pt-8">
                  <div>
                    <div className="flex items-center gap-1">
                      <h1 className="font-Poppins text-2xl font-bold text-112211">
                        CVK Park Bosphorus Hotel Istanbul
                      </h1>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center gap-1">
                        <FaLocationDot />
                        <span>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <h1 className="text-FF8682 font-Montserrat font-bold text-32">
                      $240{" "}
                      <span className="text-FF8682 font-Montserrat font-bold text-sm -ml-2">
                        /night
                      </span>
                    </h1>
                    <div className="flex items-center gap-15 pt-4">
                      <div className="border  border-039D9D rounded px-4 py-2">
                        <IoShareSocial className=" my-1" />
                      </div>
                      <button className="bg-039D9D px-4 py-2 rounded">Download</button>
                    </div>
                  </div>
                </div>

              {/* Booked card details section */}  
                <div className='card flex pt-10 justify-center'>

                    <div className='bg-EBF6F2 rounded-l-2xl w-246 px-6 py-34.5'>
                          <div className="flex flex-col gap-50">
                              <div className=''>
                                  <h1 className="text-112211 font-Montserrat  font-semibold text-xl">Thursday, Dec 8</h1>
                                  <span className="text-112211 font-Montserrat  font-medium opacity-60 text-sm">Check-In</span>
                              </div>
                              <img src={smallDateIcon} alt="" className='w-6 h-6' />
                              <div>
                                  <h1 className="text-112211 font-Montserrat  font-semibold text-xl">Thursday, Dec 8</h1>
                                  <span className="text-112211 font-Montserrat  font-medium opacity-60 text-sm">Check-Out</span>
                              </div>
                          </div>
                    </div>
                        <div className='bg-FFFFFF border w-610 border-EAEAEA rounded-r-2xl'>
                            <div className='bg-039D9D rounded-tr-2xl'>
                              <div className='w-full'>
                                  <div className='flex items-start justify-between py-6 px-6'>
                                      <div className='flex items-center gap-3'>
                                          <img src={User} alt="" className='w-12 h-12' />
                                          <span className='text-112211 text-xl font-Poppins font-bold '>James Doe</span>

                                      </div>
                                      <h1 className='text-112211 text-sm font-bold text-Poppins text-right'>Superior room - 1 double bed or 2 twin beds</h1>
                                  </div>
                              </div>
                            </div>
                            <div className='pt-6 px-6 flex flex-col gap-9'>
                                <div className='flex items-center gap-8'>     
                                    <div className='flex items-center gap-2 '>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2'/>
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-In time</span>
                                            <h1 className='text-112211 font-medium text-base leading-6'>12:00pm</h1>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={ClockIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Check-Out time</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>11:30pm</h1>
                                        </div>
                                    </div>       
                                    <div className='flex items-center gap-2'>
                                        <img src={DoorIcon} alt="" className='px-7.75 pt-8.25 pb-7.25 rounded bg-EBF6F2' />
                                        <div className='pl-2'>
                                            <span className='text-112211 font-semibold text-Montserrat text-xs opacity-60'>Room no.</span>
                                            <h1 className='text-112211 font-medium  text-base leading-6'>On arival</h1>
                                        </div>
                                    </div>       
                                </div> 
                                <div className='mb-4'>
                                    <div className='flex flex-col items-start'>
                                      <div>
                                        <span className='text-112211 text-32 font-semibold '>EK</span>
                                      </div>
                                      <div>
                                        <span>ABC12345</span>
                                      </div>
                                    </div> 
                                    <div className='flex justify-end -mt-9 '>
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                      <img src={barCode} alt="" />
                                    </div>
                                  
                                </div> 
                            </div>
                      </div>
                  
                    <div className='bg-FFFFFF rounded-2xl py-74 px-107 border border-EAEAEA'>
                          <img src={cvkLogo} alt=""  className='w-161' />
                      </div>
                    
                </div>
                
                <HotelTermCondition />

        </div>
    </div>
  )
}

export default BookPageDetail
