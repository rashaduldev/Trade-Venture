import AccordionContainer from "./AccordionContainer";

const AskedQuestion = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-[#f6f6f6]">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-[30px] w-full">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-main xl:text-[50px] lg:text-[42px] text-[28px] font-bold ">
              Frequently Asked Questions
            </h2>

            <ul className="xl:mt-20 lg:mt-16 md:mt-[42px] mt-[40px] flex lg:flex-col flex-row gap-[28px] flex-wrap">
              <li className="cursor-pointer text-base text-[#777] font-normal ">
                General
              </li>
              <li className="cursor-pointer text-base text-[#777] font-normal ">
                Services
              </li>
              <li className="cursor-pointer text-base text-main font-semibold ">
                Payment
              </li>
              <li className="cursor-pointer text-base text-[#777] font-normal ">
                Contact
              </li>
              <li className="cursor-pointer text-base text-[#777] font-normal ">
                Refund
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
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
