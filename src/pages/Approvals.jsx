import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useStateContext } from "../context/StateContext";

const approvalList = [
  {
    number: 1,
    name: "Godson Selorm",
    email: "ranselorm@gmail.com",
    icon: "icon",
    status: "Pending",
  },
  {
    number: 2,
    name: "Godson Selorm",
    email: "ranselorm@gmail.com",
    icon: "icon",
    status: "Pending",
  },
  {
    number: 3,
    name: "Godson Selorm",
    email: "ranselorm@gmail.com",
    icon: "icon",
    status: "Pending",
  },
  {
    number: 4,
    name: "Godson Selorm",
    email: "ranselorm@gmail.com",
    icon: "icon",
    status: "Pending",
  },
  {
    number: 5,
    name: "Godson Selorm",
    email: "ranselorm@gmail.com",
    icon: "icon",
    status: "Pending",
  },
  {
    number: 6,
    name: "Godson Selorm",
    email: "ranselorm@gmail.com",
    icon: "icon",
    status: "Pending",
  },
];

function Approvals() {
  const { isOpen, setIsOpen } = useStateContext();

  return (
    <div className="">
      <main className="mb-4">
        <div className="flex justify-between">
          <h4 className="text-[16px] font-semibold">Approval</h4>
          <div className="flex items-center gap-[20px]">
            <div className="bg-white h-[30px] rounded overflow-hidden">
              <input
                type="text"
                className="outline-none border-none h-full text-[12px] focus:outline-none pl-5"
                placeholder="Search approval"
              />
            </div>
            <div className="h-[30px] rounded overflow-hidden text-[12px] bg-blue-900 text-white px-2 py-1 cursor-pointer">
              Add Filters
            </div>
            <div className="h-[30px] rounded overflow-hidden text-[12px] bg-gray-300 text-black px-2 py-1 cursor-pointer">
              Refresh
            </div>
          </div>
        </div>
        <div className="flex gap-3 text-[13px] mt-2 pb-2 border-b border-gray-300 drop-shadow">
          <h4>
            Pending
            <span className="bg-blue-500 w-10 h-2" />
          </h4>
          <h4>Approved</h4>
          <h4>Rejected</h4>
        </div>
        <div className="mt-6 text-[12px] text-gray-400 flex items-center justify-between">
          <div>Showing 1-10 results of 12</div>
          <div className="flex items-center bg-white w-max px-1 py-[2px] rounded">
            <span>
              <MdKeyboardArrowLeft className="text-[19px] cursor-pointer" />
            </span>
            <span>1 of 2</span>
            <span>
              <MdKeyboardArrowRight className="text-[19px] cursor-pointer" />
            </span>
          </div>
        </div>
      </main>
      {approvalList.map((approval) => (
        <div
          className="bg-white flex justify-between px-4 py-[13px] border-b border-gray-200 rounded cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex justify-start gap-x-5 items-center w-full flex-1">
            <span className="text-sm">{approval.number}</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="flex items-center gap-x-4">
              <span className="bg-red-500 text-white h-7 w-7 flex items-center justify-center rounded-full">
                G
              </span>
              <div className="flex flex-col -gap-5 text-[12px] font-semibold">
                <span>{approval.name}</span>
                <span>{approval.email}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-10 items-center w-full flex-1">
            <div className="flex items-center gap-x-5">
              <span className="bg-red-200 text-black h-7 w-7 flex items-center justify-center rounded-full">
                <AiOutlineAntDesign />
              </span>
              <div className="flex flex-col -gap-5 text-[12px] font-semibold">
                <span>Create: Association</span>
                <span>Create this association Accra Academy</span>
              </div>
            </div>
          </div>
          {/* <div className="flex-1">2</div> */}
          <div className="flex-1 flex items-center w-full">
            <div className="flex justify-center items-center gap-[40px] w-full text-sm text-[12px] font-semibold">
              <div className="bg-green-200 px-2 py-1 rounded">Pending</div>
              <span>24 days ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Approvals;
