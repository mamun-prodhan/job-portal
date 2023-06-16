import React from "react";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-32 flex items-center">
      <div className="w-2/5">
        <h1 className="text-5xl font-normal">
          THE BETTER WAY <br />
          TO FIND
          <span className="font-semibold text-[#28534E]">A BUILDER</span>
        </h1>
        <hr className="mt-6 w-96 border border-solid border-[#28534E]" />
        <p className="mt-9 text-2xl">
          Tradebrittany makes it easy to find quality <br /> local tradespeople,
          reviewed by other <br /> homeowners, all across the UK.
        </p>
        <div className="mt-6 space-x-10">
          <button className="w-52 h-12 rounded-md uppercase font-semibold bg-[#28534E] text-[#FFFFFF]">
            post a job
          </button>
          <button className="w-52 h-12 border-2 border-[#4EA52F] rounded-md uppercase font-semibold">
            trade sign up
          </button>
        </div>
      </div>

      <div className="w-3/5">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
