import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import filterImage from '../../assets/Tour/filterImage.svg';
const FilterProduct = () => {
  return (
    <div>
        <div className='w-full'>
            <h1 className='text-181818 text-2xl font-semibold'>Melbourne : 2,582 search results found</h1>
             <div className='flex items-center gap-110'>
                <div className='border flex  mt-6  border-039D9D  rounded-md'>
                    <div >
                        <h1 className='my-010 mx-18 text-sm text-039D9D font-medium'>Our top picks</h1>
                    </div>
                    <div className='border-l border-039D9D '>
                        <div className=''>
                            <h1 className='my-010 mx-18 text-4F4F4F font-normal text-15'>Hotel and apartments</h1>
                        </div>      
                    </div>
                    <div className='border-l border-039D9D'>
                        <div className='py-010 mx-18'>
                        <h1 className='text-4F4F4F font-normal text-15'>Residence</h1>
                        </div>   
                    </div>
                    <div className='border-l border-039D9D'>
                        <div className=''>
                            <h1 className='text-4F4F4F font-normal text-15 py-010 mx-18'>Resort</h1>
                        </div>
                       
                    </div>
                    <div className='border-l border-039D9D'>
                    <div className=''>
                       <h1 className='text-4F4F4F font-normal text-15 py-010 mx-18'>Shared Space</h1>
                    </div>
                        
                    </div>
                </div>
                <div className='border   border-BDBDBD  rounded-md'>
                      <div className='flex items-center py-2 px-3'>
                         <div className=''>
                            <span>Sort by</span>
                            <h1>Recommended</h1>
                        </div>
                            <div>
                              <RiArrowDropDownLine className='w-10 h-10' />
                            </div>
                
                     </div>
                </div>
            </div>
            <div className='border border-E0E0E0 w-full mt-7 rounded-md'>
               <div className='px-4'>
                    <div className='flex gap-6  py-6'>
                        <img src={filterImage} alt="" />
                        <div>
                            <div className='flex items-center gap-5'>
                                <h1 className='text-1A1A1A font-medium text-xl'>Lakeside Motel Warefront</h1>
                                <div className='bg-EB5757 rounded-lg'>
                                    <h1 className='text-FFFFFF px-2 py-1'>Book now and receive 15% off</h1>

                                </div>
                            </div>
                        </div>
                    </div>

               </div>

            </div>
        </div>

    </div>
  )
}

export default FilterProduct