"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/home/footer-logo.png";
import { MdDashboard, MdOutlineDarkMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiTelevisionLight } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { AiOutlineMessage, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { GiTorch } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline, IoSunny } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

const DashboardSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const dashboardMenuItem = [
    { id: 1, text: "Dashboard", link: "/users/dashboard", icon: <MdDashboard /> },
    { id: 2, text: "Profile", link: "/users/userprofile", icon: <FaUser /> },
    { id: 3, text: "Pitch", link: "/users/pitch", icon: <PiTelevisionLight /> },
    { id: 4, text: "Bookmark", link: "/users/bookmark", icon: <FaRegBookmark /> },
    { id: 5, text: "Banking", link: "/users/banking", icon: <BsBank /> },
    { id: 6, text: "Message", link: "/users/message", icon: <AiOutlineMessage /> },
    { id: 7, text: "Calender", link: "/users/calender", icon: <SlCalender /> },
    { id: 8, text: "Reports", link: "/users/reports", icon: <IoMdInformationCircleOutline /> },
    { id: 9, text: "Setting", link: "/users/setting", icon: <IoSettingsOutline /> },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-secondary flex justify-between items-center p-4 text-white z-50">
        <Link href="/users/dashboard">
          <Image src={logo} alt="Logo" width={100} />
        </Link>
        <button onClick={toggleDrawer} className="text-white text-2xl">
          {isDrawerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar for Large Screens */}
      <div className="hidden lg:block max-w-[340px] bg-secondary h-screen fixed w-full py-10 px-6">
        <div className="flex justify-center">
          <Link href="/users/dashboard">
            <Image src={logo} alt="Logo" width={121} />
          </Link>
        </div>

        <ul className="mt-[60px] mb-[100px]">
          {dashboardMenuItem.map((item) => (
            <li key={item.id} className="px-3 py-3 hover:bg-white text-white hover:text-secondary duration-300 rounded-md">
              <Link href={item.link} className="flex items-center gap-4 text-base font-medium">
                {item.icon} {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full border-t border-[#0b3f1b] pt-4">
          <p className="flex items-center gap-4 text-[#6F767E] font-medium">
            <IoMdHelpCircleOutline /> Help & getting started
          </p>
          <div className="w-full rounded-3xl py-3 px-8 bg-white flex items-center justify-between mt-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <IoSunny className="text-main" size={26} />
              <p className="text-main font-semibold">Light</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <MdOutlineDarkMode className="text-[#6F767E]" size={26} />
              <p className="text-[#6F767E] font-semibold">Dark</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-secondary text-white p-6 z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button onClick={toggleDrawer} className="absolute top-4 right-4 text-white text-2xl">
          <AiOutlineClose />
        </button>

        <div className="flex justify-center mb-6">
          <Link href="/users/dashboard">
            <Image src={logo} alt="Logo" width={121} />
          </Link>
        </div>

        <ul>
          {dashboardMenuItem.map((item) => (
            <li key={item.id} className="px-3 py-3 hover:bg-white hover:text-secondary duration-300 rounded-md">
              <Link href={item.link} className="flex items-center gap-4 text-base font-medium">
                {item.icon} {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;
