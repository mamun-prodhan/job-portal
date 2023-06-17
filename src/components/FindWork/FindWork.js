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
    <div className="mb-32 lg:flex">
      <div className="w-full lg:w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="p-6 lg:p-16  lg:w-1/2 text-[#FFFFFF] bg-[#2F56BC]">
        <p className="text-2xl mb-5">FOR CONTRACTORS</p>
        <h2 className="mb-3 lg:mb-5 text-3xl lg:text-5xl font-semibold">
          Find great <br />
          work
        </h2>
        <p className="mb-3 lg:mb-5">
          Whether just starting out or looking to improve or grow your business,
          our expert advice can help you on the road to success.
        </p>
        <hr className="mb-6 border border-solid border-[#FFFFFF]" />
        <div className="lg:flex mb-5">
            {
                workData.map((data, index) => <WorkData
                key={index}
                data={data}
                ></WorkData>)
            }
        </div>
        <button className="w-48 lg:w-52 h-10 lg:h-12 rounded-md lg:rounded-lg uppercase font-semibold bg-[#FFFFFF] text-[#2F56BC]">
          find opportunities
        </button>
      </div>
    </div>
  );
};

export default FindWork;
