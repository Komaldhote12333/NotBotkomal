import { FC, useState } from "react";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import RightNav from "./Right";
import { Link } from "react-router-dom";
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Extranavitem =() =>{
    return(
        <div className="flex flex-col w-full gap-2 md:hidden">
        <div className="flex flex-col w-full   ">
          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center ">
            Setting
          </div>
          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center ">
            Intregation
          </div>
        </div>

        <div className="flex flex-col w-full   ">
          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center">
            Directory
          </div>
          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center">
            Pricing
          </div>

          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center">
            Roadmap
          </div>

          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center">
            feature request
          </div>

          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center">
            Help
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <Link to="/">
          <div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] text-center">
            Logout
          </div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className=" w-full h-[90px] p-[16px] flex items-center justify-between shadow-sm md:relative">
      <IoBagRemoveOutline className="w-[23px] h-[21px]" />

      <div
        className={
          isOpen
            ? "absolute md:static top-[90px] md:top-0 right-0 flex flex-col md:flex-row md:w-[90%] z-30 bg-white w-full gap-6 md:gap-0 md:justify-between lg:pl-12 md:pl-5 "
            : "justify-between items-center w-[90%] lg:pl-12 md:pl-5 lg:flex  hidden"
        }
      >
        <div
          className={
            isOpen
              ? "flex text-[14px] text-[#0000008C] items-center flex-col md:flex-row"
              : "flex text-[14px] text-[#0000008C] items-center "
          }
        >
          <span className="m-[8px] "> Booking Types</span>
          <span className="m-[8px]"> Date Polls</span>
          <span className="m-[8px]"> My Bookings</span>
          <span className="m-[8px] text-[#000000E6]"> My Contacts</span>
        </div>

        <div
          className={
            isOpen
              ? "flex text-[14px] items-center flex-col md:flex-row"
              : "flex text-[14px] items-center  "
          }
        >
          <span className="m-[8px] text-[#1569ef] font-semibold">
            {" "}
            Upgrade $29 lifetime access!
          </span>
          <div className="flex  items-center m-[8px] gap-1">
            <span className="w-[24px] h-[24px] rounded-full overflow-hidden">
              <img
                src="https://assets.tidycal.com/img/smiley.svg"
                alt=""
                className="w-full  object-center"
              />
            </span>
            <span className=""> Komal Dhote CS1</span>
          </div>
          <span className="m-[8px]">
            <span className="text-[9px] m-[2px] md:relative bottom-1">
              EARNINGS:
            </span>
            <span className="text-[14px]">$0.00 </span>
          </span>
        </div>

      <Extranavitem/>
      </div>

      <MdOutlineMenu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-[44px] h-[44px] p-2 ] "
      />

      {isOpen && <RightNav />}
    </div>
  );
};

export default Navbar;
