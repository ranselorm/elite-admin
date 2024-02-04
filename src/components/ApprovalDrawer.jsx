import React from "react";
import { useStateContext } from "../context/StateContext";
//import icons
import { IoIosCheckmark } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const ApprovalDrawer = () => {
  const { isOpen, setIsOpen } = useStateContext();
  //   console.log(isOpen);
  return (
    <>
      <div
        className={` ${
          isOpen ? "right-3" : "-right-full"
        } w-full fixed top-4 h-[600px] shadow-2xl bg-white md:w-[35vw] xl:max-w-[28vw] transition-all duration-300 px-4 lg:px-[27px] z-20 rounded`}
      >
        <div>
          <div className="flex justify-between py-4 items-center font-bold mb-10">
            <h3 className="text-[18px]">Pending approval</h3>
            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <IoCloseCircleOutline className="text-[25px]" />
            </span>
          </div>
          <div className="border border-gray-300 px-4">
            <article className="flex justify-between py-8 border-b border-gray-200">
              <div>
                <p className="font-bold">From</p>
                <span className="text-[14px]">marketplace-2348</span>
              </div>
              <div>
                <p className="font-bold">Transaction Nr.</p>
                <span className="text-[14px]">merchant-75payout</span>
              </div>
              {/* <div>2</div> */}
            </article>
            <article className="flex justify-between py-8 border-b border-gray-200">
              <div>
                <p className="font-bold mb-2">Source</p>
                <span className="text-[14px] bg-teal-200 px-2 py-1">
                  marketplace-2348
                </span>
              </div>
              <div>
                <p className="font-bold mb-2">Destination</p>
                <span className="text-[14px] bg-yellow-200 px-2 py-1">
                  merchant-75payout
                </span>
              </div>
              {/* <div>2</div> */}
            </article>
            <article className="flex justify-between py-8 border-b border-gray-200">
              <div>
                <p className="font-bold mb-1">Value</p>
                <span className="text-[20px] font-bold text-green-600">
                  $50,000,00
                </span>
              </div>
              <div>
                <p className="font-bold mb-2">Description</p>
                <span className="text-[14px] py-1">
                  No description provided
                </span>
              </div>
              {/* <div>2</div> */}
            </article>
          </div>
          <div className="flex w-full gap-3 mt-10">
            <button className="w-6/12 rounded-none bg-inherit border-[1px] border-gray-400 text-sm">
              Reject
            </button>
            <button className="w-6/12 rounded-none bg-black text-white text-sm flex items-center justify-center gap-2">
              Approve
              <IoIosCheckmark className="text-[23px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalDrawer;
