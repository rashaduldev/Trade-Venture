import EventProfileBanner from "@/components/startupProfilePage/EventProfileBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventDetailsPage = () => {
  return (
    <div className=''>
        <div>
        <EventProfileBanner />
        </div>
        <p className="lg:text-xl font-normal text-main mb-2 container lg:mt-10 md:mt-64 mt-72 text-center">
        The Africa Startup Festival is an annual event that celebrates and supports entrepreneurship and innovation in Africa. It brings together startups, investors, and industry experts to network, learn, and explore new opportunities for growth. The festival offers valuable opportunities for startups to showcase their products, connect with investors, and gain insights into the challenges and opportunities facing African entrepreneurship.
        </p>
      <div className="container lg:my-7 md:my-5 my-3 text-center">
        <Link href={"/book-event"}>
          <button className="common-button bg-primary text-white hover:bg-secondary">
            Registration Now
          </button>
        </Link>
      </div>
      <div className='flex items-center justify-between lg:px-36 pt-5 pb-10 mx-5'>
        <p className='text-[22CD5A] flex flex-col lg:flex-row items-center'>Event Start Date: <h6>11-Nov-2023</h6></p>
        <p className='text-red-500 flex flex-col lg:flex-row items-center'>Event Start Date: <h6>11-Nov-2023</h6></p>
      </div>
      <div className='lg:px-36 px-5 py-20'>
        <p className='text-2xl text-center lg:text-left lg:text-4xl text-green-600 font-bold'>Our Grate Speaker</p>
        <div className='mt-10 flex flex-col lg:flex-row gap-5'>
        <Image  width={20} height={20} className="" src="https://i.ibb.co/6sz6qQf/image-42.png" alt="" />
        <Image  width={20} height={20} className="" src="https://i.ibb.co/6sz6qQf/image-42.png" alt="" />
        <Image  width={20} height={20} className="" src="https://i.ibb.co/6sz6qQf/image-42.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
