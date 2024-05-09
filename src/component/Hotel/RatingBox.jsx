import React from 'react'
import tripleStar from '../../assets/HotelDetails/tripleStar.svg'

const RatingBox = () => {
  return (
    <div>
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

    </div>
  )
}

export default RatingBox