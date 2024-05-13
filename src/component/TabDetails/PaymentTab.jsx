import React, { useState } from 'react'
import { IoTrashBin } from "react-icons/io5";
import Visa from '../../assets/AccountDetails/Visa.svg'
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from '../modal/Modal';
const PaymentTab = () => {

  const [openModal, setOpenModal] =useState("")
  
  const closeModal = () => {
    setOpenModal(false);
  };

  return (


    <div>
      <div className=''>
        <h1 className='text-Poppins pt-10 font-bold text-32 text-000000'>Payment methods</h1>
         <div className='drop-shadow-md mt-4 ring-offset-112211 rounded-3xl bg-FFFFFF flex items-center gap-6 p-6'>
           <div className='bg-039D9D w-378  rounded-2xl'>
            <div className='flex flex-col  gap-57 px-4 py-4'>
                <div className='flex items-start justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-112211 text-2xl font-semibold font-Montserrat'>**** **** ****</span>
                    <span className='text-112211 text-32 font-semibold font-Montserrat'>4321</span>
                  </div>
                  <div>
                    <button><IoTrashBin className='w-6 h-6' /></button>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex flex-col items-start'>
                      <span className='text-112211 text-xs font-medium font-Montserrat'>Valid Thru</span>
                      <span className='text-112211 text-xl font-semibold font-Montserrat'>02/27</span>
                  </div>
                  <img src={Visa} alt="" />
                </div>
            </div>

           </div>
           <div className='border-039D9D border-2 border-dashed w-378 h-212 flex items-center rounded-2xl'>
              
              <div className='flex flex-col items-center mx-141 gap-2'>
                <button type='' onClick={()=>setOpenModal(!openModal)}>
                   <IoIosAddCircleOutline className='w-12 h-12 text-039D9D '/> 
               </button>
               <span className='text-112211 text-xs font-medium font-Montserrat'>Add a new Card</span>
              </div>
                
           
           </div>
        </div>
      </div>
      <div className='absolute z-50 top-3/4 pl-60'>
        {
           openModal ?<Modal SetCloseModal={closeModal}  />  :''
        }

      </div>

    </div>
  )
}

export default PaymentTab