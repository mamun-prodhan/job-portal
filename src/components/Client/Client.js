import React from "react";

const Client = (props) => {
  const { title, image } = props.client;
  return (
    <div className="mr-2 lg:mr-3 text-[#FFFFFF] h-12 md:h-16 lg:h-full p-2 md:p-6 lg:p-6 rounded-lg bg-[#3F8925] flex items-center justify-around">
      <div className="w-5/6">
        <p className="text-xs md:text-xl lg:text-4xl">{title}</p>
      </div>
      <div className="w-1/6">
        <img src={image} alt="icon" />
      </div>
    </div>
  );
};

export default Client;
