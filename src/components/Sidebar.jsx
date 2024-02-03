import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";
import {
  MdOutlineCancel,
  MdOutlineSpaceDashboard,
  MdPeople,
  MdOutlineContactMail,
} from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import { GiFilmStrip } from "react-icons/gi";
import { RiArrowDownSFill } from "react-icons/ri";

const links = [
  {
    name: "Dashboard",
    url: "dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    name: "Vendors",
    url: "vendors",
    icon: <IoMdPerson />,
  },
  {
    name: "Users",
    url: "users",
    icon: <MdPeople />,
  },
  {
    name: "Approvals",
    url: "approvals",
    icon: <FcApproval />,
  },
  {
    name: "Trips",
    url: "trips",
    icon: <GiFilmStrip />,
  },
  {
    name: "User Feedback",
    url: "user-feedback",
    icon: <MdOutlineContactMail />,
  },
];

const Sidebar = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-1 pb-1 rounded-lg text-white bg-teal-500 text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-1 pb-1 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-light-gray m-2 text-md";

  return (
    <div className="h-screen overflow-y-auto md:overflow-hidden pb-10 bg-white border-r border-gray-200 shadow-lg">
      <div className="h-full">
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex gap-3 items-center ml-3 text-xl mt-4 font-extrabold tracking-tight dark:text-white text-slate-900"
              // onClick={handleCloseSidebar}
            >
              <SiShopware />
              <span>ELITE RIDE ADMIN</span>
            </Link>
          </div>
          <div className="flex flex-col justify-around h-full">
            <div className="-mt-8 flex flex-col gap-y-2">
              {links.map((link, index) => (
                <div key={index}>
                  {/* {item.links.map((link) => ( */}
                  <NavLink
                    key={link.name}
                    to={`${link.url}`}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="text-[18px]">{link.icon}</span>
                    <span className="capitalize text-[16px]">{link.name}</span>
                  </NavLink>
                  {/* ))} */}
                </div>
              ))}
            </div>
            <div className="pl-4 w-[150px] flex items-center justify-around">
              <div className="flex gap-2 items-center">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <img
                    src="/guy.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="">Ransel</p>
              </div>
              <RiArrowDownSFill />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Sidebar;
