"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProfileImageGallery = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const companyImageGallery = [
    "https://i.ibb.co/LdLRqDL/student-849828-1280.jpg",
    "https://i.ibb.co/2M9bpQY/computer-1185626-1280.jpg",
    "https://i.ibb.co/bNn0HLf/entrepreneur-593362-1280.jpg",
    "https://i.ibb.co/yQ9Hcdq/student-849824-1280.jpg",
    "https://i.ibb.co/dmqY2bb/entrepreneur-593357-1280.jpg",
    "https://i.ibb.co/TkQh7vk/entrepreneur-593378-1280.jpg",
  ];
  console.log(companyImageGallery);

  const [selectedImage, setSelectedImage] = useState([companyImageGallery[0]]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = companyImageGallery.indexOf(selectedImage);

      const nextIndex = (currentIndex + 1) % companyImageGallery.length;

      setSelectedImage(companyImageGallery[nextIndex]);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedImage, companyImageGallery]);

  return (
    <div className="px-1 lg:px-0">
      <div className="relative w-full h-[250px] md:h-[400px]">
        <Image src={selectedImage} alt="" fill className="rounded-xl" />
      </div>
      <div className="flex flex-wrap gap-5 mt-2 mb-4">
        {companyImageGallery?.map((image, index) => {
          return (
            <Image
              onClick={() => setSelectedImage(image)}
              src={image}
              alt=""
              key={index}
              width={100}
              height={75}
              className="cursor-pointer rounded-xl hover:brightness-50 duration-300"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileImageGallery;