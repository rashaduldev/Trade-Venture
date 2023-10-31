import AccordionContainer from "./AccordionContainer";

const AskedQuestion = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-[#f6f6f6]">
      <div className="container">
        <div className="flex gap-[30px] w-full">
          <div className="w-1/2 ">
            <h2 className="text-main xl:text-[50px] lg:text-[42px] md:text-[28px] text-[22px] font-bold ">
              Frequently Asked Questions
            </h2>

            <ul className="xl:mt-20 lg:mt-16 md:mt-[42px] mt-[30px]">
              <li className="cursor-pointer text-base text-[#777] font-normal mb-[28px]">
                General
              </li>
              <li className="cursor-pointer text-base text-[#777] font-normal mb-[28px]">
                Services
              </li>
              <li className="cursor-pointer text-base text-main font-semibold mb-[28px]">
                Payment
              </li>
              <li className="cursor-pointer text-base text-[#777] font-normal mb-[28px]">
                Contact
              </li>
              <li className="cursor-pointer text-base text-[#777] font-normal mb-[28px]">
                Refund
              </li>
            </ul>
          </div>

          <div className="w-1/2">
            <div className="">
              <input
                type="text"
                placeholder="Type Your Email Address"
                className="w-full p-[16px] outline-none rounded-md placeholder-[#bbb]"
              />
            </div>

            <AccordionContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
