import SectionTitle from "../shared/sectionTitle/SectionTitle";
import styles from "./ContactDetails.module.css";
import { PiPhoneCallBold } from "react-icons/pi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import RadioGroup from "./RadioGroup";

const ContactDetails = () => {
  return (
    <div className="md:pt-[34px] pt-[24px] container mb-5">
      <SectionTitle title={"Let’s talk with us"} />
      <div className="grid grid-cols-1 lg:grid-cols-8 mt-[31px] lg:shadow-xl hover:shadow-none duration-300">
        <div className="lg:col-span-3  bg-[#22CD5A] rounded-md py-10 px-10 relative">
          <div className={styles.circle}></div>
          <div className=" lg:h-full  h-[350px] flex justify-between flex-col">
            <div className=" ">
              <h2 className="text-white  lg:text-[28px] text-[22px] font-semibold">
                Contact Information
              </h2>
              <p className="lg:text-lg text-base text-white  font-normal mt-[6px]">
                Say something to start a live chat!
              </p>
            </div>
            <div className=" flex flex-col lg:gap-[50px] gap-[25px]">
              <div className="flex gap-[25px] items-center">
                <PiPhoneCallBold color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  +880 1727887729
                </span>
              </div>
              <div className="flex gap-[25px] items-center">
                <BsFillEnvelopeFill color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  hello@tradeventures.pro
                </span>
              </div>
              <div className="flex gap-[25px] items-center">
                <MdLocationPin color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  Banani 11, Dhaka, Bangladesh
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaFacebookF size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaYoutube size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaInstagram size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaLinkedinIn size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaTwitter size={20} className="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-md bg-white lg:px-[50px] lg:pt-[60px] lg:pb-[153px] pb-[50px] px-5 mt-10  lg:mt-0">
          <div className="flex items-center lg:flex-row flex-col lg:gap-10 md:gap-7 gap-5">
            <div className="lg:w-1/2 w-full">
              <label
                htmlFor="firstName"
                className="text-[#1c1c1c] text-sm font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Ex: Jhon"
                className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label
                htmlFor="lastName"
                className="text-[#1c1c1c] text-sm font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Ex: Doe"
                className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
              />
            </div>
          </div>

          <div className="flex items-center lg:flex-row flex-col lg:gap-10 md:gap-7 gap-5 lg:mt-10 md:mt-7 mt-5">
            <div className="lg:w-1/2 w-full">
              <label
                htmlFor="firstName"
                className="text-[#1c1c1c] text-sm font-medium"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Ex: Jhon@exp.com"
                className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label
                htmlFor="lastName"
                className="text-[#1c1c1c] text-sm font-medium"
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Ex: +10214*****"
                className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
              />
            </div>
          </div>

          <div className="lg:mt-10 md:mt-7 mt-5">
            <h2 className="text-sm text-[#1c1c1c] font-medium">
              Select Subject?
            </h2>
            <div>
              <RadioGroup />
            </div>
          </div>
          <div className="lg:mt-10 md:mt-7 mt-5 w-full">
            <label
              htmlFor="firstName"
              className="text-[#1c1c1c] text-sm font-medium"
            >
              Message
            </label>
            <input
              type="text"
              placeholder="Type your message"
              className="outline-none bg-transparent border-b border-[#8d8d8d] pb-[10px] text-sm font-normal text-[#8d8d8d] w-full mt-2"
            />
          </div>
          <div className="flex justify-end mt-10 md:mt-7 mt-5">
            <button class="w-full px-6 py-4 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#22CD5A] rounded-lg hover:bg-[#09ac3f] focus:ring focus:ring-[#22CD5A] focus:ring-opacity-80">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
