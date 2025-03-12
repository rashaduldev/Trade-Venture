"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DashboardTopNavbar = () => {
  const [isOptionsVisible, setOptionsVisible] = useState();
  const [ismessageOptionsVisible, setIsmessageOptionsVisible] = useState();

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
  const toggleOptionsMessage = () => {
    setIsmessageOptionsVisible(!ismessageOptionsVisible);
  };

  const navigateTo = (page) => {
    // Implement navigation logic based on the selected option
    console.log(`Navigating to ${page}`);
    toggleOptions(); // Close the modal after navigation
    toggleOptionsMessage();
  };

  const logout = () => {
    // Implement logout logic
    console.log('Logging out');
    toggleOptions(); // Close the modal after logout
    toggleOptionsMessage();
  };
  const messageData=[
    {
      "id": 1,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Product A",
      "short_description": "High-quality item",
      "time": "10:30 AM"
    },
    {
      "id": 2,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Service B",
      "short_description": "Fast and efficient",
      "time": "02:15 PM"
    },
    {
      "id": 3,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Gadget X",
      "short_description": "Innovative technology",
      "time": "04:45 AM"
    },
    {
      "id": 4,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Event Y",
      "short_description": "Exciting gathering",
      "time": "07:00 PM"
    },
    {
      "id": 5,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Special Z",
      "short_description": "Limited edition",
      "time": "11:20 AM"
    }
  ]
  
  return (
    <div className="py-[20px] shadow-sm pl-4 pr-10 bg-white ">
      <div className="flex items-center justify-between ">
       <Link href={'/'}>
       <div className="flex items-center gap-[12px]">
            <FaArrowLeftLong size={18}/>
            <h2 className="text-[20px] font-semibold text-main cursor-pointer">Back to landing page</h2>
        </div>
       </Link>
        {/* profile section  */}
        <div className="flex gap-4 items-center">
          <div onClick={toggleOptionsMessage} className="relative cursor-pointer">
            <BiMessageDetail size={32} color="#6F767E" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
          </div>

          <div className="relative">
            <LuBell size={32} color="#6F767E" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
          </div>
          <div className="relative">
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={toggleOptions}
      >
        <Image
         width={20}
         height={20}
          src="https://i.ibb.co/HP28p9X/Cover-photo.png"
          alt="Profile Image"
          className="rounded-full h-10 w-10"
        />
        <div>
          <p className="font-bold">Johan Smith</p>
          <p>Investor</p>
        </div>
      </div>

      {ismessageOptionsVisible && (
        <div className="absolute top-full right-0 z-10 w-80 bg-white shadow-md rounded-md mt-2">
          <div className="flex items-center justify-between p-3">
            <p>Message</p>
            <p className="text-2xl">...</p>
          </div>
          {messageData.map((message) => (
      <div
        key={message.id}
        className="flex items-center gap-2 m-3 p-2 hover:bg-gray-100 rounded-lg"
      >
        <Image
         width={20}
         height={20}
          src={message.img}
          alt="Profile Image"
          className="rounded-full h-10 w-10"
        />
        <div>
          <div className="flex items-center w-56 justify-between">
            <p className="font-bold">{message.name}</p>
            <p className="text-end">{message.time}</p>
          </div>
          <p>{message.short_description}</p>
        </div>
      </div>
    ))}
     <Link href={'/users/message'}>
    <div className="flex text-center ">
    <button onClick={toggleOptionsMessage} className="bg-[#2A85FF] py-3 px-12 rounded-lg text-white mx-auto mb-4">View in message center</button>
    </div>
    </Link>
        </div>
      )}
      {isOptionsVisible && (
        <div className="absolute top-full right-0 z-10 w-56 bg-white shadow-md rounded-md mt-2">
          <Link href={'userprofile'}>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Profile
          </button>
          </Link>
          <Link href={'editprofile'}>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
           Edit Profile
          </button>
          </Link>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Updrate To Pro
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={toggleOptions}
          >
            Account settings
          </button>
          <Link href={'sign-in'}>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={toggleOptions}
          >
            Logout
          </button>
          </Link>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNavbar;
