import React from 'react'

const HotelTermCondition = () => {
  return (
    <div>
      <div className='pt-16'>
        <h1 className='text-112211 text-2xl font-semibold font-Montserrat'>Terms and Conditions</h1>
        <div className='pt-34.5'>
            <h1  className='text-112211 text-xl font-medium font-Montserrat'>Payments</h1>
            <ul className='pl-7 pt-4'>
                <li class="list-disc text-justify text-112211 text-sm font-normal font-Montserrat leading-5"> If you are purchasing your ticket using a debit or credit card via the Website,   
                     we will process these payments via the automated secure common payment gateway       which will be subject to fraud screening purposes. 
                </li>
                <li class="list-disc text-justify text-112211 text-sm font-normal font-Montserrat leading-5"> If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.
                </li>
                <li class="list-disc text-justify text-112211 text-sm font-normal font-Montserrat leading-5 "> Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.
                </li>
            </ul>
        </div>
       {/* Contacts section */}
        <div className='pt-34.5'>
             <h1 className='text-112211 text-xl font-medium font-Montserrat'>Contact Us</h1>
             <div className='pt-4 flex flex-col items-start'>    
                <span className='text-112211 text-sm font-normal font-Montserrat'>If you have any questions about our Website or our Terms of Use, please contact:</span>
                <span className='text-112211 text-sm font-normal font-Montserrat'>Golobe Group Q.C.S.C</span>
                <span className='text-112211 text-sm font-normal font-Montserrat'>Golobe Tower</span>
                <span className='text-112211 text-sm font-normal font-Montserrat'>P.O. Box: 22550</span>
                <span className='text-112211 text-sm font-normal font-Montserrat'>P.O. Box: 22550</span>
                <span className='text-112211 text-sm font-normal font-Montserrat'>Doha, State of Qatar</span>
                <span className='text-112211 text-sm font-normal font-Montserrat'>Further contact details can be found at golobe.com/help</span>
             </div>
        </div>
      </div>

    </div>
  )
}

export default HotelTermCondition
