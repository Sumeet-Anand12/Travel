import React, {useRef, useState} from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import DatePicker from '../../component/Section/DatePicker';
import PriceDetail from '../../component/Section/PriceDetail';
import PaymentOption from '../../component/Section/PaymentOption';
import LoginWith from '../../component/Section/LoginWith';
import mailIcon from "../../assets/HotelDetails/mailIcon.svg";
import CardDetails from '../../component/Section/CardDetails';

const CardPayment = () => {

    const radio1Ref = useRef();
    const radio2Ref = useRef();
    const checkRef = useRef();

    const [radioSelect, setRadioSelect] = useState('Pay in full');

    const handleInput = (value) => {
        console.log(value);
        setRadioSelect(value); // Update the state with the selected value
      };

  return (
    <div>

         <div className=' w-full min-h-screen'>
           <div className='px-104'>

               <div className='flex items-center gap-1 pt-12'>
                    <span className='text-FF8682 font-medium text-sm'>Turkey</span>
                    <MdOutlineNavigateNext />
                    <span className='text-FF8682 font-medium text-sm'>Istanbul</span>
                    <MdOutlineNavigateNext />
                    <span>CVK Park Bosphorus Hotel Istanbul</span>
                </div>
                <div className='flex items-start gap-10 mt-29'>
                    
                    {/* Date picker Section */}
                    
                   <div className='flex flex-col gap-10'>
                       <DatePicker />
                       <PaymentOption radioSelect={radioSelect} setRadioSelect={setRadioSelect} radio1Ref={radio1Ref} radio2Ref={radio2Ref} />
                   
                       <CardDetails isCheck={radioSelect} setIsCheck={setRadioSelect} checkedRef={checkRef} /> 
                   </div>

                   <div className='RightSidePart'>
                       <PriceDetail />
                   </div>

                   
               </div> 

           </div>
         </div>
    </div>
  )
}

export default CardPayment