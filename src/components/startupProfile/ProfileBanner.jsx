"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const ProfileBanner = () => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div>
      {/* profile banner */}
      <div className="startup-profile-banner">
        <div className="container relative h-full">
          <div className="flex justify-end items-end h-full">
            <div className="mb-7 flex items-center gap-4">
              <FaSquareFacebook
                className="cursor-pointer text-white"
                size={36}
              />
              <ImLinkedin className="cursor-pointer text-white" size={36} />
            </div>
          </div>
        </div>
      </div>
      {/* profile image part */}
      <div className="flex justify-between items-end container">
        <div className="flex items-end gap-4 -mt-[101px]  z-50">
          <Image
            src={"https://i.ibb.co/9qWJdkH/6.jpg"}
            alt="profile image"
            width={203}
            height={203}
            className="rounded-md"
          />
          <div>
            <h2 className="text-main font-semibold text-3xl">Kim Jun Qung</h2>
            <h6 className="text-text font-normal text-xl mt-2">
              Founder and CEO at infosys
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/message">
            <FaFacebookMessenger size={30} className="text-secondary " />
          </Link>
          <div onClick={() => setBookmark(!bookmark)}>
            {bookmark ? (
              <FaBookmark size={30} className="text-secondary cursor-pointer" />
            ) : (
              <FaRegBookmark
                size={30}
                className="text-secondary cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
