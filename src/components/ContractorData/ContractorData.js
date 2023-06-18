import React from "react";

const ContractorData = (props) => {
    // destructuring the props
    const {image, details} = props.data;

  return (
    <div className="flex mb-2">
      <div className="mr-2 mt-1 w-5">
        <img src={image} alt="icon" />
      </div>
      <div>
        <p className="md:text-xl">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ContractorData;
