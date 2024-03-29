"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GrDocumentUpload } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const MessagePage = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState("");
  const [vissibleText,setVissibleText]=useState(false);

  const toggleVissible=()=>{
    setVissibleText(!vissibleText);
  }
  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
   

    const user = Data.find((item) => item.id === message.id);
    if (user) {
      setSelectedUserName(user.name);
    } else {
      setSelectedUserName(""); // Set a default or handle accordingly
    }
  };
  const Data = [
    {
      "id": 1,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Product A",
      "short_description": "High-quality item Fast and efficientFast and efficientFast and efficient",
      "time": "10:30 AM"
    },
    {
      "id": 2,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Service B",
      "short_description": "Fast and efficientFast and efficientFast and efficient",
      "time": "02:15 PM"
    },
    {
      "id": 3,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Gadget X",
      "short_description": "Innovative technology Inn.........Innovative technology Inn.........Innovative technology Inn.........",
      "time": "04:45 AM"
    },
    {
      "id": 4,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Event Y",
      "short_description": "Exciting gatheringExciting gatheringExciting gatheringExciting gathering",
      "time": "07:00 PM"
    },
    {
      "id": 5,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Special Z",
      "short_description": "Limited edition",
      "time": "11:20 AM"
    }
  ];

  const messageData = [
    {
      "id": 548921,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Samantha Johnson",
      "date": "2024-03-03",
      "time": "11:20 AM",
      "message": "When do you release the coded for the Fleet - Travel kit?",
      "link": "https://ui8.net/product-link"
    },
    {
      "id": 789034,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Jonathan Miller",
      "date": "2024-03-03",
      "time": "11:20 AM",
      "message": "Any updates on the release date for the Fleet - Travel kit code?",
      "link": "https://ui8.net/product-link"
    },
    {
      "id": 123456,
      "img": "https://i.ibb.co/HP28p9X/Cover-photo.png",
      "name": "Emily Rodriguez",
      "date": "2024-03-03",
      "time": "11:20 AM",
      "message": "Looking forward to the Fleet - Travel kit code release. Any ETA?",
      "link": "https://ui8.net/product-link"
    }
  ];

  return (
    <div>
      <h1 className="text-4xl m-10 font-bold">Message center</h1>
      <div className="m-6 lg:m-10 flex flex-col lg:flex-row gap-5 items-center bg-white rounded-lg">
        <div className="lg:w-[25%]">
          <div className="flex items-center justify-center gap-5 mt-5 bg-[#F4F4F4] p-2 mx-3 rounded-full">
              <div className="flex items-center py-3 bg-white rounded-full px-4 gap-3">
              <FaUserCircle />
              <p>Investors</p>
              </div>
              <div className="flex items-center gap-3">
              <img
                      src="https://i.ibb.co/frvS9tK/Union-Stroke.png"
                      alt="Profile Image"
                      className="rounded-full h-5 w-5"
                    />
              
              <p>Everyone</p>
              </div>
          </div>
          <div className="lg:p-6 rounded-md ">
            {Data.map((message) => (
              <div
                key={message.id}
                onClick={() => handleSelectMessage(message)}
                className="flex items-center gap-2 m-3 p-3 rounded-lg w-full cursor-pointer hover:bg-gray-100"
              >
                <img
                  src={message.img}
                  alt="Profile Image"
                  className="rounded-full h-10 w-10"
                />
                <div>
                  <div className="flex items-center w-64 justify-between">
                    <p className="font-bold">{message.name}</p>
                    <p className="">{message.time}</p>
                  </div>
                  <p>
                    {message.short_description.length > 20
                      ? message.short_description.slice(0, 20) + '...'
                      : message.short_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-5">
            <label className="input input-bordered flex items-center gap-2">
              <span className="text-lg"><CiSearch /></span>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div>
        </div>
        <div style={{ border: '1px solid #F4F4F4' }} className="lg:w-[75%] m-4 rounded-lg">
          {selectedMessage ? (
            <div>
              <div className="bg-[#F4F4F4] p-3 rounded-t-lg">
                <div className="flex items-center justify-between mx-3">
                  <h2 className="text-lg lg:text-3xl font-bold">{selectedUserName}</h2>
                  <p
                    className="text-3xl font-bold cursor-pointer"
                    onClick={toggleVissible}
                  >
                    ...
                  </p>
                  {
                    vissibleText && (
                    <div className="absolute top-72 right-16 opacity-100 bg-white z-10 w-52 shadow-md rounded-md mt-2">
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                    > 
                    <p className="text-lg"><IoCheckmark /></p>
                    <p className="font-bold"> Mark as a read</p>
                     
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                    >
                      <p className="text-lg"><RiDeleteBin6Line /></p>
                      Delete Message
                    </button>
                 
                  </div>
                  )}
                 
                </div>
                <div className="mx-3 flex flex-col lg:flex-row items-center gap-4 my-4">
                  <p>Investment since: Sep 2021</p>
                  <p className="gap-2 flex items-center">Invested:<span className="font-bold">21 items</span></p>
                  <p className="gap-2 flex items-center">Lifetime:<span className="font-bold">$1,235.00</span></p>
                </div>
              </div>
              <div>
                <h2 style={{ border: '1px solid #F4F4F4' }} className="text-center text-md my-12 p-3 font-bold w-[80%] lg:w-[20%] mx-auto rounded-lg">Load conversation</h2>
              </div>
              <div>
                {messageData.map((messaged) => (
                  <div key={messaged.id} className="mx-5 mt-3 flex gap-5">
                    <img
                      src={messaged.img}
                      alt="Profile Image"
                      className="rounded-full h-10 w-10"
                    />
                    <div>
                      <div className="flex items-center gap-3 text-[#6F767E]">
                        <p>{messaged.name}</p>
                        <p>{messaged.time}</p>
                      </div>
                      <p className="my-2">{messaged.message}<br />
                        <span className="text-blue-600 cursor-pointer">{messaged.link}</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-10 m-10">
                <p className="text-2xl cursor-pointer"><GrDocumentUpload /></p>
                <p className="text-2xl cursor-pointer"><BsEmojiSmile /></p>
                <div className="relative w-full">
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <input type="text" className="grow  w-full" placeholder="Message" />
                    <span className="text-lg text-end">
                      <button className="btn bg-blue-500 hover:bg-blue-600 text-white absolute bottom-0 right-0">
                        Send
                      </button>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center border-none text-2xl">Select a message to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
