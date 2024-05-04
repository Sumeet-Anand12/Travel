import React, { useState } from 'react'
import HeroSection from '../../assets/AccountDetails/HeroSection.svg'
import editUser from '../../assets/AccountDetails/editUser.svg'
import User from '../../assets/Header/User.svg';
import uploadIcon from '../../assets/UploadIcon.svg'
import Tab from '../../component/Tab/Tab';
import Account from '../../component/Tab/Account';
import HistoryTab from '../../component/Tab/HistoryTab';
import PaymentTab from '../../component/TabDetails/PaymentTab';

const AccountDetails = () => {

  
  const [tabClick, setTabClick] = useState(0);

  return (
    <div className='w-full px-104'>
        <div className='py-12' >
            <div className='relative'>
                    <img src={HeroSection} alt=""  className='w-full'/>
                    <div className='-mt-90'>
                        <div className='flex justify-end pr-4 '>
                            <div className='bg-039D9D items-center gap-1 inline-flex absolute top-64  rounded'>
                                <img src={uploadIcon} alt="" className='pl-4' />
                                <button type='' className='py-15.5 pl-1 pr-4 text-sm text-Montserrat '>Upload new cover</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                    <div className='relative flex items-center justify-end'>
                      <img src={User} alt="" className='border-2 border-FF8682 w-160 rounded-full' />
                      <div className='absolute bottom-1' >
                        <button>
                          <img src={editUser} alt=""  />
                        </button>
                      </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span>
                        John Doe.
                        </span>
                        <span>john.doe@gmail.com</span>

                    </div>
                    </div>  
            </div>
           
              <div className=''>
                <Tab setTabClick={setTabClick} /> 
                {
                  tabClick ===0 ?
                 <Account />
                 :
                ''
                }
                {
                  tabClick ===1 ?
                 <HistoryTab />
                 :
                ''
                }
                {
                  tabClick ===2 ?
                 <PaymentTab />
                 :
                ''
                }
              </div>
            

        </div>
    </div>
  )
}

export default AccountDetails