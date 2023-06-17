import React from "react";
import image from "../../assets/images/work.jpg";
import WorkData from "../WorkData/WorkData";

const FindWork = () => {
  const workData = [
    {
      title: "Find opportunities for every stage of your  career",
    },
    {
      title: "Control when and where you work ",
    },
    {
      title: "Explore different ways to earn ",
    },
  ];

  return (
    <div className="mb-16 md:mb-24 lg:flex">
      <div className="w-full lg:w-1/2 rounded-lg">
        <img src={image} alt="" />
      </div>
      <div className="p-6 md:p-16  lg:w-1/2 text-[#FFFFFF] bg-[#2F56BC] rounded-r-lg">
        <p className="text-2xl mb-5">FOR CONTRACTORS</p>
        <h2 className="mb-3 md:mb-5 text-3xl md:text-5xl font-semibold">
          Find great <br />
          work
        </h2> 
        <p className="mb-3 md:mb-6">
          Whether just starting out or looking to improve or grow your business,
          our expert advice can help you on the road to success.
        </p>
        <hr className="mb-6 border border-solid border-[#FFFFFF]" />
        <div className="md:flex mb-5">
            {
                workData.map((data, index) => <WorkData
                key={index}
                data={data}
                ></WorkData>)
            }
        </div>
        <button className="w-48 md:w-52 h-10 md:h-12 rounded-md md:rounded-lg uppercase font-semibold bg-[#FFFFFF] text-[#2F56BC]">
          find opportunities
        </button>
      </div>
    </div>
  );
};

export default FindWork;
