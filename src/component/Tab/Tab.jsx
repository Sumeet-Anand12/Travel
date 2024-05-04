import React, { useState } from 'react'


const Tab = ({setTabClick  }) => {

   const[active, SetActive]  =  useState(0)


  const handleTabClick = (value) => {
    //  console.log(value);

     setTabClick(value);
    //  console.log(active);

     SetActive(value);
  };

  return (
    <div>
        <div className='grid grid-cols-3  bg-FFFFFF rounded-xl shadow drop-shadow-sm mt-8 '>
            <div className={`py-30 pl-6 flex items-center justify-between  border-b-2 border-039D9D rounded-t-lg ${active ===0 ? 'active' : 'border-none' }  dark:border-039D9D`} onClick={() => handleTabClick(0)}>
              <button type='' className=''>
               <h1 className='text-112211 font-semibold text-base text-Montserrat '>Account</h1>                

              </button>
                <hr className='w-12 text-D7E2EE border rotate-90' />
            </div>
            <div className={`py-30  flex items-center justify-between border-b-2 border-039D9D rounded-t-lg ${active ===1 ? 'active' : 'border-none' }  dark:border-039D9D`} onClick={() => handleTabClick(1)}>
              <button name='history' value={1}>
               <h1 className='text-112211 font-semibold text-base text-Montserrat'>History</h1>                
              </button>
                <hr className='w-12 text-D7E2EE border rotate-90' />
            </div>
            <div className={`py-30  flex items-center justify-between data-tabs-target="#styled-dashboard" border-b-2 border-039D9D rounded-t-lg ${active ===2 ? 'active' : 'border-none' }  dark:border-039D9D`} onClick={() => handleTabClick(2)}>
              <button name='history' value={2}>
               <h1 className='text-112211 font-semibold text-base text-Montserrat'>Payment methods</h1>                

              </button>
                
            </div>
            


        </div>


    </div>
  )
}

export default Tab