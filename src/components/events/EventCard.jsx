import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

const EventCard = ({ item }) => {
  const {id,image,title,small_paragraph,location,date,amount } = item;
  return (
   <Link href={`/events/${item?.id}`}>
    <div className="bg-green-100 cursor-pointer rounded-sm">
      <div className="card image-full bg-green-100 py-5 px-4 rounded-md duration-300 hover:shadow-none h-[355px]">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{small_paragraph}</p>
    <div className="flex items-center gap-2">
    <CiLocationOn />
      {location}
    </div>
  </div>
  
</div>
   <div className="p-2">
   <div>
    <p className="text-2xl font-bold">{title}</p>
   </div>
   <div className="flex items-center justify-between my-2">
    <p>{date}</p>
    <button className="px-8 py-1 bg-[#032D2C] text-white rounded-full">${amount}</button>
   </div>
   </div>
    </div>
   </Link>
  );
};

export default EventCard;
