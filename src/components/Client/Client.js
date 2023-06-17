import React from "react";

const Client = (props) => {
  const { title, image } = props.client;
  return (
    <div className="mr-3 text-[#FFFFFF] w-1/3 h-26 p-6 rounded-lg bg-[#3F8925] flex items-center justify-around">
      <div>
        <p className="text-4xl">{title}</p>
      </div>
      <div>
        <img src={image} alt="icon" />
      </div>
    </div>
  );
};

export default Client;
