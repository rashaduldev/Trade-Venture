import React from "react";
import ProtectedSearchInput from "../userForm/ProtectedSearchInput";
import { RiListSettingsLine } from "react-icons/ri";

const Banner = ({ title }) => {
  return (
    <div className="bg-[#22CD5A] py-5">
      <div className="container relative">
        <div className="pt-24">
          {/* search field */}
         <div className='flex justify-between gap-24'>
         <div className="lg:w-[80%] ">
            
         {/* <div className="flex gap-5 md:items-center justify-center text-center h-full">
            <ProtectedSearchInput />
          </div> */}
         <div className="">
            <ProtectedSearchInput />
          </div>

          <div className="">
            <h2 className="text-white font-bold capitalize lg:text-[62px] text-[22px] py-10">
              {title}
            </h2>
          </div> 
          
          </div>   
         <div className='lg:w-[20%]'>
         <select
          className="w-[210px] bg-gray-200 h-[45px] outline-none px-2 rounded-md font-semibold text-sm pl-5 relative"
          name=""
          id=""
        >
          <option value="a">Co-founder</option>
          <option value="a">Advertisement</option>
          <option value="a">Investing</option>
        </select>
        <RiListSettingsLine className='absolute top-[110px] right-[140px] text-2xl' />
        </div>   
         </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
