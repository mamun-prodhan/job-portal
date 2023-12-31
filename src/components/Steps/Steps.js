import React from "react";
import img from "../../assets/icons/send.svg";
import Step from "../Step/Step";

const Steps = () => {

  // stepsData array of objects
  const stepsData = [
    {
      image: img,
      step: "STEP 1",
      title: "Post your job",
      description: "Enter your requirements for the job you need undertaken.",
    },
    {
      image: img,
      step: "STEP 2",
      title: "Job is sent to trades",
      description:
        "Your job is sent out instantly to tradespeople local to you.",
    },
    {
      image: img,
      step: "STEP 3",
      title: "Choose tradespeople",
      description: "Choose the best tradespeople that fits your requirements. ",
    },
    {
      image: img,
      step: "STEP 4",
      title: "Get instant responses",
      description:
        "Get responses from local tradespeople interested in undertaking your wokr ",
    },
  ];

  return (
    <div className="p-6 lg:p-0 mb-16 md:mb-24">
      {/* heading */}
      <h2 className="mb-6 lg:mb-12 font-normal text-3xl lg:text-5xl text-center">
        Find a tradesperson have never been <span>so easy</span>
      </h2>
      {/* steps card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {stepsData.map((step, index) => (
          <Step key={index} step={step}></Step>
        ))}
      </div>
    </div>
  );
};

export default Steps;
