import React from 'react'
import BookingSubtab from './BookingSubtab'
import HistoryTabDetail from '../TabDetails/HistoryTabDetail'

const HistoryTab = () => {
  return (
    <div>
        <div>
          <h1 className='text-000000 text-32 font-bold font-Poppins pt-10'>Tickets/Bookings</h1>
          <div>
            <BookingSubtab />
            <HistoryTabDetail />
          </div>
        </div>
    </div>
  )
}

export default HistoryTab