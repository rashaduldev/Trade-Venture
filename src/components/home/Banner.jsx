import Image from "next/image";
import banner from "../../assets/home/banner.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/9td4XQR/bg.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
      }}
    >
      <div className="container pt-[70px] pb-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-9">
          <div className="lg:col-span-6">
            <h1 className="xl:text-[50px] lg:text-[38px] text-main font-bold">
              Join Us as an Investor, Co-founder, and Pioneer in the Startup
              Revolution!
            </h1>

            <p className="xl:text-xl lg:text-lg font-normal text-main mt-[24px] mb-10">
              Fueling Innovation and Success Through Strategic Collaboration and
              Investment Adventures
            </p>

            <button className="outline-none py-2 px-[25px] rounded-[8px] text-lg font-normal text-white bg-main border border-main duration-300 hover:bg-transparent hover:text-text hover:border-[#e4e4e4]">
              Get Started
            </button>
          </div>

          <div className="lg:col-span-3 ">
            <div className="flex items-end">
              <img
                src="https://i.ibb.co/ww1BvhT/banner.png"
                alt=""
                className="xl:w-[578px] xl:h-[396px] lg:w-[448px] lg:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
