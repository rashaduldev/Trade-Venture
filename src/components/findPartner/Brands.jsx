import { brandImage } from "@/fakeData/brandImage";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-[#e6eaea] py-[34px]">
      <div className="container">
        <div className="flex items-center justify-center  lg:gap-[100px] md:gap-[70px] gap-[50px] flex-wrap">
          {brandImage.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="Brand Image"
              width={130}
              height={130}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
