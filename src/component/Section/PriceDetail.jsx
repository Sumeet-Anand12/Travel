import React from 'react'
import heroImg1 from "../../assets/HotelDetails/heroImg1.svg";

const PriceDetail = () => {
  return (
    <div>
         <div className='bg-FFFFFF rounded-xl w-389 '>

            <div className='px-6 py-6'>
                <div className='flex items-center  gap-6'>
                    <img src={heroImg1} alt="" className='w-121 h-120 rounded-xl' />
                    <div>
                        <span>CVK Park Bosphorus...</span>
                        <h1 className='text-112211 text-xl font-medium font-Montserrat
'>Superior room - 1 double bed or 2 twin beds</h1>
                        <div className="flex items-center gap-1 mt-2">
                            <div className="border inline-flex items-center justify-center border-039D9D rounded w-10 h-8">
                            <span className=" text-112211 text-xs font-medium font-Montserrat">
                                4.2
                            </span>
                            </div>
                            <p className="text-112211 text-xs">
                            <span className="text-112211 font-bold text-xs px-1">
                                Very Good
                            </span>
                            371 reviews
                            </p>
                        </div>
                    </div>
                </div>
                <hr  className='border-112211 border mt-4   opacity-25'/>
                 <div className='py-4'>
                    <h1>Your booking is protected by <span className='text-112211 text-base font-Montserrat font-bold'>golobe</span></h1>
                    <hr  className='border-112211 border mt-4   opacity-25'/>
                    <div className='pt-4'>
                            <span className='text-112211 text-base font-Montserrat font-bold '>Price Details</span>
                            <div className='flex flex-col gap-4 pt-4'>
                                <div className='flex items-center justify-between'>
                                    <span>Base Fare </span>
                                    <span className='text-112211 text-base font-Montserrat font-medium'>$240</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span>Discount </span>
                                    <span className='text-112211 text-base font-Montserrat font-medium'>$0</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span>Taxes </span>
                                    <span className='text-112211 text-base font-Montserrat font-medium'>$20</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span>Service Fee </span>
                                    <span className='text-112211 text-base font-Montserrat font-medium'>$5</span>
                                </div>          
                                <hr  className='border-112211 border mt-4   opacity-25'/>            
                                <div className='flex items-center justify-between'>
                                    <span>Total </span>
                                    <span className='text-112211 text-base font-Montserrat font-medium'>$265</span>
                                </div>                      
                            </div>

                    </div>
                   
                 </div>
            </div>

         </div>

    </div>
  )
}

export default PriceDetail