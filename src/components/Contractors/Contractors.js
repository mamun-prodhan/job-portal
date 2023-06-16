import React from "react";
import image from "../../assets/images/man.png";
import image2 from "../../assets/small_icon/shield.png";
import image3 from "../../assets/small_icon/heart.png";
import image4 from "../../assets/small_icon/favorite.png";

const Contractors = () => {
  return (
    <div className="flex-row-reverse lg:flex items-center bg-[#28534E] rounded-lg mb-32">
      {/* image div */}
      <div className="p-6 lg:w-1/2">
        <img className="w-100" src={image} alt="" />
      </div>
      {/* text div */}
      <div className="p-6 lg:p-16  lg:w-1/2 mt-0 lg:mt-6 text-[#FFFFFF]">
        <p className="text-2xl mb-6">FOR CONTRACTORS</p>
        <h2 className="mb-3 text-2xl lg:text-4xl font-semibold">
          This is how <br />
          <span className="text-[#A4E4B7]">
            contractors start <br />
            winning more work
          </span>
        </h2>
        <p className="mb-3">
          Whether just starting out or looking to improve or grow your
          business, our expert advice can help you on the road to success.
        </p>
        <div className="flex">
          <div className="mr-2">
            <img className="" src={image2} alt="shield icon" />
          </div>
          <div>
            <p className="md:text-xl">Trust and credibility, get verified and recommened</p>
          </div>
        </div>
        <div className="flex content-start">
          <div className="mr-2">
            <img src={image3} alt="heart icon" />
          </div>
          <div>
            <p className="md:text-xl">Expand Your Reach, faster and better clients </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-2">
            <img src={image4} alt="favourite icon" />
          </div>
          <div>
            <p className="md:text-xl">Trust and credibility, get verified and recommened</p>
          </div>
        </div>
        <button className="w-32 lg:w-52 h-10 lg:h-12 mt-6 rounded-md lg:rounded-lg uppercase font-semibold lg:font-semibold text-[#28534E] bg-[#FFFFFF]">
          register now
        </button>
      </div>
    </div>
  );
};

export default Contractors;
