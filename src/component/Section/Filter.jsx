import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { FaRegStar } from "react-icons/fa";

const Filter = () => {
   

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const labelSwitch = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className=''>
        <div className='bg-F2F2F2 pb-4 rounded-md px-18'>
            <div>
                <h1 className='pt-5 font-medium text-base text-181818'>Search by property name</h1>
                <div className='relative flex items-center mt-4'>
                    <input type="text"  placeholder='Enter Value' className='pl-10 w-259 h-11 rounded border'/>
                    <IoIosSearch className='absolute top-4 ml-2 ' />
                </div>
            </div>

        </div>
                <div>
                   <h1  className='my-5 ml-18 font-semibold text-18'>Filter by</h1>
                    <div className=' border border-E0E0E0 rounded'>
                      <div className='bg-F2F2F2 border-b-2'>
                       <h1 className='py-18 pl-18'>Your budget per day</h1>
                      </div>
                       <div className='py-5'>
                       <div className='flex items-center justify-between mr-5'>
                          <div className='flex items-center ml-2'>
                            <Checkbox {...label} defaultChecked className='' />
                            <span>$ 0 - $ 200</span>
                          </div>
                          <div>
                            <span>200</span>
                          </div>

                       </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>$ 0 - $ 200</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>$ 0 - $ 200</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>$ 0 - $ 200</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>$ 0 - $ 200</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='ml-5 mr-2 flex items-center justify-between'>
                                
                                <h1>
                                Set your own budget
                                </h1> 
                                <Switch {...labelSwitch} defaultChecked />
                            </div>
                       </div>
                       
                    </div>
               </div>
                <div className='pt-5'>
                    <div className='border border-E0E0E0 rounded '>
                      <div className='bg-F2F2F2 border-b-2'>
                       <h1 className='py-18 pl-18 font-semibold text-18'>Rating</h1>
                      </div>
                      <div className='pl-18 pr-23 pt-5 mb-6'>
                        <span className='font-normal text-sm text-4F4F4F'>Show only ratings more than</span>
                        <div className='border flex rounded-md mt-2'>
                            <div className='flex gap-1 py-014 px-010 items-center'>
                                <h1 className='font-normal text-base'>1</h1>
                                <FaRegStar className='text-yellow-400'/>
                            </div>
                            <div className='flex gap-1 py-014  px-010 items-center border-l-2'>
                                <h1 className='font-normal text-base'>2</h1>
                                <FaRegStar className='text-yellow-400'/>
                            </div>
                            <div className='flex gap-1 py-014  px-010 items-center border-l-2'>
                                <h1 className='font-normal text-base'>3</h1>
                                <FaRegStar className='text-yellow-400'/>
                            </div>
                            <div className='flex gap-1 py-014  px-010 items-center border-l-2'>
                                <h1 className='font-normal text-base'>4</h1>
                                <FaRegStar className='text-yellow-400'/>
                            </div>
                            <div className='flex gap-1 py-014  px-010 items-center border-l-2'>
                                <h1 className='font-normal text-base'>5</h1>
                                <FaRegStar className='text-yellow-400'/>
                            </div>
                           
                            
                        </div>
                        
                       
                      </div>
                      
                       
                    </div>
               </div>
               <div className='mt-5'>               
                    <div className=' border border-E0E0E0 rounded-md'>
                      <div className='bg-F2F2F2 border-b-2'>
                       <h1 className='py-18 pl-18 font-medium text-base text-181818'>Popular Filters</h1>
                      </div>
                       <div className='py-5'>
                       <div className='flex items-center justify-between mr-5'>
                          <div className='flex items-center ml-2'>
                            <Checkbox {...label} defaultChecked className='' />
                            <span>Free cancellation</span>
                          </div>
                          <div>
                            <span>200</span>
                          </div>

                       </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Spa</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Beach front</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Hot tub/ jacuzzi</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Book without credit card</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>No prepayment</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            
                       </div>
                       
                    </div>
               </div>
       
               <div className='mt-5'>               
                    <div className=' border border-E0E0E0 rounded-md'>
                      <div className='bg-F2F2F2 border-b-2'>
                       <h1 className='py-18 pl-18 font-medium text-base text-181818'>Popular Filters</h1>
                      </div>
                       <div className='py-5'>
                       <div className='flex items-center justify-between mr-5'>
                          <div className='flex items-center ml-2'>
                            <Checkbox {...label} defaultChecked className='' />
                            <span>Fishing</span>
                          </div>
                          <div>
                            <span>200</span>
                          </div>

                       </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Hiking</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Beach</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Cycling</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Sauna</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            <div className='flex items-center justify-between mr-5'>
                                <div className='flex items-center ml-2'>
                                    <Checkbox {...label} defaultChecked className='' />
                                    <span>Night lights</span>
                                </div>
                                <div>
                                    <span>200</span>
                                </div>

                            </div>
                            
                       </div>
                       
                    </div>
               </div>
       

    </div>
  )
}

export default Filter