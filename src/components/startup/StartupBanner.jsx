import React from "react";
import { IoMdOptions } from "react-icons/io";
import ProtectedSearchInput from "../userForm/ProtectedSearchInput";

const StartupBanner = () => {
  return (
    <div className="startup-banner">
      <div className="container relative">
        <div className="pt-24">
          {/* search field */}
          <div className="flex gap-5 md:items-center justify-center text-center h-full">
            <ProtectedSearchInput />
          </div>

          <div className="flex items-center justify-between mt-16 ">
            <h2 className="text-white font-bold capitalize lg:text-[48px] text-[22px]">
              Choose your startup
            </h2>
            <div className="flex gap-2 items-center bg-white rounded-md px-3 py-2 cursor-pointer">
              <h5 className="text-sm font-semibold">Options</h5>
              <IoMdOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupBanner;
