import React from "react";
import image from "../../assets/images/balloons.png";

const Help = () => {
  return (
    <div className="mb-16 md:mb-24 p-6 lg:flex flex-row-reverse items-center bg-[#F8FAF7] rounded-lg">
      <div className="w-full lg:w-1/5">
        <img src={image} alt="help" />
      </div>
      <div className="w-full lg:w-4/5">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-3 lg:mb-6">We are here to help</h2>
        <p>
          Reach out today for expert guidance and personalized solutions. We're
          here to help you achieve your goals.
        </p>
        <button className="w-48 lg:w-52 h-10 lg:h-12 mt-6 border-2 border-[#4EA52F] text-[#4EA52F] rounded-md lg:rounded-lg uppercase font-normal lg:font-semibold">
            contact us
          </button>
      </div>
    </div>
  );
};

export default Help;
