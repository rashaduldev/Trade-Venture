import Link from "next/link";
import { menuItems } from "./Navbar";

const MobileSidebar = () => {
  return (
    <div className="min-w-full w-full bg-[#f2f2f2] z-50 h-full px-5 py-10 shadow-md">
      <ul className="flex flex-col gap-5">
        {menuItems.map((menu) => (
          <li key={menu.id}>
            <Link
              href={menu.link}
              className="text-lg font-medium text-main duration-300"
            >
              {menu.text}
            </Link>
          </li>
        ))}
        <div className="flex gap-5 flex-col">
          <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-text bg-transparent border border-[#e4e4e4] duration-300 hover:bg-main hover:text-white hover:border-main w-max">
            Sign In
          </button>
          <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-white bg-main border border-main duration-300 hover:bg-transparent hover:text-text hover:border-[#e4e4e4] w-max">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default MobileSidebar;
