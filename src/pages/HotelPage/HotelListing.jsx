import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import heroImg1 from '../../assets/HotelDetails/heroImg1.svg'
import heroImg2 from '../../assets/HotelDetails/heroImg2.svg'
import heroImg3 from '../../assets/HotelDetails/heroImg3.svg'
import heroImg4 from '../../assets/HotelDetails/heroImg4.svg'
import heroImg5 from '../../assets/HotelDetails/heroImg5.svg'
import tripleStar from '../../assets/HotelDetails/tripleStar.svg'
const HotelListing = () => {
  return (
    <div className='bg-FAFBFC w-full min-h-screen'>
        <div className='mx-104'>
            <div className='flex items-center gap-1 pt-12'>
                <span className='text-FF8682 font-medium text-sm'>Turkey</span>
                <MdOutlineNavigateNext />
                <span className='text-FF8682 font-medium text-sm'>Istanbul</span>
                <MdOutlineNavigateNext />
                <span>CVK Park Bosphorus Hotel Istanbul</span>
            </div>

            {/* Hero section */}
            <div className='flex items-start justify-between pt-8'>
               <div>
                    <div className='flex items-center gap-1'>
                        <h1 className='font-Poppins text-2xl font-bold text-112211'>CVK Park Bosphorus Hotel Istanbul</h1>
                        
                            <div className='flex items-center'>
                                <FaStar  className='text-FF8682'/>
                                <FaStar className='text-FF8682'/>
                                <FaStar className='text-FF8682' />
                                <FaStar className='text-FF8682'/>
                            </div>
                                <span className='pl-1'>5 Star Hotel</span>
                    </div>
                    <div className='pt-4'>
                        <div className='flex items-center gap-1'>
                            <FaLocationDot />
                            <span>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>

                        </div>
                        <div className='flex items-center gap-1 mt-2'>
                            <div className='border inline-flex items-center justify-center border-039D9D rounded w-10 h-8'>
                            <span className=' text-112211 text-xs font-medium font-Montserrat'>4.2</span>  
                            </div>
                            <p className='text-112211 text-xs'><span className='text-112211 font-bold text-xs px-1'>Very Good</span>371 reviews</p>
                        </div>
                    </div>

               </div>

                <div className='flex flex-col items-end' >
                    <h1 className='text-FF8682 font-Montserrat font-bold text-32'>$240 <span className='text-FF8682 font-Montserrat font-bold text-sm -ml-2'>/night</span></h1>
                       <div className='flex items-center gap-15 pt-4'>
                            <div className='border  border-039D9D rounded px-4 py-2'>
                                <FaRegHeart className='my-1' />  
                            </div>
                            <div className='border  border-039D9D rounded px-4 py-2'>
                                <IoShareSocial className=' my-1' />
                            </div>
                           <button className='bg-039D9D px-4 py-2 rounded'>Book now</button>
                        </div>
                </div>

            </div>
           
           {/* img Section */}
            <div className='flex flex-col items-end'>
                <div className='grid grid-cols-2 gap-1 pt-26'>
                <img src={heroImg1} alt=""  className=''/>
                <div className='grid grid-rows-2 gap-1 '>
                    <div className='grid grid-cols-2 gap-1'>
                        <img src={heroImg2} alt="" />
                        <img src={heroImg3} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                        <img src={heroImg4} alt="" />
                        <img src={heroImg5} alt="" />
                    </div>
                </div>
                </div>
                <div className='-mt-12 -mr-6'>
                    <button className='bg-039D9D px-4 py-2 text-112211 text-sm font-semibold rounded'>View all photos</button>
                </div>
            </div>

             {/* overView Section  */}

              <div className='pt-76'>
                        <hr  className='border-112211 opacity-25 border'/>
                    <div className='pt-16'>
                        <h1 className='text-112211 text-xl font-bold font-Poppins'>Overview</h1>
                        <p className='text-start pt-4'>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.</p>
                    </div>

                   {/* Rating Box section */}
                  
                    <div>
                        <div className='flex items-center gap-4 pt-8'>

                                <div className='bg-039D9D w-166 rounded-xl'>
                                    <div className='flex flex-col pt-4 pb-2 pl-4 gap-8'>
                                        <span className='text-FFFFFF text-32 text-bold'>4.2</span>
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-FFFFFF text-base font-bold'>Very good</span>
                                            <span className='text-FFFFFF text-sm font-medium'>371 reviews</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-039D9D border w-160 rounded-xl'>
                                    <div className='flex flex-col pt-4 pl-4 pb-4 gap-61'>
                                        <img src={tripleStar} alt="" className='w-8 h-8 text-000000' />
                                        <div>
                                            <span className='text-112211 text-base font-medium'>Near park</span>  

                                        </div>
                                    </div>
                                </div>
                                <div className='border-039D9D border w-160 rounded-xl'>
                                    <div className='flex flex-col pt-4 pl-4 pb-4 gap-61'>
                                        <img src={tripleStar} alt="" className='w-8 h-8 text-000000' />
                                       
                                        <div className=''>
                                            <span className='text-112211 text-base font-medium'>Near park</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-039D9D border w-160 rounded-xl'>
                                    <div className='flex flex-col pt-4 pl-4 pb-4 gap-61'>
                                        <img src={tripleStar} alt="" className='w-8 h-8 text-000000' />
                                       
                                        <div className=''>
                                            <span className='text-112211 text-base font-medium'>Near park</span>
                        
                                        </div>
                                    </div>
                                </div>
                                <div className='border-039D9D border w-160 rounded-xl'>
                                    <div className='flex flex-col pt-4 pl-4 pb-4 gap-61'>
                                        <img src={tripleStar} alt="" className='w-8 h-8 text-000000' />
                                       
                                        <div className=''>
                                            <span className='text-112211 text-base font-medium'>Near park</span>
                        
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>

                    {/* Available room section */}

                    <hr  className='border-112211 opacity-25 border mt-16'/>

               </div>


        </div>
    </div>
  )
}

export default HotelListing