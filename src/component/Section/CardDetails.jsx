import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";


const CardDetails = ({ isCheck, setIsCheck, checkedRef }) => {


    const handleInput = (value) => {
        console.log(value);
        setIsCheck(value); // Update the state with the selected value
      };

  return (
    <div>
        
        <div>
            <div className="bg-FFFFFF border rounded-xl">
                <div className='mx-4 my-4'>
                    <div className='flex flex-col gap-4'>
                        <div className={`rounded-xl ${
                                isCheck === '**** 432' ? 'bg-039D9D text-white' : 'border'
                            }`}
                            onClick={() => handleInput('**** 432')}>
                            <div className=" py-7 px-4">
                                <div className="">
                                <div className="flex items-center justify-between ">
                                    <label className=" text-base font-bold font-Poppins flex items-center gap-3 ">
                                    **** 432
                                    <span className="text-sm font-normal flex font-Montserrat">
                                    02/27
                                    </span>
                                    </label>
                                    <input
                                    type="radio"
                                    value="**** 432"
                                    name="default-radio"
                                    ref={checkedRef}
                                    checked={isCheck === '**** 432'}
                                    onChange={() => handleInput('**** 432')}
                                    />
                                </div>
                            </div>
                        </div>
                        </div>     

                        <div className='border-2 border-039D9D border-dashed h-44 rounded-2xl flex justify-center items-center'>
                           <MdAddCircleOutline className='text-039D9D w-12 h-12' />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default CardDetails