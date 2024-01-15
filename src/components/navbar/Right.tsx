import { FC } from "react";
import { Link } from "react-router-dom";

const RightNav:FC =() =>{
    return(
<div className=" bg-white absolute top-[95px] right-0 border  border-[#dee2e6]  w-[158px] py-[4px] lg:flex md:hidden hidden">
<div className="flex flex-col w-full gap-2">

<div className="flex flex-col w-full  border-b border-[#dee2e6]
 ">
<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Setting</div>
<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Intregation</div>
</div>




<div className="flex flex-col w-full  border-b border-[#dee2e6] ">
<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Directory</div>
<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Pricing</div>

<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Roadmap</div>

<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">feature request</div>

<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Help</div>


</div>


<div className="flex flex-col w-full ">
    <Link to="/Logout">
<div className="flex flex-col text-[16px] text-[#212529] py-[4px] px-[16px] hover:bg-[#1569ef]  hover:text-white">Logout</div>
</Link>
</div>





</div>

</div>
    )
}

export default RightNav