import React from "react";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-16 lg:mt-24 mb-16 lg:mb-24 p-6 lg:p-0 flex-row-reverse lg:flex items-center">
      <div className="lg:w-3/5">
        <img src={banner} alt="banner" />
      </div>

      <div className="lg:w-2/5 mt-6 lg:mt-0">
        <h1 className="text-2xl lg:text-5xl font-normal">
          THE BETTER WAY <br />
          TO FIND
          <span className="font-semibold text-[#28534E]"> A BUILDER</span>
        </h1>
        <hr className="mt-3 lg:mt-6 w-44 lg:w-96 border border-solid border-[#28534E]" />
        <p className="mt-4 lg:mt-9 text-1xl lg:text-2xl">
          Tradebrittany makes it easy to find quality <br /> local tradespeople,
          reviewed by other <br /> homeowners, all across the UK.
        </p>
        <div className="mt-6 space-x-5 lg:space-x-10">
          <button className="w-32 lg:w-52 h-10 lg:h-12 rounded-md lg:rounded-lg uppercase font-normal lg:font-semibold bg-[#28534E] text-[#FFFFFF]">
            post a job
          </button>
          <button className="w-32 lg:w-52 h-10 lg:h-12 border-2 border-[#4EA52F] rounded-md lg:rounded-lg uppercase font-normal lg:font-semibold">
            trade sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
