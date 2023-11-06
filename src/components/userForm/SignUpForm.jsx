"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl xl:mt-[110px] lg:mt-[90px] md:mt-[60px] mt-10">
      <div className="hidden bg-cover lg:block lg:w-1/2 signup-bg"></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div>
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email address..."
            className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Enter your password ..."
              className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3"
            />
            <div
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <AiOutlineEye className="text-[24px]" color="#bbb" />
              ) : (
                <AiOutlineEyeInvisible className="text-[24px]" color="#bbb" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="name" className="text-lg font-medium text-text ">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={passwordShow ? "text" : "password"}
              placeholder="Retype your password ..."
              className="placeholder-[#bbb] outline-none py-[10px] px-[20px] block w-full border border-[#E4E3E3] rounded-md mt-3"
            />
            <div
              className="absolute right-3 top-2 cursor-pointer"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <AiOutlineEye className="text-[24px]" color="#bbb" />
              ) : (
                <AiOutlineEyeInvisible className="text-[24px]" color="#bbb" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#17C550] rounded-lg hover:bg-[#056b27] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>

        <div>
          <Link
            href="#"
            className="flex items-center justify-center gap-5 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className=" px-4 py-3 font-bold text-center capitalize">
              continue with google
            </span>
          </Link>
        </div>

        <div className=" mt-4">
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#17C550]">
              sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;