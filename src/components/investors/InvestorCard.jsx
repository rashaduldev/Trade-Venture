import Image from "next/image";

const InvestorCard = ({ item }) => {
  return (
    <div className="bg-green-100 py-5 px-4 rounded-md shadow-md duration-300 hover:shadow-none">
      <Image
        src={item?.image}
        alt=""
        width={243}
        height={243}
        className="rounded-lg"
      />
      <div className="mt-5">
        <h2 className="text-main font-bold text-lg">{item?.name}</h2>
        <p className="text-text text-[14px] font-normal mt-2">
          {item?.details}
        </p>
        <p className="my-2 text-base font-semibold text-main">
          Total Invest: <b>{item?.totalInvest}</b>
        </p>
        <div className="flex justify-center mt-1">
          <button className="outline-none py-2 xl:px-[25px] px-[15px] md:px-[20px]  rounded-[8px] lg:text-lg text-base font-normal hover:bg-secondary  border duration-300 bg-primary text-white">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
