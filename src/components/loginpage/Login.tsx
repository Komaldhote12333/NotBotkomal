import { FC } from "react";
import { Link } from 'react-router-dom';

const LoginPage: FC = () => {
  return (
    <>
    
   
    {/* <div className="flex justify-center w-full h-screen px-3  ">
      <div className="w-[454px] h-fit ">
        <div className=" w-full  flex justify-center items-center mt-[1.5rem] mb-[3rem] ">
          <img
            src="https://assets.tidycal.com/img/logo-black.svg"
            alt=""
            className="w-[110px] h-[25px] object-center"
          />
        </div>

        <div className="w-full h-fit   border border-[#dee2e6] rounded-md">
          <div className="h-[63.48px] text-[25.408px] flex justify-center items-center p-3  border-b border-[#dee2e6]">
            Login
          </div>

          <div className="p-3 w-full">
            <form action="" className="w-full ">
              <div className="mb-4 flex flex-col">
                <label htmlFor="" className="mb-[0.5rem] font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="px-[6px] py-[6px] border border-[#dee2e6] outline-[#4abbf4]"
                />
              </div>

              <div className="mb-4 flex flex-col">
                <label htmlFor="" className="mb-[0.5rem] font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="px-[6px] py-[6px] border border-[#dee2e6] outline-[#4abbf4]"
                />
              </div>

              <div className="mb-4 flex items-center gap-2 ">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=" w-[16px] h-[16px]"
                />
                <label
                  htmlFor=""
                  className=" font-bold000= text-[#212529] text-[16px]"
                >
                  Remember me
                </label>
              </div>

              <button className=" bg-[#1569ef] h-[38px] mb-[1rem] w-full text-center text-[16px] text-[#FFE7F9] font-bold ">
                Login →
              </button>

              <div className="flex items-center h-[21px] mb-[1rem]">
                <div className="border border-b-[#dee2e6] w-full "></div>
                <div className="text-[.875em] mx-2 italic">OR</div>
                <div className="border border-b-[#dee2e6] w-full "></div>
              </div>

              <button className=" border border-[#1569ef]  h-[38px] mb-[1.5rem] w-full text-center text-[16px] p-[6px]  relative">
                <span className=" absolute left-3 w-[22.72px] h-[23px]">
                  <img
                    src="https://tidycal.com/img/integration-logo-google.png"
                    alt=""
                    className="w-full h-full object-center"
                  />
                </span>
                <span>Login With Gogle</span>
              </button>

              <div className="h-[37px] flex justify-between items-center text-[#1569ef] text-[14px]  md:text-[16px]">
                <span className="text-[14px] md:text-[16px]">Forget Your Password?</span>
                <span className="text-[14px] md:text-[16px]">Not Registerd?</span>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div className=""></div>




    </div> */}










<div className="flex justify-center w-full h-screen px-3  ">
      <div className="w-[454px] h-fit ">
        <div className=" w-full  flex justify-center items-center mt-[1.5rem] mb-[3rem] ">
          <img
            src="https://assets.tidycal.com/img/logo-black.svg"
            alt=""
            className="w-[110px] h-[25px] object-center"
          />
        </div>

        <div className="w-full h-fit   border border-[#dee2e6] rounded-md">
          <div className="h-[63.48px] text-[25.408px] flex justify-center items-center p-3  border-b border-[#dee2e6]">
            Login
          </div>

          <div className="p-3 w-full">
            <form action="" className="w-full ">
              <div className="mb-4 flex flex-col">
                <label htmlFor="" className="mb-[0.5rem] font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="px-[6px] py-[6px] border border-[#dee2e6] outline-[#4abbf4]"
                />
              </div>

              <div className="mb-4 flex flex-col">
                <label htmlFor="" className="mb-[0.5rem] font-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="px-[6px] py-[6px] border border-[#dee2e6] outline-[#4abbf4]"
                />
              </div>

              <div className="mb-4 flex items-center gap-2 ">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=" w-[16px] h-[16px]"
                />
                <label
                  htmlFor=""
                  className=" font-bold000= text-[#212529] text-[16px]"
                >
                  Remember me
                </label>
              </div>
            <Link to="Login">
              <button className=" bg-[#1569ef] h-[38px] mb-[1rem] w-full text-center text-[16px] text-[#FFE7F9] font-bold ">
                Login →
              </button>
              </Link>
              <div className="flex items-center h-[21px] mb-[1rem]">
                <div className="border border-b-[#dee2e6] w-full "></div>
                <div className="text-[.875em] mx-2 italic">OR</div>
                <div className="border border-b-[#dee2e6] w-full "></div>
              </div>

              <button className=" border border-[#1569ef]  h-[38px] mb-[1.5rem] w-full text-center text-[16px] p-[6px]  relative">
                <span className=" absolute left-3 w-[22.72px] h-[23px]">
                  <img
                    src="https://tidycal.com/img/integration-logo-google.png"
                    alt=""
                    className="w-full h-full object-center"
                  />
                </span>
                <span>Login With Gogle</span>
              </button>

              <div className="h-[37px] flex justify-between items-center text-[#1569ef] text-[14px]  md:text-[16px]">
                <span className="text-[14px] md:text-[16px]">Forget Your Password?</span>
                <span className="text-[14px] md:text-[16px]">Not Registerd?</span>
              </div>
            </form>
          </div>
        </div>
      </div>







    </div>


   






    </>
  );
};

export default LoginPage;
