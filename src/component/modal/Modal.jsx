import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import inputVisa from '../../assets/AccountDetails/InputVisa.svg'
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Modal = ({SetCloseModal}) => {
    const [cardNumber, setCardNumber] =useState('4321 4321 4321 4321')
    const [expDate, setExpDate] =useState('02/27')
    const [CVC, setCVC] =useState('123')
    const [nameCard, setNameCard] =useState('John Doe')
    
    const handleCloseModal = () => {
        // Close modal logic here
        SetCloseModal(); // Call the closeModal function passed as prop
      };
    
  return (


    <div className=''>
        <div className='bg-FFFFFF shadow-md w-640 h-753.24 rounded-xl px-16 '>
            <div className='flex justify-between pt-16'>
                <h1 className='font-Poppins font-semibold text-40 text-000000'>Add a new Card</h1>
                <button type='' onClick={handleCloseModal}>
                  <IoClose className='w-6 h-6 text-000000'  />
                </button>
            </div>
           <div className='w-full flex flex-col gap-6 pt-12'>
                <div className='relative'>
                    <label htmlFor="" className='absolute  bg-FFFFFF -top-3 ml-3 px-1'>Card Number</label>
                    <input type="text" placeholder='' className='w-full border-79747E border   h-14 rounded px-4 py-010' value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
                    <img src={inputVisa} alt="" className='absolute inline-flex top-4 w-6  -ml-10' />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='relative'>
                        <label htmlFor="" className='absolute  bg-FFFFFF -top-3 ml-3 px-1'>Exp. Date</label>
                        <input type="text" placeholder='' value={expDate} className='w-full border-79747E border  h-14 rounded px-4 py-010' onChange={(e)=>setExpDate(e.target.value)}  />
                    </div>
                    <div className='relative'>
                        <label htmlFor="" className='absolute  bg-FFFFFF -top-3 ml-3 px-1'>CVC</label>
                        <input type="text" placeholder='' className='w-full border-79747E border   h-14 rounded px-4 py-010' value={CVC} onChange={(e)=>setCVC(e.target.value)} />
                        
                    </div>
                </div>
                <div className='relative'>
                        <label htmlFor="" className='absolute  bg-FFFFFF -top-3 ml-3 px-1'>Name on Card</label>
                        <input type="text" placeholder='' name='' value={nameCard} className='w-full border-79747E border   h-14 rounded px-4 py-010'  onChange={(e)=>setNameCard(e.target.value)} />
                        
                    </div>
                   <div className='relative'>
                        <label htmlFor="" className='absolute  bg-FFFFFF -top-3 ml-3 px-1'>Country or Region</label>
                        <input type="text" placeholder='' name=''  className='w-full border-79747E border   h-14 rounded px-4 py-010' defaultValue={'India'} />     
                    </div>
                    <div className='flex items-center gap-2'>
                        <Checkbox {...label} 
                        defaultChecked 
                        // color="default"
                        // className="text-000000"
                        style={{ color: '#000000' }} 
                        />
                        <h1>Securely save my information for 1-click checkout</h1>
                    </div>
                        <button type='' className='bg-8DD3BB h-12 rounded mt-4 flex items-center justify-center '>
                          <span className='text-sm font-semibold text-112211'>
                             Add Card
                          </span>
                        </button>
                        <div>
                            <p className='font-normal text-xs opacity-75 -mt-2 text-112211 text-center'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
                        </div>
                   
           </div>
       </div>
  </div>
  )
}

export default Modal