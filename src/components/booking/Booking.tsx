import { useState,FC } from 'react';
import BookingBox from './bookingbox/Bookingbox';
import { Link } from 'react-router-dom';

const Booking:FC =()=>{

const BookinhHeader =() =>{
    return(
<div className=" w-full   flex md:flex-col lg:flex-row flex-col justify-between gap-2 lg:items-center md:justify-center mb-10 mt-20">
<span className="text-[24.538px] font-bold h-[38px] w-[250px] flex justify-start item-center">Booking Types </span>

<div className="w-[100%] md:flex md:flex-row lg:flex-row flex  gap-4 flex-col justify-between ">

<div className=" h-[38px] text-[16px] w-[214px] p-[6px] font-bold text-[#1569EF] border border-[#1569EF] flex justify-center items-center hover:bg-[#1569EF] hover:text-[#FFFF] rounded-lg">+ Create New Booking Type</div>

<div className="md:flex md:flex-row  flex flex-col gap-4 ">

<div className=" h-[38px] text-[16px] w-[214px] p-[6px] font-bold text-[#6C756D] border border-[#1569EF] flex justify-center items-center text-start hover:bg-[#6c757d]  hover:text-[#FFFF] rounded-lg">  Embed booking page <span className="bg-[#dee2e6] p-1 rounded-full h-[18px] flex justify-center items-center text-[15px] ml-1"> ?</span></div>

<Link to="/MyBooking">
<div className=" h-[38px] text-[16px] w-[214px] p-[6px] font-bold text-[#6C756D] border border-[#1569EF] flex justify-center items-center hover:bg-[#6c757d]  hover:text-[#FFFF] rounded-lg">  View your bookings page ↗</div>
</Link>



</div>  





</div>

</div>
    )
  }
 
    return(
<div className=" w-full  lg:px-20  md:px-10 px-5" >



<BookinhHeader/>

<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
    
  
    
    {/* <div className=" p-[1.5rem] shadow-lg rounded-lg">

        <div className="h-[24px] text-[#212529] font-bold text-[24px] mb-[24px]"> 30 Minute Meeting</div>

        <div className=" h-[28px] text-[14px] flex justify-between items-center border-b border-[#4abbf4] text-[#4abbf4] mb-[16px] ">
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

        <div className="h-[57px] px-[24px] py-[8px] flex justify-between items-center border-b border-[#4abbf4]">
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


        <div className=" h-[59px] text-[14px] flex justify-between items-center border-b border-[#4abbf4] text-[#6C757D] mb-[16px] py-[16px]  ">
            <span className="h-full text-[red] font-medium ">Delete</span>
            <span className="h-full text-[#4abbf4] font-semibold">Clone</span>
            <span className="h-full text-[#4abbf4] font-semibold">edit</span>
        </div>
    </div> */}
<BookingBox/>
<BookingBox/>
<BookingBox/>
<BookingBox/>
<BookingBox/>
<BookingBox/>
<BookingBox/>

  



    
</div>



</div>
    )
}


export default Booking