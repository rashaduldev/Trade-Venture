import Image from "next/image";
import logo from "../../assets/home/logo.png";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="bg-white py-[24px] border-b border-[#eaeaea]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" width={121} />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[30px]">
              <li>
                <Link
                  href="/"
                  className="text-lg font-medium text-main duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg font-normal text-text duration-300 hover:text-main hover:font-medium"
                >
                  Find Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-lg font-normal text-text duration-300 hover:text-main hover:font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg font-normal text-text duration-300 hover:text-main hover:font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg font-normal text-text duration-300 hover:text-main hover:font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:block">
            <div className="flex gap-4">
              <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-text bg-transparent border border-[#e4e4e4] duration-300 hover:bg-main hover:text-white hover:border-main">
                Sign In
              </button>
              <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-white bg-main border border-main duration-300 hover:bg-transparent hover:text-text hover:border-[#e4e4e4]">
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <HiMiniBars3 size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
