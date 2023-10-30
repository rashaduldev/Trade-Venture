import { BiChevronRight } from "react-icons/bi";

const TeamInvestor = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] bg-secondary">
      <div className="container">
        <div className="lg:pr-5">
          <p className="text-white text-[22px] font-normal">
            Short Term Investor
          </p>
          <h2 className="text-[35px] font-bold text-white mt-5 mb-[30px]">
            Unleashing Opportunities and Maximizing Profits through Astute
            Short-Term Investments in Today's Dynamic Business Landscape
          </h2>
          <ul>
            <li>
              <span>
                <BiChevronRight />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamInvestor;
