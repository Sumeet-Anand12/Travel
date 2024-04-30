import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import filterImage from '../../assets/Tour/filterImage.svg';
import { FaStar } from "react-icons/fa";
const FilterProduct = () => {
  return (
    <div>
        <div className='w-full '>
             <h1 className='text-181818 text-2xl font-semibold'>Melbourne : 2,582 search results found</h1>
                <div className='flex items-center justify-between'>
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
                    <div className='border  border-BDBDBD  rounded-5'>
                        <div className='flex items-center py-2 px-3'>
                            <div className=''>
                                <span>Sort by</span>
                                <h1>Recommended</h1>
                            </div>
                                <div>
                                <RiArrowDropDownLine className='w-8 h-8' />
                                </div>
                        </div>
                    </div>
                </div>
                   <div className='flex flex-col items-center gap-10'> 
                        <div> 
                            <div className='border border-E0E0E0  w-full  mt-7 rounded-5'>
                            <div className='flex items-start  gap-6'>        
                                        <img src={filterImage} alt="" className='w-285 pl-5 py-5' />   
                                    <div className='w-562 pr-6 py-6'>
                                        <div className='flex items-start justify-between'>
                                            <h1 className='text-1A1A1A font-medium text-xl'>Lakeside Motel Warefront</h1>
                                            <div className='bg-EB5757 rounded-lg'>
                                                <h1 className='text-FFFFFF text-13 px-2 py-1'>Book now and receive 15% off</h1>
                                            </div>
                                        </div>
                                        <div className='flex items-center text-yellow-400 gap-1'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <div>
                                                <span className='text-sm text-4F4F4F font-normal pl-2'>{4.5 + " " + "(1200 Reviews)"}</span>
                                                </div>
                                        </div>
                                        <div className='flex items-center justify-between pt-17 '>
                                                    <div className='w-2/3'>
                                                        <p className='text-4F4F4F text-sm font-medium'>Live a little and celbrate with champagne</p>
                                                        <p className='pt-1'>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                        <span className='text-FFFFFF text-13 px-2 py-1 bg-219653 rounded-md w-14   inline-block'>5% off</span>
                                                        <span>1 room 2 days</span>
                                                        <div className='flex justify-end gap-2'>
                                                        <span className='text-EB5757 underline-offset-2 line-through '>$150</span>
                                                           <h1>$240</h1>
                                                        </div>
                                                </div>             
                                            </div>
                                            <div className='flex items-start justify-between'>
                                                <button className='bg-039D9D px-18 py-010 rounded-md mt-18'>See availability</button>
                                                <h1>Includes taxes and fees</h1>

                                            </div>

                                    </div>
                            </div>
                            
                            

                            </div>
                            <div className='border border-E0E0E0  w-full  mt-7 rounded-5'>
                            <div className='flex items-start  gap-6'>        
                                        <img src={filterImage} alt="" className='w-285 pl-5 py-5' />   
                                    <div className='w-562 pr-6 py-6'>
                                        <div className='flex items-start justify-between'>
                                            <h1 className='text-1A1A1A font-medium text-xl'>Julia Dens Resort</h1>
                                            {/* <div className='bg-EB5757 rounded-lg'>
                                                <h1 className='text-FFFFFF text-13 px-2 py-1'>Book now and receive 15% off</h1>
                                            </div> */}
                                        </div>
                                        <div className='flex items-center text-yellow-400 gap-1'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <div>
                                                <span className='text-sm text-4F4F4F font-normal pl-2'>{4.5 + " " + "(1200 Reviews)"}</span>
                                                </div>
                                        </div>
                                        <div className='flex items-center justify-between pt-17 '>
                                                    <div className='w-2/3'>
                                                        <p className='text-4F4F4F text-sm font-medium'>Live a little and celbrate with champagne</p>
                                                        <p className='pt-1'>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                        {/* <span className='text-FFFFFF text-13 px-2 py-1 bg-219653 rounded-md w-14   inline-block'>5% off
                                                        </span> */}
                                                        
                                                        <span>1 room 2 days</span>
                                                        <div className='flex justify-end gap-2'>
                                                        <span className=''>$150</span>
                                                           <h1>$240</h1>
                                                        </div>
                                                </div>             
                                            </div>
                                            <div className='flex items-start justify-between'>
                                                <button className='bg-039D9D px-18 py-010 rounded-md mt-18'>See availability</button>
                                                <h1>Includes taxes and fees</h1>

                                            </div>

                                    </div>
                            </div>
                            
                            

                            </div>
                            <div className='border border-E0E0E0  w-full  mt-7 rounded-5'>
                            <div className='flex items-start  gap-6'>        
                                        <img src={filterImage} alt="" className='w-285 pl-5 py-5' />   
                                    <div className='w-562 pr-6 py-6'>
                                        <div className='flex items-start justify-between'>
                                            <h1 className='text-1A1A1A font-medium text-xl'>Aghnim Scepter Hotel</h1>
                                            <div className='bg-F2994A rounded-lg'>
                                                <h1 className='text-FFFFFF text-13 px-2 py-1'>Receive 30% discount on a restaurant</h1>
                                            </div>
                                        </div>
                                        <div className='flex items-center text-yellow-400 gap-1'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <div>
                                                <span className='text-sm text-4F4F4F font-normal pl-2'>{4.5 + " " + "(1200 Reviews)"}</span>
                                                </div>
                                        </div>
                                        <div className='flex items-center justify-between pt-17 '>
                                                    <div className='w-2/3'>
                                                        <p className='text-4F4F4F text-sm font-medium'>Live a little and celbrate with champagne</p>
                                                        <p className='pt-1'>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                        <span className='text-FFFFFF text-13 px-2 py-1 bg-219653 rounded-md w-14   inline-block'>5% off</span>
                                                        <span>1 room 2 days</span>
                                                        <h1><span>$150</span>$130</h1>
                                                </div>             
                                            </div>
                                            <div className='flex items-start justify-between'>
                                                <button className='bg-039D9D px-18 py-010 rounded-md mt-18'>See availability</button>
                                                <h1>Includes taxes and fees</h1>

                                            </div>

                                    </div>
                            </div>
                           </div>
                          <div className='border border-E0E0E0  w-full  mt-7 rounded-5'>
                              <div className='flex items-start  gap-6'>        
                                        <img src={filterImage} alt="" className='w-285 pl-5 py-5' />   
                                    <div className='w-562 pr-6 py-6'>
                                        <div className='flex items-start justify-between'>
                                            <h1 className='text-1A1A1A font-medium text-xl'>Marineford Hotel</h1>
                                            {/* <div className='bg-EB5757 rounded-lg'>
                                                <h1 className='text-FFFFFF text-13 px-2 py-1'>Book now and receive 15% off</h1>
                                            </div> */}
                                        </div>
                                        <div className='flex items-center text-yellow-400 gap-1'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <div>
                                                <span className='text-sm text-4F4F4F font-normal pl-2'>{4.5 + " " + "(1200 Reviews)"}</span>
                                                </div>
                                        </div>
                                        <div className='flex items-center justify-between pt-17 '>
                                                    <div className='w-2/3'>
                                                        <p className='text-4F4F4F text-sm font-medium'>Live a little and celbrate with champagne</p>
                                                        <p className='pt-1'>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                        {/* <span className='text-FFFFFF text-13 px-2 py-1 bg-219653 rounded-md w-14   inline-block'>5% off</span> */}
                                                        <span>1 room 2 days</span>
                                                        <div className='flex justify-end gap-2'>
                                                        {/* <span className='text-EB5757 underline-offset-2 line-through '>$150</span> */}
                                                           <h1>$240</h1>
                                                        </div>
                                                </div>             
                                            </div>
                                            <div className='flex items-start justify-between'>
                                                <button className='bg-039D9D px-18 py-010 rounded-md mt-18'>See availability</button>
                                                <h1>Includes taxes and fees</h1>

                                            </div>
                                    </div>
                            </div>
                            </div>
                            <div className='border border-E0E0E0  w-full  mt-7 rounded-5'>
                            <div className='flex items-start  gap-6'>        
                                        <img src={filterImage} alt="" className='w-285 pl-5 py-5' />   
                                    <div className='w-562 pr-6 py-6'>
                                            <div className='flex items-start justify-between'>
                                                <h1 className='text-1A1A1A font-medium text-xl'>Shanghai Open House</h1>
                                                {/* <div className='bg-EB5757 rounded-lg'>
                                                    <h1 className='text-FFFFFF text-13 px-2 py-1'>Book now and receive 15% off</h1>
                                                </div> */}
                                            </div>
                                            <div className='flex items-center text-yellow-400 gap-1'>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <div>
                                                    <span className='text-sm text-4F4F4F font-normal pl-2'>{4.5 + " " + "(1200 Reviews)"}</span>
                                                    </div>
                                            </div>
                                              <div className='flex items-center justify-between pt-17 '>
                                                    <div className='w-2/3'>
                                                        <p className='text-4F4F4F text-sm font-medium'>Live a little and celbrate with champagne</p>
                                                        <p className='pt-1'>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>      
                                                    </div>
                                                    <div className='flex flex-col gap-1'>
                                                            {/* <span className='text-FFFFFF text-13 px-2 py-1 bg-219653 rounded-md w-14   inline-block'>5% off</span> */}
                                                            <span>1 room 2 days</span>
                                                        <div className='flex justify-end gap-2'>
                                                            {/* <span className='text-EB5757 underline-offset-2 line-through '>$150</span> */}
                                                           <h1>$240</h1>
                                                        </div>
                                                    </div>             
                                               </div>
                                            <div className='flex items-start justify-between'>
                                                <button className='bg-039D9D px-18 py-010 rounded-md mt-18'>See availability</button>
                                                <h1>Includes taxes and fees</h1>

                                            </div>
                                    </div>
                               </div> 
                            </div>
                            <div className='border border-E0E0E0  w-full  mt-7 rounded-5'>
                            <div className='flex items-start  gap-6'>        
                                        <img src={filterImage} alt="" className='w-285 pl-5 py-5' />   
                                    <div className='w-562 pr-6 py-6'>
                                        <div className='flex items-start justify-between'>
                                            <h1 className='text-1A1A1A font-medium text-xl'>Lakeside Motel Warefront</h1>
                                            <div className='bg-EB5757 rounded-lg'>
                                                <h1 className='text-FFFFFF text-13 px-2 py-1'>Book now and receive 15% off</h1>
                                            </div>
                                        </div>
                                        <div className='flex items-center text-yellow-400 gap-1'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <div>
                                                <span className='text-sm text-4F4F4F font-normal pl-2'>{4.5 + " " + "(1200 Reviews)"}</span>
                                                </div>
                                        </div>
                                        <div className='flex items-center justify-between pt-17 '>
                                                    <div className='w-2/3'>
                                                        <p className='text-4F4F4F text-sm font-medium'>Live a little and celbrate with champagne</p>
                                                        <p className='pt-1'>Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                                                    
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                        <span className='text-FFFFFF text-13 px-2 py-1 bg-219653 rounded-md w-14   inline-block'>5% off</span>
                                                        <span>1 room 2 days</span>
                                                        <div className='flex justify-end gap-2'>
                                                            <span className='text-EB5757 underline-offset-2 line-through '>$150</span>
                                                           <h1>$240</h1>
                                                        </div>
                                                </div>             
                                            </div>
                                            <div className='flex items-start justify-between'>
                                                <button className='bg-039D9D px-18 py-010 rounded-md mt-18'>See availability</button>
                                                <h1>Includes taxes and fees</h1>

                                            </div>

                                    </div>
                            </div>
                            
                            

                            </div>
                        </div>
                        <button className='px-18 py-010 bg-EAF2FD border rounded-md'>
                            Load more results  
                        </button>
                 </div>     
        </div>
    </div>
  )
}

export default FilterProduct