"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const EventProfileBanner = ({item}) => {
    console.log(item);
  return (
    <div>
      {/* profile banner */}
      <div className="startup-profile-banner lg:h-[230px] md:h-[180px] h-[150px]">
        <div className="container relative h-full">
          <div className="flex justify-end items-end h-full">
          </div>
        </div>
      </div>
      <div className="container">
        {/* profile image part */}
        <div className="flex justify-between  flex-col lg:flex-row md:flex-row">
          <div className="gap-4 lg:-mt-[101px]  z-50">
            <div className="lg:w-[1403px] lg:h-[603px] md:w-[705px] md:h-[145px] w-[400px] -mt-10 h-[100px] relative">
            <div className="card bg-base-100 shadow-xl image-full mx-auto">
            <figure className="lg:w-full h-[80vh]"><img className="w-full h-[100vh]" src="https://i.ibb.co/CvL3TxH/img.jpg" alt="" /></figure>
            <div className="card-body lg:mt-56">
                <h2 className="card-title lg:text-7xl">Exiting Adventure</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex items-center gap-2 text-4xl">
            <CiLocationOn />
            location
            </div>
            </div>
            
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventProfileBanner;
