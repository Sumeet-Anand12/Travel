import React from 'react'
import edit from '../../assets/AccountDetails/Edit.svg'
import AddIcon from '../../assets/AccountDetails/AddIcon.svg'


const Account = () => {
  return (
     <div>
       <h1 className='text-000000 text-32 font-bold font-Poppins pt-10'>Account</h1>
       <div className='w-full  bg-FFFFFF shadow rounded-2xl drop-shadow-lg mt-4'>

        <div className='flex items-center justify-between px-6 pt-6'>
            <div>
                <span className='text-112211 font-normal font-Montserrat text-base opacity-75'>Name</span>
                <h1 className='font-semibold text-112211 text-xl'>John Doe</h1>
            </div>
            
                <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={edit} alt="" className='pl-8 py-15.5' /><span className='py-15.5 pr-8'>Change</span>
                </button>
            
        </div>
        <div className='flex items-center justify-between px-6 pt-6'>
            <div>
                <span className='text-112211 font-normal font-Montserrat text-base opacity-75'>Email</span>
                <h1 className='font-semibold text-112211 text-xl'>john.doe@gmail.com</h1>
            </div>
            <div className='flex items-center gap-2'>
               <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={AddIcon} alt="" className='pl-17.5 my-17.5' /><span className='py-15.5 pr-4'>Add another email</span>
                </button>
                <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={edit} alt="" className='pl-8 py-15.5' /><span className='py-15.5 pr-8'>Change</span>
                </button>
            </div>
            
        </div>
        <div className='flex items-center justify-between px-6 pt-6'>
            <div>
                <span className='text-112211 font-normal font-Montserrat text-base opacity-75'>Password</span>
                <h1 className='font-semibold text-112211 text-xl'>************</h1>
            </div>
            
                <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={edit} alt="" className='pl-8 py-15.5' /><span className='py-15.5 pr-8'>Change</span>
                </button>
            
        </div>
        <div className='flex items-center justify-between px-6 pt-6'>
            <div>
                <span className='text-112211 font-normal font-Montserrat text-base opacity-75'>Phone number</span>
                <h1 className='font-semibold text-112211 text-xl'>+1 000-000-0000</h1>
            </div>
            
                <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={edit} alt="" className='pl-8 py-15.5' /><span className='py-15.5 pr-8'>Change</span>
                </button>
            
        </div>
        <div className='flex items-center justify-between px-6 pt-6'>
            <div>
                <span className='text-112211 font-normal font-Montserrat text-base opacity-75'>Address</span>
                <h1 className='font-semibold text-112211 text-xl'>St 32 main downtown, Los Angeles, California, USA</h1>
            </div>
            
                <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={edit} alt="" className='pl-8 py-15.5' /><span className='py-15.5 pr-8'>Change</span>
                </button>
            
        </div>
        <div className='flex items-center justify-between px-6 py-6'>
            <div>
                <span className='text-112211 font-normal font-Montserrat text-base opacity-75'>Date of birth</span>
                <h1 className='font-semibold text-112211 text-xl'>01-01-1992</h1>
            </div>
            
                <button className='flex items-center gap-1 border border-8DD3BB rounded'>
                    <img src={edit} alt="" className='pl-8 py-15.5' /><span className='py-15.5 pr-8'>Change</span>
                </button>
            
        </div>
        

       </div>



    </div>
  )
}

export default Account