import React from "react";

const Step = (props) => {
  const { image, step, title, description } = props.step;
  console.log(title);
  return (
    <div className="bg-[#F8FAF7] rounded-lg p-6 lg:p-10">
      <img src={image} alt="arrow steps" />
      <h3 className="text-xl my-3">{step}</h3>
      <p className="text-xl font-semibold mb-2">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Step;
