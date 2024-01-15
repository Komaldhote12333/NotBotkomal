// ChatBot.tsx

import React, { useState } from "react";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-screen fixed top-0 right-0 flex flex-col justify-end items-end z-10">
        {isOpen && (
          <div className=" chatbot md:w-[480px] w-full border border-[rgb(222,226,230)] rounded-md h-full p-3 bg-[#FFFF] pt-12 relative ">
            <div className="flex h-[40px] border border-[#dee2e6] rounded-md justify-between items-center p-3">
              <span className="md:text-[16px] text-[14px] font-bold">
                TidyCal Support Bot
              </span>
              <div className="flex gap-2">
                <span className=" h-[30px] w-[30px] p-1">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="w-full h-full object-center"
                  />
                </span>
                <span
                  className="h-[30px] w-[30px] "
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="w-full h-full object-center"
                  />
                </span>
              </div>
            </div>

            {/* chatbot chat section only */}
            <div className="h-[75%]  overflow-y-auto  flex flex-col gap-6 p-3 ">
              <div className="  w-full px-2  flex items-center">
                <div className="max-w-[90%] text-start h-full text-[18px] bg-[#dee2e6] p-3 rounded-lg ">
                  Hi there. 👋 Do you need any help?
                </div>
              </div>

              <div className="  w-full px-2  relative mb-10">
                <div className=" absolute right-0 max-w-[90%] text-start h- text-[18px] text-[#FFFF] p-3 bg-[#1569ef] rounded-lg   ">
                  What is TidyCal?
                </div>
              </div>

              <div className="  w-full px-2  flex items-center">
                <div className="max-w-[90%] text-start h-full text-[18px] bg-[#dee2e6] p-3 rounded-lg ">
                  TidyCal is a powerful booking solution that helps you plan and
                  balance your day. It allows you to book meetings and create
                  events with ease, offering your own booking page and the
                  option to embed certain booking types into your webpage.
                  TidyCal also integrates with your preferred calendar. There
                  are two plans available: a free plan with unlimited meetings
                  and bookings per month, but only one calendar connection, and
                  a lifetime plan for $29 that includes everything in the free
                  plan. It's a fantastic value for money with no subscription.
                </div>
              </div>
            </div>

            {/* chatbot chat section end  */}

            <div className="w-full flex gap-1 h-[30px] mt-5">
              <div className=" h-full bg-[#dee2e6] p-1 text-center rounded-lg">
                What is Ticay Call
              </div>
              <div className=" h-full bg-[#dee2e6] p-1 rounded-lg ">
                What are you FQA
              </div>
            </div>

            <div className="absolute bottom-0 border h-[40px] border-[#dee2e6] w-full flex pr-3 pl-2 rounded-lg ">
              <input type="text" className="w-[90%] outline-none p-2 " />
              <span className="w-[10%] text-center h-full">
                <img
                  src="data:image/png;base64,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"
                  className="w-full h-full object-center"
                  alt=""
                />
              </span>
            </div>
          </div>
        )}

        <div
          className=" w-[32px]  mt-2"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src="data:image/png;base64,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"
            className="w-full h-full object-center"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
