import React, { useRef, useState } from 'react';

const PaymentOption = () => {
  const [radioSelect, setRadioSelect] = useState('Pay in full');

  const radio1Ref = useRef();
  const radio2Ref = useRef();

  const handleInput = (value) => {
    console.log(value);
    setRadioSelect(value); // Update the state with the selected value
  };

  return (
    <div>
      <div className="bg-FFFFFF border rounded-xl">
        <div className="mx-4 my-4">
          <div className="flex flex-col gap-3">
            <div
              className={`rounded-xl ${
                radioSelect === 'Pay in full' ? 'bg-039D9D text-white' : ''
              }`}
              onClick={() => handleInput('Pay in full')}>
              <div className="py-4 px-4">
                <div className="">
                  <div className="flex items-center justify-between">
                    <label className="text-112211 text-base font-bold font-Poppins">
                      Pay in full
                      <br />
                      <span className="text-112211 text-sm font-normal font-Montserrat">
                        Pay the total and you are all set
                      </span>
                    </label>
                    <input
                      type="radio"
                      value="Pay in full"
                      name="default-radio"
                      ref={radio1Ref}
                      checked={radioSelect === 'Pay in full'}
                      onChange={() => handleInput('Pay in full')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`rounded-xl ${
                radioSelect === 'Pay part now, part later' ? 'bg-039D9D text-white' : ''
              }`}
              onClick={() => handleInput('Pay part now, part later')}
            >
              <div className="py-4 px-4">
                <div className="">
                  <div className="flex items-center justify-between">
                    <label className="text-112211 text-base font-bold font-Poppins w-10/12">
                      Pay part now, part later
                      <br />
                      <span className="text-112211 text-sm font-normal font-Montserrat text-center w-1/3">
                        Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment
                        method on Nov 14, 2022. No extra fees.
                      </span>
                    </label>
                    <input
                      type="radio"
                      value="Pay part now, part later"
                      name="default-radio"
                      ref={radio2Ref}
                      checked={radioSelect === 'Pay part now, part later'}
                      onChange={() => handleInput('Pay part now, part later')}
                    />
                  </div>
                </div>
              </div>
            </div>        
          </div>
          <button className="pl-4">More info</button> 
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
