"use client";
import Image from "next/image";
import logo from "../../assets/home/footer-logo.png";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export const menuItems = [
  {
    id: 1,
    text: "Startup",
    link: "/startup",
  },
  {
    id: 2,
    text: "Investor",
    link: "/investor",
  },
  {
    id: 3,
    text: "Co-Founder",
    link: "/co-founder",
  },
  {
    id: 4,
    text: "Mentor",
    link: "/mentor",
  },
  {
    id: 5,
    text: "Market Place",
    link: "/market-place",
  },
  {
    id: 6,
    text: "Events",
    link: "/events",
  },
];

const ProtectedNavbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);
  const pathName = usePathname();

  return (
    <div className="bg-secondary py-3 lg:py-[24px] ">
      <div className="container relative">
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/home">
              <Image src={logo} alt="Logo" width={121} />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[30px]">
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.link}
                    className={
                      pathName === menu.link
                        ? "text-lg font-normal text-primary duration-300"
                        : "text-lg font-normal text-white duration-300"
                    }
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <div className="flex gap-6">
              <div>
                <FaUser color="#fff" size={22} className="cursor-pointer" />
              </div>
              <div>
                <MdLogout color="#fff" size={22} className="cursor-pointer" />
              </div>
            </div>
          </div>
          {/* responsive design bar here */}
          <div
            className="block lg:hidden cursor-pointer duration-300"
            onClick={() => setNavbarShow(!navbarShow)}
          >
            {!navbarShow ? (
              <HiMiniBars3 size={30} className="cursor-pointer text-white" />
            ) : (
              <IoMdClose size={30} className="cursor-pointer text-white" />
            )}
          </div>
        </div>

        <div
          className={
            navbarShow
              ? "absolute top-full right-0 w-full mt-4 duration-300"
              : "absolute top-[-1000px] right-0 w-full mt-4 duration-300"
          }
        >
          <MobileNavbar setNavbarShow={setNavbarShow} />
        </div>
      </div>
    </div>
  );
};

export default ProtectedNavbar;
