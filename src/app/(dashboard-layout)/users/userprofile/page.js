"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiGenderFemaleFill } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import Swal from "sweetalert2";

const userProfile = () => {
    const handleclick = () => {
        Swal.fire({
            title: "<p>To Verify, You’ve to pay the amount of<u> $25</u></p>",
            icon: "info",
            html: `
                <div class='flex gap-5 items-center'>
                    <div class="bg-[#CABDFF] w-3 h-8 rounded-lg"></div>
                    <div>
                        <p class="font-bold text-lg">General information</p>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Proceed to pay
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonAriaLabel: "Thumbs down"
        });
    };
    
    return (
        <div className='relative'>
            <div className=''>   <Image
             width={20}
             height={20}
            src="https://i.ibb.co/HP28p9X/Cover-photo.png"
            alt="Profile Image"
            className="w-full "
            />
            </div>
          <div className="lg:w-[90%] mx-auto absolute top-[90%] px-5 lg:left-20">
             <div className="">
           <div className='p-10 bg-white rounded-md -bottom-30 w-full shadow-xl'>
            <div className='flex justify-between '>
                    <div className='flex gap-5'>
                        <div>
                        <Image
                         width={40}
                         height={40}
                src="https://i.ibb.co/HP28p9X/Cover-photo.png"
                alt="Profile Image"
                className="rounded-full h-10 w-10"
                />  
                        </div>
                        <div>
                            <div className='flex items-center lg:gap-2'>
                            <h1 className='lg:text-3xl font-bold'>Chelsie Haley </h1>
                            <RiVerifiedBadgeFill className='text-2xl text-[#22CD5A]' />
                            </div>
                            <p>Dream big. Think different. Do great!</p>
                        </div>
                    </div>
                    <div>
                       <Link href={'editprofile'}>
                       <button className='btn bg-[#2A85FF] hover:bg-[#2a86ffe1]'>Edit Profile</button>
                       </Link>
                    </div>
                    
                </div>
                <hr className='my-10' />
                    <button className='btn'>Basic Info</button>
            </div>
             </div>
             <div className="py-8">
           <div className='p-10 bg-white rounded-md -bottom-30 w-full shadow-xl'>
           <div className='flex gap-5 items-center'>
                        <div className="bg-[#CABDFF] w-3 h-8 rounded-lg"> 
                        </div>
                        <div>
                            <p className="font-bold text-lg">General information</p>
                        </div>
                    </div>
            <div className='flex flex-col lg:flex-row justify-between mt-10'>
 
                    <div className="mt-9">
                        <div className="flex items-center gap-3">
                            <p className="text-[#2F7889] text-xl"><RiContactsFill /></p>
                            <p className="font-bold">Nickname</p>
                        </div>
                        <div className="flex items-center gap-3 my-3">
                            <p className="text-[#2F7889] text-xl"><PiGenderFemaleFill /></p>
                            <p className="font-bold">Gender</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[#2F7889] text-xl"><MdEmail /></p>
                            <p className="font-bold">Email address</p>
                        </div>
                        <div className="flex items-center gap-3 my-3">
                            <p className="text-[#2F7889] text-xl"><IoLocationSharp /></p>
                            <p className="font-bold">Location</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[#2F7889] text-xl"><RiContactsFill /></p>
                            <p className="font-bold">Contact number</p>
                        </div>
                    </div>
                    <div className="text-center">
                    <RiVerifiedBadgeFill className='text-9xl text-[#22CD5A] mx-auto' />
                    <button onClick={handleclick} className="btn bg-[#032D2C] text-white hover:bg-[#032d2cea]">Apply for verification</button>
                    <p className="py-5">If you verify, There is a huge chance of <br /> investor who’ll love to invest in your pitch</p>
                    </div>
                    
                </div>
            </div>
             </div>
          </div>
        </div>
    );
};

export default userProfile;