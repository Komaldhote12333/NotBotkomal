import { FaChevronRight } from "react-icons/fa6";
import { IoBagRemoveOutline } from "react-icons/io5";
const MettingPage = () => {

const Item =() =>{
  return(
    <div className="p-[16px]  relative shadow-xl rounded-lg">
            <div className="h-[38px] text-[#212529] mb-[16px] text-[16px] font-bold">
              30 Minute Meeting
            </div>

            <div className="text-[#212529] mb-[16px] text-[16px] min-h-[200px] font-semibold">
              Book A meeting With me For #0 Minute
            </div>
            <button
              type="button"
              className=" rounded-lg absolute bottom-2 w-[120px] h-[38px] px-[12px] py-[6px] border border-[#696C77] text-[#696C77] text-[16px] hover:bg-[#696C77] hover:text-[#FFF]"
            >
              Book Now <FaChevronRight className=" inline-block" />
            </button>
          </div>
  )
}

  return (
    <div className="w-full">
      <div className="logo text-center flex justify-center items-center flex-col h-[172px] mb-10">
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
          {" "}
          <img
            src="https://assets.tidycal.com/img/smiley.svg"
            className="w-full h-full object-center"
            alt=""
          />
        </div>

        <span className="text-[25.408px] text-[#212559] font-bold">
          Komal Dhote CS!
        </span>
      </div>

      <div className="md:px-30 lg:px-40 p-2 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">


    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
      

    

        </div>
      </div>

      <div className=" w-[100px] h-[100px] fixed top-0 right-0"><img src="https://assets.tidycal.com/img/triangle-gradient-blue.svg" alt="" className="w-full h-full" /></div>

      <div className=" w-[25px] h-[25px] fixed top-3 right-3"> <IoBagRemoveOutline className="w-full h-full text-white"  /></div>


{/* <div className="min-h-[300px] max-h-screen flex justify-center items-center bg-[#212529] ">
  <div className="h-[46.8px] flex  md:flex-row lg:flex-row flex-col md:gap-0 gap-3 ">
  <input type="text" className="h-full w-[258px] p-2 text-[#4abbf4] md:rounded-l-lg rounded-lg" placeholder="YourName@gmail.com"/>
<span className="text-[19.2px] text-[white] py-[8px] px-[16px] bg-[#1569ef] md:rounded-r-lg rounded-lg"> Make you Oun booking page</span>
<span className="text-[10px] text-[white] py-[8px] px-[16px]  flex justify-center items-center"> with</span>

<span className="md:h-full h-[43px]  flex justify-center items-center p-2"> <img src="https://assets.tidycal.com/img/logo-white.svg" className="w-full h-full text-white" alt="" /></span>


  </div>
</div> */}

<div className=" border border-black bg-current  ">
 <div className=" min-h-[400px] flex justify-center items-center"> 
 
 <div className="flex md:flex-row flex-col ">
 <input type="text" className="h-[46.8px] p-2 text-[#4abbf4]  rounded-lg md:rounded-r-none md:mb-0 mb-4" placeholder="YourName@gmail.com"/>
 <span className=" h-[46.8px] text-[19.2px] text-[white]  px-[16px] bg-[#1569ef] md:rounded-l-none rounded-lg flex justify-center items-center"> Make you Oun booking page</span>

 <span className=" h-[46.8px] text-[10px] text-[white] py-[8px] px-[16px]  flex justify-center items-center"> with</span>

 <span className="h-[46.8px] flex justify-center items-center p-2"> <img src="https://assets.tidycal.com/img/logo-white.svg" className="w-full h-full text-white" alt="" /></span>




 </div>
 </div>


</div>

    </div>
  );
};

export default MettingPage;
