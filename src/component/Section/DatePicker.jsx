import React from "react";
import cvkLogo from "../../assets/HotelDetails/cvkLogo.svg";
import datePickerIcon from "../../assets/HotelDetails/datePickerIcon.svg";
import { FaLocationDot } from "react-icons/fa6";
const DatePicker = () => {
  return (
    <div>
        <div className="">
            <div className="bg-FFFFFF border  rounded-xl">
                <div className="px-6 py-8 ">
                    <div className=" flex items-start gap-124">
                        <div>
                            <h1 className="text-112211 font-bold text-2xl font-Poppins">
                            Superior room - 1 double bed or 2 twin
                             beds
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-FF8682 font-Montserrat font-bold text-32">
                            $240
                            <span className="text-FF8682 font-Montserrat font-bold text-sm ">
                                /night
                            </span>
                            </h1>
                        </div>

                    </div>
                    <div className="border-039D9D border rounded-lg mt-6">
                        <div className="flex items-center gap-6 py-5 px-6">
                                <img src={cvkLogo} alt="" className="w-16 h-16 rounded-xl"/>
                            <div>
                                    <h1 className="text-112211 text-2xl font-semibold font-Montserrat">CVK Park Bosphorus Hotel Istanbul</h1>
                                    <div className="flex items-center gap-1">
                                        <FaLocationDot />
                                        <span>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-10">
                        <div>
                            <h1 className="text-112211 font-Montserrat  font-semibold text-xl">Thursday, Dec 8</h1>
                            <span className="text-112211 font-Montserrat  font-medium opacity-60 text-sm">Check-In</span>
                        </div>
                        <img src={datePickerIcon} alt="" />
                        <div>
                            <h1 className="text-112211 font-Montserrat  font-semibold text-xl">Thursday, Dec 8</h1>
                            <span className="text-112211 font-Montserrat  font-medium opacity-60 text-sm">Check-Out</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default DatePicker;
