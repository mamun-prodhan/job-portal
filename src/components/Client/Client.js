import React from "react";

const Client = (props) => {
  const { title, image } = props.client;
  return (
    <div className="mr-3 text-[#FFFFFF] w-200 bg-[#3F8925] flex">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <img src={image} alt="icon" />
      </div>
    </div>
  );
};

export default Client;
