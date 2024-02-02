import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { LuBell } from "react-icons/lu";


const DashboardTopNavbar = () => {
  return (
    <div className="py-[20px] shadow-sm pl-4 pr-10 bg-white ">
        <div className="flex items-center justify-between ">
        <div className="flex items-center gap-[12px]">
            <FaArrowLeftLong size={18}/>
            <h2 className="text-[20px] font-semibold text-main">Back to landing page</h2>
        </div>
        
        { /* profile section  */}
        <div className="flex gap-4">
            <div className="relative">      
            <BiMessageDetail size={32} color="#6F767E"/>
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
            </div>

            <div className="relative">
            <LuBell size={32} color="#6F767E"/>
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DashboardTopNavbar