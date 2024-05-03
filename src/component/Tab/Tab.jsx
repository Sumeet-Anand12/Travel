import React from 'react'

const Tab = () => {
  return (
    <div>
        <div className='grid grid-cols-3 items-center bg-FFFFFF rounded-xl  shadow drop-shadow-sm mt-8 '>
            <div className='py-30 pl-6 flex items-center justify-between '>
               <h1 className='text-112211 font-semibold text-base text-Montserrat'>Account</h1>                
                <hr className='w-12 text-D7E2EE border rotate-90' />
            </div>
            <div className='py-30 pl-6 flex items-center justify-between '>
               <h1 className='text-112211 font-semibold text-base text-Montserrat'>History</h1>                
                <hr className='w-12 text-D7E2EE border rotate-90' />
            </div>
            <div className='py-30 pl-6 flex items-center justify-between '>
               <h1 className='text-112211 font-semibold text-base text-Montserrat'>Payment methods</h1>                
                
            </div>
            


        </div>


    </div>
  )
}

export default Tab