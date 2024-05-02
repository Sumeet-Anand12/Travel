import React from 'react'
import HeroSection from '../../assets/AccountDetails/HeroSection.svg'
import User from '../../assets/Header/User.svg';
import uploadIcon from '../../assets/UploadIcon.svg'

const AccountDetails = () => {
  return (
    <div className='max-w-1440 h-screen'>
      <div className='mx-104' >
        <div className='relative'>
          <img src={HeroSection} alt=""  className='w-full'/>
       <div>
        <div className='flex justify-end pr-4 '>
            <div className='bg-039D9D items-center gap-1 inline-flex absolute top-64  rounded'>
                <img src={uploadIcon} alt="" className='pl-4' />
                <button type='' className='py-15.5 pl-1 pr-4 text-sm text-Montserrat '>Upload new cover</button>
            </div>
        </div>

       </div>
            <div className='flex flex-col items-center'>
            <div>
              <img src={User} alt="" />
            </div>
                <span>
                 John Doe.
                </span>
                <span>john.doe@gmail.com</span>
            </div>
         
        </div> 

      </div>
     

    </div>
  )
}

export default AccountDetails