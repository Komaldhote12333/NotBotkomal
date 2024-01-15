import { useState,FC } from 'react';
import { CiClock2 } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const BookingBox:FC = () =>{
    const [isBookingOn, setIsBookingOn] = useState(true);

    const toggleBooking = () => {
      setIsBookingOn((prev) => !prev);
    };

    return(
        <div className="p-[1.5rem] shadow-lg rounded-lg">

        <div className="h-[24px] text-[#212529] font-bold text-[24px] mb-[24px]"> 30 Minute Meeting</div>

        <div className=" h-[28px] text-[14px] flex justify-between items-center border-b border-[#4abbf4] text-[#4abbf4]  ">
            <span className="h-full font-bold">/30-minute-meeting</span>
            <span className="h-full">copy link</span>
        </div>

        <div className="h-[24px] mb-[16px] flex">
            <span className="h-full w-[32px] mr-6 flex items-center">   <div
        className={`h-[16px] w-full bg-gray-400 rounded-full p-1 cursor-pointer relative ${
          isBookingOn ? 'bg-[#4abbf4]' : 'bg-[#4abbf4]'
        }`}
        onClick={toggleBooking}
      >
        <div
          className={`w-[40%] h-full bg-white rounded-full absolute top-0 ${
            isBookingOn ? 'left-0' : 'right-0'
          } transition-all duration-300`}
        ></div>
      </div></span> Booking Is ON
        </div>

        <div className="h-[32px] text-[16px] flex items-center gap-2 mb-[16px] border-b border-[#4abbf4]">
        <CiClock2 className="h-[15px] w-[15px] flex items-center" />
        <span className="text-[14px] flex items-center">30 Minets</span>

        </div>

        <div className="h-[101px] px-[24px] py-[16px] border-b border-[#4abbf4] text-[16px]">Book a meeting with me for 30 minutes</div>

        <div className="h-[57px]  py-[8px] flex justify-between items-center border-b border-[#4abbf4]">
            <span className="text-[16px] text-[#212529] flex justify-between items-center">Share</span>
            <AiFillMessage  className='w-[18px] h-[18px]'/>
            <FaTwitter  className='w-[18px] h-[18px]'/>
            <MdOutlineEmail  className='w-[18px] h-[18px]'/>
            <FaLinkedin  className='w-[18px] h-[18px]'/>
            <FaFacebookSquare  className='w-[18px] h-[18px]'/>
            <FaTwitter  className='w-[18px] h-[18px]'/>
        </div>


        <div className=" h-[57px] text-[14px] flex justify-between items-center border-b border-[#4abbf4] text-[#6C757D] mb-[16px] py-[16px]  ">
            <span className="h-full ">Embed on Website</span>
            <span className="h-full">Embed in Email</span>
        </div>


        <div className=" h-[50px] text-[14px] flex justify-between items-center border-b border-[#4abbf4] text-[#6C757D]  py-[16px]">
            <span className="h-full text-[red] font-medium ">Delete</span>
            <span className="h-full text-[#4abbf4] font-semibold">Clone</span>
            <span className="h-full text-[#4abbf4] font-semibold">edit</span>
        </div>
    </div>

    )
}

export default BookingBox