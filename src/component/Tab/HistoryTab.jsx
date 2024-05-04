import React, { useState } from 'react'
import BookingSubtab from './BookingSubtab'
import HistoryTabDetail from '../TabDetails/HistoryTabDetail'
import StayTab from '../TabDetails/StayTab'

const HistoryTab = () => {

  const [subTab, SetSubTab] =useState(0);

  return (
    <div>
        <div>
          <h1 className='text-000000 text-32 font-bold font-Poppins pt-10'>Tickets/Bookings</h1>
          <div>
            <BookingSubtab SetSubTab ={SetSubTab}  />
            {
              subTab ===0? <HistoryTabDetail />: ''
            }
            
            {
              subTab ===1 ? <StayTab />: ''
            }
            
            
          </div>
        </div>
    </div>
  )
}

export default HistoryTab